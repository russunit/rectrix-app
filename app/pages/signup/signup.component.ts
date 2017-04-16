import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TextField } from "ui/text-field";
import { CurrentUserService } from "../../shared/current-user/current-user.service";
import { Subscription } from 'rxjs/Subscription';


import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { CharterRequest } from "../../shared/charter-request/charter-request";
import { ShuttleRequest } from "../../shared/shuttle-request/shuttle-request";

@Component({
  selector: "signup",
  template: `
	<ScrollView>
		<StackLayout class="background" *ngIf="!loading">
			<StackLayout class="layout">
				<label text='Sign up with Rectrix' horizontalAlignment='center' class="title"></label>
				<TextField autocorrect="false" autocapitalizationType="none" [(ngModel)]="user.firstName" hint="John"></TextField>
				<label text='First Name' class='field-label'></label>
				
				<TextField autocorrect="false" autocapitalizationType="none" [(ngModel)]="user.lastName" hint="Smith"></TextField>
				<label text='Last Name' class='field-label'></label>
				
				<TextField autocorrect="false" autocapitalizationType="none" [(ngModel)]="user.address" hint="123 Main Street"></TextField>
				<label text='Address' class='field-label'></label>
				
				<TextField autocorrect="false" autocapitalizationType="none" [(ngModel)]="user.city" hint="New York, NY"></TextField>
				<label text='City' class='field-label'></label>
				
				<TextField autocorrect="false" autocapitalizationType="none" [(ngModel)]="user.country" hint="United States"></TextField>
				<label text='Country' class='field-label'></label>
				
				<TextField keyboardType ="number" [(ngModel)]="user.zip" hint="01234"></TextField>
				<label text='Zip code' class='field-label'></label>
				
				<TextField autocorrect="false" autocapitalizationType="none" [(ngModel)]="user.username"></TextField>
				<label text='Username' class='field-label'></label>
				
				<TextField secure = "true" [(ngModel)]="user.password"></TextField>
				<label text='Password' class='field-label'></label>
				
				<Button text="Sign Up"(tap)="signUp(this.user)" horizontalAlignment='center'></Button>
			</StackLayout>
		</StackLayout>
	</ScrollView>
	<StackLayout class="loading-overlay" *ngIf="loading">
		<ActivityIndicator [busy]="isLoading" [visibility]="isLoading ? 'visible' : 'collapse'" row="1" class="loading-indicator" horizontalAlignment="center" verticalAlignment="middle" width="150" height="150"></ActivityIndicator>
		<md-progress-bar mode="indeterminate"></md-progress-bar>
	    <label text="Signing up please Wait..." horizontalAlignment='center' verticalAlignment='center' class="loading-label"></label>
	</StackLayout>
`,
	providers: [UserService],
	styleUrls: ['pages/signup/signup.css']
})

export class SignupComponent implements OnInit
{
	user : User;
	loading: boolean = false;
	loggedIn: boolean = false;
	subscription1:Subscription;

	constructor(private router: Router, private userService: UserService , private currentUserService: CurrentUserService) 
	{
    	this.user = new User(); 
	    this.user.charterHistory= null;
        this.user.shuttleHistory= null;
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

	signUp() 
  {
	      
        if (this.user.username == null
          ||this.user.password == null
          ||this.user.firstName == null
          ||this.user.lastName == null)
        {
          alert("Please fill out all fields.");
          this.loading = false;
        }

        else if (this.user.username.length > 10)
        {
          alert("Cannot create account. Username is too many characters."); 
          this.loading = false; 
        }
        else
        {
		      this.loading = true;
          this.user.charterHistory = new Array<CharterRequest>();
          this.user.shuttleHistory = new Array<ShuttleRequest>();
    	    this.userService.register(this.user)
            .subscribe(response => 
            {
              var responseString = response.json().toString();

    	      if(responseString == "nameunavailable")
              {
                alert("User name unavailable.");
                this.loading = false;
              }
              else if (responseString == "OK")
              //success
              {
                  alert("Your account was successfully created. Signed in as "+this.user.username+"!"); 
                  this.currentUserService.changeUser(this.user);
                  this.currentUserService.toggleLoggedIn(true);
                  this.router.navigate(["/dashboard"]); 
              }
              else
              //the parse or server returned garbage
              {
                  alert("INTERNAL ERROR");
                  this.loading = false;
              }  
            }
            );//end subscribe


      	//    .subscribe(
        //	    () => {
        //  		    alert("Your account was successfully created. Signed in as "+this.user.username+"!"); 
        //          this.currentUserService.changeUser(this.user);
        //          this.userService.TEST_signup(this.user);
        //          this.currentUserService.toggleLoggedIn(true);
        //  		    this.router.navigate(["/dashboard"]); 
        //	    },
        //	    () => {
        //		    alert("Unfortunately we were unable to create your account.");
        //		    this.loading = false;
        //	    }
        //  );
        
      }//end else
  }//end signup

}//end class