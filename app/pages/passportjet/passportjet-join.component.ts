import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { TextField } from "ui/text-field";

import { PassJetApplication } from './passjet-application';


@Component({
  selector: "passportjet-join",
  template: `
   <ScrollView>
 	<StackLayout>

	<label text='Charter Component' horizontalAlignment='center'></label>

	<label text='First Name'></label>
	<TextField  autocapitalizationType="none" [(ngModel)]="passJetApplication.firstName"></TextField>

	<label text='Last Name'></label>
	<TextField autocapitalizationType="none" [(ngModel)]="passJetApplication.lastName"></TextField>

	<label text='Phone Number'></label>
	<TextField autocapitalizationType="none" [(ngModel)]="passJetApplication.phoneNumber"></TextField>

	<label text='Email Address'></label>
	<TextField autocapitalizationType="none" [(ngModel)]="passJetApplication.email"></TextField>

	<Button text="Submit Application" (tap)="sendJoinRequest(this.passJetApplication)" horizontalAlignment='center'></Button>

	<label text="Submit the above form to join, or call 1-800-RECTRIX" textwrap="true" horizontalAlignment='center'></label>


  </StackLayout>
 </ScrollView>


  	
  	`
})
export class PassportJetJoinComponent 
{
	passJetApplication: PassJetApplication;

	constructor(private router: Router)
	{
		this.passJetApplication = new PassJetApplication();
	}

	sendJoinRequest(application: PassJetApplication)
	{
		alert("TODO");
	}
	
}