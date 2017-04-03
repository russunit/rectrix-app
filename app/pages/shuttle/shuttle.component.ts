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
	<label text='Shuttle Request' class="title"></label>

    <StackLayout class="form">
        <label text='Personal Information' class="detail-label"></label>

	    <TextField  autocapitalizationType="none" [(ngModel)]="shuttleRequest.firstName" hint="John"></TextField>
        <label text='First Name' class='field-label'></label>

	    <TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.lastName" hint="Smith"></TextField>
        <label text='Last Name' class='field-label'></label>

	    <TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.phoneNumber" hint="123.456.7890"></TextField>
        <label text='Phone Number' class='field-label'></label>
	
        <label height="1" class="divider"></label>
        <label text='Trip Details' class="detail-label"></label>

	    <TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.tripType" hint="One-way/Round trip/Multi-leg"></TextField>
        <label text='Trip Type' class='field-label'></label>
	
	    <TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.departLocation" hint="New York, NY"></TextField>
        <label text='Depart Location' class='field-label'></label>
	
	    <TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.departDate" hint="MM/DD/YYYY"></TextField>
        <label text='Depart Date' class='field-label'></label>
	
	    <TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.departTime" hint="12:00 PM"></TextField>
        <label text='Depart Time' class='field-label'></label>
	
	    <TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.arriveLocation" hint="Los Angeles, CA"></TextField>
        <label text='Arrive Location' class='field-label'></label>
	
	    <TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.arriveDate" hint="MM/DD/YYYY"></TextField>
        <label text='Arrive Date' class='field-label'></label>
	
	    <TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.arriveTime" hint="12:00 PM"></TextField>
        <label text='Arrive Time' class='field-label'></label>
	
	    <TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.numAdults" hint="#"></TextField>
        <label text='Number of Adults' class='field-label'></label>
	
	    <TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.numChildren" hint="#"></TextField>
        <label text='Number of Children' class='field-label'></label>
	
	    <TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.numInfants" hint="#"></TextField>
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

		if( this.shuttleRequest.arriveDate == null
			||this.shuttleRequest.arriveLocation == null
			||this.shuttleRequest.arriveTime == null
			||this.shuttleRequest.departDate == null
			||this.shuttleRequest.departLocation == null
			||this.shuttleRequest.departTime == null
			||this.shuttleRequest.firstName == null
			||this.shuttleRequest.lastName == null
			||this.shuttleRequest.phoneNumber == null
			||this.shuttleRequest.numAdults == null
			||this.shuttleRequest.numChildren == null
			||this.shuttleRequest.numInfants == null
			||this.shuttleRequest.tripType == null)
		{
			alert("Please fill out all fields.");
		}
		else if(this.loggedIn)
		{
			this.user.shuttleHistory.push(this.shuttleRequest);

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
					alert("Shuttle Requested.");
					this.router.navigate(["/dashboard"]);

				}
				else
				//the parse or server returned garbage
	            {
	              alert("INTERNAL ERROR");
	            }
	        }
	        );//end subscribe


		}
		else
		{
			alert("Please log in or sign up to place a shuttle request.");
			this.router.navigate(["/dashboard"]);
		}

	}
}

//imports