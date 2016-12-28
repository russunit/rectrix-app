import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";


import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { CurrentUserService } from "../../shared/current-user/current-user.service"
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: "login",
  template: `

  <StackLayout *ngIf="!loading">
  <ScrollView>
  <StackLayout>
  	<label text='Sign in to Rectrix' horizontalAlignment='center'></label>

	   <label text='user name'></label>
	   <TextField  autocapitalizationType="none" [(ngModel)]="user.username"></TextField>

	   <label text='password'></label>
	   <TextField autocapitalizationType="none" secure="true" [(ngModel)]="user.password"></TextField>

	   <Button text="Sign in" (tap)="login()" horizontalAlignment='center'></Button>
  </StackLayout>
  </ScrollView>
  </StackLayout>

  <div class="loading-overlay" *ngIf="loading">
    <label text="Please Wait..."></label>
    <md-progress-bar mode="indeterminate"></md-progress-bar>
  </div>

	`,
	providers: [UserService],
})
export class LoginComponent implements OnInit
{
	user: User;
  loading: boolean = false;
  loggedIn: boolean = false;

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
      alert("Already signed in.");
      this.router.navigate(["/dashboard"]); 
    }
  }

  ngOnDestroy() 
  {
    
    this.subscription1.unsubscribe();

  }

	login() 
	{
      this.loading = true;

    	this.userService.login(this.user)
      	.subscribe(

        	() => {
        		

        		//sets the current user
        		this.currentUserService.changeUser(this.user);
    			this.currentUserService.toggleLoggedIn(true);

    			alert("Signed in as "+this.user.username+"!");

        		this.router.navigate(["/dashboard"]); 
        		}, 
        	(error) => {
            alert("Unfortunately we could not find your account.");
            this.loading = false;
            }
      	);

        
  	}


  	
}