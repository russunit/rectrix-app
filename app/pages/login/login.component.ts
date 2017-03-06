import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";


import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { CurrentUserService } from "../../shared/current-user/current-user.service"
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: "login",
  template: `

	<StackLayout height={{height-70}} class="background" *ngIf="!loading">
		<ScrollView>
			<StackLayout class="layout">
				<label text='Log in to Rectrix' horizontalAlignment='center' class="title"></label>

				<TextField  autocapitalizationType="none" [(ngModel)]="user.username"></TextField>
				<label text='Username' class='field-label'></label>
				<TextField autocapitalizationType="none" secure="true" [(ngModel)]="user.password"></TextField>
				<label text='Password' class='field-label'></label>
				
				<Button text="Log in" (tap)="login()" horizontalAlignment='center'></Button>
			</StackLayout>
		</ScrollView>
	</StackLayout>

  <div height={{height-70}} *ngIf="loading">
	<ActivityIndicator [busy]="isLoading" [visibility]="isLoading ? 'visible' : 'collapse'" row="1" class="loading-indicator" horizontalAlignment="center" verticalAlignment="middle" width="150" height="150"></ActivityIndicator>
    <md-progress-bar mode="indeterminate"></md-progress-bar>
	<label text="Logging in please wait..." horizontalAlignment='center' verticalAlignment='center' class="loading-label"></label>
  </div> 

	`,
	providers: [UserService],
	styleUrls: ['pages/login/login.css']
})
export class LoginComponent implements OnInit
{
	user: User;
	loading: boolean = false;
	loggedIn: boolean = false;
	isLoading = false;

	platform = require("platform");
    screen = this.platform.screen;
    height: number = this.screen.mainScreen.heightDIPs;
  
  subscription1:Subscription;

	constructor(private router: Router, private userService: UserService, private currentUserService: CurrentUserService) 
	{
		this.user = new User();
	}

  ngOnInit()
  {
    this.subscription1 = this.currentUserService.loggedIn$.subscribe(loggedIn => this.loggedIn = loggedIn );
    if(this.loggedIn)
    {
      alert("Already logged in.");
      this.router.navigate(["/dashboard"]); 
    }
	
	this.isLoading = true;
  }

  ngOnDestroy() 
  {
    
    this.subscription1.unsubscribe();

  }

	login()
	{
      this.loading = true;

    	let responseString = this.userService.login(this.user);

      console.log(responseString);

      if(responseString == "notfound")
      {
        alert("Account not found.");
        this.loading = false;
      }
      else if(responseString == "alreadyloggedin")
      {
        alert("Already logged in.");
        this.loading = false;
      }
      else
      //no error message
      {
        let loggingInUser = this.userService.stringToUserProfile(responseString);
        this.currentUserService.changeUser(loggingInUser);
        if(loggingInUser.username == "undefined" || loggingInUser.username == "")
        //the parse or server returned garbage
        {
          alert("INTERNAL ERROR");
          this.loading = false;
        }
        else
        //successful login
        {
          this.currentUserService.toggleLoggedIn(true);
          alert("Logged in as "+this.user.username+"!");
          this.router.navigate(["/dashboard"]); 
        }

      }

      //	.subscribe(
      //  	() => {
        		//sets the current user
      //  		this.currentUserService.changeUser(this.user);
    	//		this.currentUserService.toggleLoggedIn(true);
    	//		alert("Logged in as "+this.user.username+"!");
      //  		this.router.navigate(["/dashboard"]); 
      //  		}, 
      //  	(error) => {
      //      alert("Unfortunately we could not find your account.");
      //      this.loading = false;
      //      }
      //	);

        
  	}


  	
}