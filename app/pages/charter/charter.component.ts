//imports
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TextField } from "ui/text-field";

import { CharterRequest } from '../../shared/charter-request/charter-request';
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { CurrentUserService } from "../../shared/current-user/current-user.service";
import {Subscription} from 'rxjs/Subscription';

@Component
({

selector: "charter",
template: `
 
 <ScrollView orientation="vertical">
 <StackLayout class="layout">
	<label text='Charter Request' class="title"></label>

    <StackLayout class="form">
        <label text='Personal Information' class="detail-label"></label>

	    <TextField  autocapitalizationType="none" [(ngModel)]="charterRequest.firstName"></TextField>
        <label text='First Name' class='field-label'></label>

	    <TextField autocapitalizationType="none" [(ngModel)]="charterRequest.lastName"></TextField>
        <label text='Last Name' class='field-label'></label>
	    
	    <TextField autocapitalizationType="none" [(ngModel)]="charterRequest.phoneNumber"></TextField>
        <label text='Phone Number' class='field-label'></label>

        <label height="1" class="divider"></label>
        <label text='Trip Details' class="detail-label"></label>

	    <TextField autocapitalizationType="none" [(ngModel)]="charterRequest.tripType"></TextField>
        <label text='Trip Type' class='field-label'></label>
	    
	    <TextField autocapitalizationType="none" [(ngModel)]="charterRequest.departLocation"></TextField>
        <label text='Depart Location' class='field-label'></label>
	    
	    <TextField autocapitalizationType="none" [(ngModel)]="charterRequest.departDate"></TextField>
        <label text='Depart Date' class='field-label'></label>
	    
	    <TextField autocapitalizationType="none" [(ngModel)]="charterRequest.departTime"></TextField>
        <label text='Depart Time' class='field-label'></label>
	    
	    <TextField autocapitalizationType="none" [(ngModel)]="charterRequest.arriveLocation"></TextField>
        <label text='Arrive Location' class='field-label'></label>
	    
	    <TextField autocapitalizationType="none" [(ngModel)]="charterRequest.arriveDate"></TextField>
        <label text='Arrive Date' class='field-label'></label>
	    
	    <TextField autocapitalizationType="none" [(ngModel)]="charterRequest.arriveTime"></TextField>
        <label text='Arrive Time' class='field-label'></label>
	    
	    <TextField autocapitalizationType="none" [(ngModel)]="charterRequest.requirements"></TextField>
        <label text='Requirements' class='field-label'></label>
	    
	    <TextField autocapitalizationType="none" [(ngModel)]="charterRequest.preferredCraft"></TextField>
        <label text='Preferred Craft' class='field-label'></label>
    </StackLayout>	

	<Button text="Request Charter" width={{buttonW}} height="50" (tap)="sendRequest(this.charterRequest)" horizontalAlignment='center'></Button>

 </StackLayout>
 </ScrollView>
	`,
providers: [UserService],
styleUrls: ["pages/charter/charter.component.css"]
//moduleID
//selector: "charter",
//templateUrl: "charter-component.html",
//styleUrls: "charter-component.css",
//provider

})

export class CharterComponent implements OnInit
{
    platform = require("platform");
    screen = this.platform.screen;
    height: number = this.screen.mainScreen.heightDIPs;
    width: number = this.screen.mainScreen.widthDIPs;
    buttonW: number = this.width * .6;

	user: User;
    loggedIn: boolean;

    subscription1:Subscription;
    subscription2:Subscription;

	charterRequest: CharterRequest;

	constructor(private router: Router, private userService: UserService, private currentUserService: CurrentUserService)
	{
		this.charterRequest = new CharterRequest();
	}

	ngOnInit()
	{
		//gets the current user from service
        this.subscription1 = this.currentUserService.loggedIn$.subscribe(loggedIn => this.loggedIn = loggedIn );
        this.subscription2 = this.currentUserService.currentUser$.subscribe(currentUser => this.user = currentUser );
	}


	sendRequest(request: CharterRequest)
	{
		if(this.loggedIn)
		{
			this.user.charterHistory.push(this.charterRequest);

			let responseString = this.userService.update(this.user);
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
				alert("Charter Requested:\nName: "+this.charterRequest.firstName+" "+this.charterRequest.lastName +
					"\nPhone: "+this.charterRequest.phoneNumber +
					"\nTrip Type: "+this.charterRequest.tripType +
					"\nFrom: "+this.charterRequest.departLocation +
					"\n at: "+this.charterRequest.departTime + ", " + this.charterRequest.departDate +
					"\nTo: "+this.charterRequest.arriveLocation +
					"\n at: "+this.charterRequest.arriveTime + ", " + this.charterRequest.arriveDate +
					"\n\nRequirements: " + this.charterRequest.requirements + 
					"\nCraft Preference: " + this.charterRequest.preferredCraft);
				this.router.navigate(["/dashboard"]);

			}
			else
			//the parse or server returned garbage
            {
              alert("INTERNAL ERROR");
            }


		}
		else
		{
			alert("Please log in or sign up to place a charter request.");
			this.router.navigate(["/dashboard"]);
		}

	}

}