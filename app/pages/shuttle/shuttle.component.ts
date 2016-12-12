import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TextField } from "ui/text-field";

import { ShuttleRequest } from '../../shared/shuttle-request/shuttle-request';
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { CurrentUserService } from "../../shared/current-user/current-user.service";
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: "shuttle",
  template: `
 <StackLayout>
 <ScrollView>
 <StackLayout class="layout">
	<label text='Shuttle Request' class="title" strokeColor="white"></label>

    <StackLayout class="form">
        <label text='Personal Information' class="detail-label"></label>

	    <TextField  autocapitalizationType="none" [(ngModel)]="shuttleRequest.firstName"></TextField>
        <label text='First Name' class='field-label'></label>

	    <TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.lastName"></TextField>
        <label text='Last Name' class='field-label'></label>

	    <TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.phoneNumber"></TextField>
        <label text='Phone Number' class='field-label'></label>

        <label height="1" class="divider"></label>
        <label text='Trip Details' class="detail-label"></label>
	
	    <TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.tripType"></TextField>
        <label text='Trip Type' class='field-label'></label>
	
	    <TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.departLocation"></TextField>
        <label text='Depart Location' class='field-label'></label>
	
	    <TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.departDate"></TextField>
        <label text='Depart Date' class='field-label'></label>
	
	    <TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.departTime"></TextField>
        <label text='Depart Time' class='field-label'></label>
	
	    <TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.arriveLocation"></TextField>
        <label text='Arrive Location' class='field-label'></label>
	
	    <TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.arriveDate"></TextField>
        <label text='Arrive Date' class='field-label'></label>
	
	    <TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.arriveTime"></TextField>
        <label text='Arrive Time' class='field-label'></label>
	
	    <TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.numAdults"></TextField>
        <label text='Number of Adults' class='field-label'></label>
	
	    <TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.numChildren"></TextField>
        <label text='Number of Children' class='field-label'></label>
	
	    <TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.numInfants"></TextField>
        <label text='Number of Infants' class='field-label'></label>
    </StackLayout>	

	<Button text="Request" width={{buttonW}} height="50" (tap)="sendRequest(this.shuttleRequest)" horizontalAlignment='center'></Button>


 </StackLayout>
 </ScrollView>
 </StackLayout>
	`,
  providers: [UserService],
  styleUrls: ["pages/shuttle/shuttle.component.css"]
  //templateUrl: 'shuttle-component.html'
})

export class ShuttleComponent implements OnInit
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

	shuttleRequest: ShuttleRequest;

	constructor(private router: Router, private userService: UserService, private currentUserService: CurrentUserService)
	{
		this.shuttleRequest = new ShuttleRequest();
	}

	ngOnInit()
	{
		//gets the current user from service
        this.subscription1 = this.currentUserService.loggedIn$.subscribe(loggedIn => this.loggedIn = loggedIn );
        this.subscription2 = this.currentUserService.currentUser$.subscribe(currentUser => this.user = currentUser );
	}
	
	sendRequest(request:ShuttleRequest)
	{
		if(this.loggedIn)
		{
			this.user.shuttleHistory.push(this.shuttleRequest);
			this.currentUserService.changeUser(this.user);
			//now that currentUser has been updated to having this shuttleRequest in its history,
			//we will need to save the state of the user to the server through userService. (TODO)
		}
			alert("Shuttle Requested.");

			this.router.navigate(["/dashboard"]);

	}
}

//imports