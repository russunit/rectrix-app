import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";


import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { CurrentUserService } from "../../shared/current-user/current-user.service"
import { Subscription } from 'rxjs/Subscription';
import { CharterRequest } from "../../shared/charter-request/charter-request";
import { ShuttleRequest } from "../../shared/shuttle-request/shuttle-request";


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
    //responseString:string;
	
	myUser: User;
	myShuttle: ShuttleRequest;
	shuttleList =  new Array();
	myCharter: CharterRequest;
	charterList = new Array();

	constructor(private router: Router, private userService: UserService, private currentUserService: CurrentUserService) 
	{
		this.user = new User();
		/*this.myShuttle = {
			firstName: "Anthony",
			lastName: "Kapotsis",
			phoneNumber: "428-528-9026",
			tripType: "Round-Trip",
			departLocation: "Hyannis",
			departDate: "04/17/2017",
			departTime: "9:00 AM",
			arriveLocation: "Nantucket",
			arriveDate: "04/17/2017",
			arriveTime: "3:00 PM",

			numAdults: 1,
			numChildren: 0,
			numInfants: 0,
		}
		
		this.shuttleList.push(this.myShuttle);
		
		this.myCharter = {
			firstName: "Anthony",
			lastName: "Kapotsis",
			phoneNumber: "428-528-9026",
			tripType: "Round-Trip",
			departLocation: "Nantucket",
			departDate: "01/15/2017",
			departTime: "2:00 AM",
			arriveLocation: "Hyannis",
			arriveDate: "01/15/2017",
			arriveTime: "5:00 PM",

			requirements: "None",
			preferredCraft: "None",
		}
		
		this.charterList.push(this.myCharter);
		
		this.myUser = {
			firstName: "Anthony",
			lastName: "Kapotsis",
			address: "345 Levy Lane",
			city: "Cardiff",
			country: "Wales",
			zip: "05947",
			username: "akapotsis",
			password: "gdfgerges",
			email: "akapotsis999@gmail.com", 
			charterHistory: this.charterList,
			shuttleHistory: this.shuttleList,
		}*/
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
		/*this.router.navigate(["/profileview"]);
		let loggingInUser = this.myUser;
        this.currentUserService.changeUser(loggingInUser);
        this.currentUserService.toggleLoggedIn(true);*/
	
      this.loading = true;

    	this.userService.login(this.user)
        .subscribe(response => 
        {
          var responseString = response.json().toString();

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
          else if(responseString.startsWith("OK"))
          //success
          {
            let loggingInUser = this.userService.stringToUserProfile(responseString);
            this.currentUserService.changeUser(loggingInUser);
            this.currentUserService.toggleLoggedIn(true);
            alert("Logged in as "+this.user.username+"!");
            this.router.navigate(["/dashboard"]); 
          }
          else
          //the parse or server returned garbage
          {
            alert("INTERNAL ERROR");
            this.loading = false;
          }

        }//end subscribe
        );//end subscribe

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