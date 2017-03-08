import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TextField } from "ui/text-field";
import { CurrentUserService } from "../../shared/current-user/current-user.service";
import { Subscription } from 'rxjs/Subscription';


import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";

@Component({
  selector: "signup",
  template: `
<StackLayout *ngIf="!loading">
<ScrollView>
<StackLayout>
<label text='Signup Component'></label>

<label text='First Name'></label>
<TextField autocorrect="false" autocapitalizationType="none" [(ngModel)]="user.firstName"></TextField>

<label text='Last Name'></label>
<TextField autocorrect="false" autocapitalizationType="none" [(ngModel)]="user.lastName"></TextField>

<label text='Address'></label>
<TextField autocorrect="false" autocapitalizationType="none" [(ngModel)]="user.address"></TextField>

<label text='City'></label>
<TextField autocorrect="false" autocapitalizationType="none" [(ngModel)]="user.city"></TextField>

<label text='Country'></label>
<TextField autocorrect="false" autocapitalizationType="none" [(ngModel)]="user.country"></TextField>

<label text='Zip code'></label>
<TextField keyboardType ="number" [(ngModel)]="user.zip"></TextField>

<label text='Username'></label>
<TextField autocorrect="false" autocapitalizationType="none" [(ngModel)]="user.username"></TextField>

<label text='Password'></label>
<TextField secure = "true" [(ngModel)]="user.password"></TextField>
<Button text="Submit"(tap)="signUp(this.user)"></Button>

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
        if (this.user.username.length > 10)
        {
          alert("Cannot create account. Username is too many characters"); 
          this.loading = false; 
        }
        else
        {
		      this.loading = true;

    	    let responseString = this.userService.register(this.user);
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
          else if(this.user.username == "undefined" ||  this.user.username == "")
          //the parse or server returned garbage
          {
              alert("INTERNAL ERROR");
              this.loading = false;
          }  


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