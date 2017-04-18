import { Component, OnInit } from "@angular/core";
import { User } from '../../shared/user/user'
import { UserService } from "../../shared/user/user.service";
import { CurrentUserService } from "../../shared/current-user/current-user.service";
import { Router } from "@angular/router";
import {Subscription} from 'rxjs/Subscription';
import { CharterRequest } from "../../shared/charter-request/charter-request.ts";

@Component({
  selector: "profileview",
  template: `
    <ScrollView>
		<StackLayout>
			<Label text={{this.fullName}} horizontalAlignment="center" id="header" style="font-size: {{size}};"></Label> 
			<Label text={{this.currentUser.username}} horizontalAlignment="center" id="username"></Label>
			
			<StackLayout id="information">
				<GridLayout rows="auto" columns="*,35,110" id="edit">
					<Image src="~/images/edit.png" width="20" height="20" (tap)="makeChanges()" row="0" col="1"></Image>
					<Label text="Edit Profile" id="edit-label"   		  (tap)="makeChanges()" row="0" col="2" ></Label>
				</GridLayout>
				
				<Label text="Account Information" class="title"></Label>
				<GridLayout rows="auto,auto,auto" columns="2*,3*" id="account">
					<Label text="Email:"							row="0" col="0"></Label>
					<Label text={{this.currentUser.email}} 			row="0" col="1"></Label>
					<Label text="Password:" 						row="1" col="0"></Label>
					<Label text={{this.hiddenPassword}}				row="1" col="1"></Label>
				</GridLayout>
				
				<Label text="Personal Information" class="title"></Label>
				<GridLayout rows="auto,auto,auto,auto,auto" columns="2*,3*" id="personal">
					<Label text="Name:" 							row="0" col="0"></Label>
					<Label text={{this.fullName}}					row="0" col="1"></Label>
					<Label text="Address:" 							row="1" col="0"></Label>
					<Label text={{this.currentUser.address}}		row="1" col="1"></Label>
					<Label text="City:" 							row="2" col="0"></Label>
					<Label text={{this.currentUser.city}}			row="2" col="1"></Label>
					<Label text="Zip:" 								row="3" col="0"></Label>
					<Label text={{this.currentUser.zip}}			row="3" col="1"></Label>
					<Label text="Country:" 							row="4" col="0"></Label>
					<Label text={{this.currentUser.country}} 		row="4" col="1"></Label>
				</GridLayout>
			</StackLayout>
		
			<GridLayout rows="auto" columns="*,*" id="histories">
				<Button text="Shuttle History" (tap)="seeShuttle()" class="history" row="0" col="0"></Button>
				<Button text="Charter History" (tap)="seeCharter()" class="history" row="0" col="1"></Button>
			</GridLayout>
		</StackLayout>
    </ScrollView>
  `,
  styleUrls: ["pages/profileview/profileview.component.css"],
  providers: [UserService],
})

export class ProfileViewComponent implements OnInit 
{
	currentUser: User;
 
    loggedIn: boolean;
    addresses: string;
	hiddenPassword: string = "";
    fullName: string; 
	
    subscription1:Subscription;
    subscription2:Subscription;

    platform = require("platform");
	screen = this.platform.screen;
    height: number = this.screen.mainScreen.heightDIPs;
    width: number = this.screen.mainScreen.widthDIPs;
    //buttonH: number = 80;
    buttonW: number = this.width * .45;
	size: number;
 

	constructor(private router: Router, private userService: UserService, private currentUserService: CurrentUserService)
	{}

	ngOnInit() 
	{   
		this.subscription1 = this.currentUserService.loggedIn$.subscribe(loggedIn => this.loggedIn = loggedIn );
		this.subscription2 = this.currentUserService.currentUser$.subscribe(currentUser => this.currentUser = currentUser );
		
		this.profileReload();
		
		if(!this.loggedIn)
		{
			alert("Profile view unavailable. Sign in first.");
			this.router.navigate(["/login"]);
		}

		this.addresses = this.currentUser.address + " " + this.currentUser.city + " " + this.currentUser.country + " " + this.currentUser.zip;
		this.fullName = this.currentUser.firstName + " " + this.currentUser.lastName;

		if(this.fullName.length <= 16)
		{
			this.size = 40;
		}
		else if(this.fullName.length <= 24)
		{
			this.size = 30;
		}
		else if(this.fullName.length >= 32)
		{
			this.size = 20;
		}	   
		
		for (var char of this.currentUser.password) 
		{
			this.hiddenPassword += "*"; 
		}
	}  

	ngOnDestroy() 
	{
		this.subscription1.unsubscribe();
		this.subscription2.unsubscribe();
    }
	
	makeChanges()
	{
		this.router.navigate(["/edit"]);
	}

	seeShuttle()
	{
		this.router.navigate(["/shuttlehistory"]);
	}

	seeCharter()
	{
		this.router.navigate(["/charterhistory"]);
	}

	profileReload()
	{
		this.userService.reload(this.currentUser)
		.subscribe(response => 
        {
          var responseString = response.json().toString();

          console.log(responseString);
		
		  if(responseString.startsWith("OK"))
          //success
          {
            let loggingInUser = this.userService.stringToUserProfile(responseString);
            this.currentUserService.changeUser(loggingInUser);
            this.subscription2 = this.currentUserService.currentUser$.subscribe(currentUser => this.currentUser = currentUser );
          }
          else
          //the parse or server returned garbage
          {alert("INTERNAL ERROR");}

        }//end subscribe
        );//end subscribe
	}
}