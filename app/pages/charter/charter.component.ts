//imports
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { TextField } from "ui/text-field";

import { CharterRequest } from './charter-request';

@Component
({

selector: "charter",
template: `
 <StackLayout>
 <ScrollView>
 <StackLayout>

	<label text='Charter Component' horizontalAlignment='center'></label>

	<label text='First Name'></label>
	<TextField  autocapitalizationType="none" [(ngModel)]="charterRequest.firstName"></TextField>

	<label text='Last Name'></label>
	<TextField autocapitalizationType="none" [(ngModel)]="charterRequest.lastName"></TextField>

	<label text='Phone Number'></label>
	<TextField autocapitalizationType="none" [(ngModel)]="charterRequest.phoneNumber"></TextField>

	<label text='Trip Type'></label>
	<TextField autocapitalizationType="none" [(ngModel)]="charterRequest.tripType"></TextField>

	<label text='Depart Location'></label>
	<TextField autocapitalizationType="none" [(ngModel)]="charterRequest.departLocation"></TextField>

	<label text='Depart Date'></label>
	<TextField autocapitalizationType="none" [(ngModel)]="charterRequest.departDate"></TextField>

	<label text='Depart Time'></label>
	<TextField autocapitalizationType="none" [(ngModel)]="charterRequest.departTime"></TextField>

	<label text='Arrive Location'></label>
	<TextField autocapitalizationType="none" [(ngModel)]="charterRequest.arriveLocation"></TextField>

	<label text='Arrive Date'></label>
	<TextField autocapitalizationType="none" [(ngModel)]="charterRequest.arriveDate"></TextField>

	<label text='Arrive Time'></label>
	<TextField autocapitalizationType="none" [(ngModel)]="charterRequest.arriveTime"></TextField>

	<label text='Requirements'></label>
	<TextField autocapitalizationType="none" [(ngModel)]="charterRequest.requirements"></TextField>

	<label text='Preferred Craft'></label>
	<TextField autocapitalizationType="none" [(ngModel)]="charterRequest.preferredCraft"></TextField>

	<Button text="Request Charter" (tap)="sendRequest(this.charterRequest)" horizontalAlignment='center'></Button>


 </StackLayout>
 </ScrollView>
 </StackLayout>




	`,

//moduleID
//selector: "charter",
//templateUrl: "charter-component.html",
//styleUrls: "charter-component.css",
//provider

})

export class CharterComponent
{
	charterRequest: CharterRequest;

	constructor(private router: Router)
	{
		this.charterRequest = new CharterRequest();
	}


	sendRequest(request: CharterRequest)
	{
		//this alert will be an auto-generated email or other type of message, sent to Rectrix.
		
		alert("Charter Requested:\nName: "+this.charterRequest.firstName+" "+this.charterRequest.lastName +
			"\nPhone: "+this.charterRequest.phoneNumber +
			"\nTrip Type: "+this.charterRequest.tripType +
			"\nFrom: "+this.charterRequest.departLocation +
			"\n at: "+this.charterRequest.departTime + ", " + this.charterRequest.departDate +
			"\nTo: "+this.charterRequest.arriveLocation +
			"\n at: "+this.charterRequest.arriveTime + ", " + this.charterRequest.arriveDate +
			"\n\nRequirements: " + this.charterRequest.requirements + 
			"\nCraft Preference: " + this.charterRequest.preferredCraft);
	}

}