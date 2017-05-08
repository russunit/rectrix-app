import { Component, OnInit } from "@angular/core";
import { User } from '../../shared/user/user'
import { NativeScriptRouterModule } from "nativescript-angular/router";
//import { routes } from "./app.routes";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { UserService } from "../../shared/user/user.service";
import { CurrentUserService } from "../../shared/current-user/current-user.service"
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: "edit",
  template: 
	`
	<ScrollView>
		<StackLayout>
			<Label text ='{{user.username}}' horizontalAlignment="center" class="header"></Label>
			
			<GridLayout rows="auto,auto,auto,auto,auto,auto,auto" columns="3*,4*" id="info">
				<Button text="First Name" 			row="0" col="0" isEnabled = "false"></Button>
				<TextField hint="First name" 		row="0" col="1" [(ngModel)]="user.firstName" 	keyboardType="email" autocorrect="false" autocapitalizationType="words"></TextField>
				<Button text="Last Name" 			row="1" col="0" isEnabled = "false"></Button>
				<TextField hint="Last name" 		row="1" col="1" [(ngModel)]="user.lastName" 	keyboardType="email" autocorrect="false" autocapitalizationType="words"></TextField>
				<Button text="Address" 				row="2" col="0" isEnabled = "false"></Button>
				<TextField hint="Street Address" 	row="2" col="1" [(ngModel)]="user.address" 		keyboardType="email" autocorrect="false" autocapitalizationType="words"></TextField>
				<Button text="City" 				row="3" col="0" isEnabled = "false"></Button>
				<TextField hint="City" 				row="3" col="1" [(ngModel)]="user.city" 		keyboardType="email" autocorrect="false" autocapitalizationType="words"></TextField>
				<Button text="Country" 				row="4" col="0" isEnabled = "false"></Button>
				<TextField hint="Country" 			row="4" col="1" [(ngModel)]="user.country"  	keyboardType="email" autocorrect="false" autocapitalizationType="words"></TextField>
				<Button text="Zip" 					row="5" col="0" isEnabled = "false"></Button>
				<TextField hint="Zip" 				row="5" col="1" [(ngModel)]="user.zip" 			keyboardType="number" autocorrect="false" autocapitalizationType="none"></TextField>
				<Button text="Email" 				row="6" col="0" isEnabled = "false"></Button>
				<TextField hint="Email" 			row="6" col="1" [(ngModel)]="user.email" 		keyboardType="email" autocorrect="false" autocapitalizationType="none"></TextField>
			</GridLayout>
				
			<Button text="Save Changes" horizontalAlignment='center' (tap)="change()" width="{{buttonW}}" horizontalAlignment='center' id="change"></Button>
		</StackLayout>
	</ScrollView>
  `,
  styleUrls: ["pages/profileview/profile-edit-details.component.css"],
  providers: [UserService],
})

export class ProfileEditDetailsComponent implements OnInit
{
    user: User;
    platform = require("platform");
    screen = this.platform.screen;
    height: number = this.screen.mainScreen.heightDIPs;
    width: number = this.screen.mainScreen.widthDIPs;
    buttonH: number = this.height * .15;
    buttonW: number = this.width * .40;

    loggedIn: boolean;

    subscription1:Subscription;
    subscription2:Subscription;
 

	constructor(private router: Router, private userService: UserService, private currentUserService: CurrentUserService)
	{
       this.user = new User();
	}

	ngOnInit() 
	{
	  this.subscription1 = this.currentUserService.loggedIn$.subscribe(loggedIn => this.loggedIn = loggedIn );
	  this.subscription2 = this.currentUserService.currentUser$.subscribe(currentUser => this.user = currentUser );

	  if(!this.loggedIn)
	  {
		alert("Profile view unavailable. Sign in first.");
		this.router.navigate(["/login"]);
	  }
	}  

	ngOnDestroy() 
	{
		this.subscription1.unsubscribe();
		this.subscription2.unsubscribe();
	}

	change()
	{
		this.userService.update(this.user)
			.subscribe(response => 
			{
				var responseString = response.json().toString();
				if(responseString == "notloggedin")
				{
					alert("this profile is not logged into the server...\nPlease log in.");
					this.currentUserService.changeUser(null);
						this.currentUserService.toggleLoggedIn(false);
						this.router.navigate(["/dashboard"]);
				}
				else if (responseString == "OK")
				//success
				{
					this.currentUserService.changeUser(this.user);
					alert("Changes saved.");
					this.router.navigate(["/profileview"]);
				}
				else
				//the parse or server returned garbage
				{
					alert("INTERNAL ERROR");
				}
			});//end subscribe
	}
}