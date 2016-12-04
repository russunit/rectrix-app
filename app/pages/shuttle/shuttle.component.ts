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
 <StackLayout>
	<label text='Shuttle Component' horizontalAlignment='center'></label>

	<label text='First Name'></label>
	<TextField  autocapitalizationType="none" [(ngModel)]="shuttleRequest.firstName"></TextField>

	<label text='Last Name'></label>
	<TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.lastName"></TextField>

	<label text='Phone Number'></label>
	<TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.phoneNumber"></TextField>

	<label text='Trip Type'></label>
	<TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.tripType"></TextField>

	<label text='Depart Location'></label>
	<TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.departLocation"></TextField>

	<label text='Depart Date'></label>
	<TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.departDate"></TextField>

	<label text='Depart Time'></label>
	<TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.departTime"></TextField>

	<label text='Arrive Location'></label>
	<TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.arriveLocation"></TextField>

	<label text='Arrive Date'></label>
	<TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.arriveDate"></TextField>

	<label text='Arrive Time'></label>
	<TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.arriveTime"></TextField>

	<label text='Number of Adults'></label>
	<TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.numAdults"></TextField>

	<label text='Number of Children'></label>
	<TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.numChildren"></TextField>

	<label text='Number of Infants'></label>
	<TextField autocapitalizationType="none" [(ngModel)]="shuttleRequest.numInfants"></TextField>

	<Button text="Request Shuttle" (tap)="sendRequest(this.shuttleRequest)" horizontalAlignment='center'></Button>


 </StackLayout>
 </ScrollView>
 </StackLayout>




	`,
 providers: [UserService],
  //templateUrl: 'shuttle-component.html'
})

export class ShuttleComponent implements OnInit
{

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
			alert("Shuttle Requested.");

	}
}

//imports