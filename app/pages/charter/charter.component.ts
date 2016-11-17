//imports
import { Component } from "@angular/core";
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
	<TextField  autocapitalizationType="none"></TextField>

	<label text='Last Name'></label>
	<TextField autocapitalizationType="none"></TextField>

	<label text='Trip Type'></label>
	<TextField autocapitalizationType="none"></TextField>

	<label text='Depart Location'></label>
	<TextField autocapitalizationType="none"></TextField>

	<label text='Depart Date'></label>
	<TextField autocapitalizationType="none"></TextField>

	<label text='Depart Time'></label>
	<TextField autocapitalizationType="none"></TextField>

	<label text='Arrive Location'></label>
	<TextField autocapitalizationType="none"></TextField>

	<label text='Arrive Date'></label>
	<TextField autocapitalizationType="none"></TextField>

	<label text='Arrive Time'></label>
	<TextField autocapitalizationType="none"></TextField>

	<label text='Requirements'></label>
	<TextField autocapitalizationType="none"></TextField>

	<label text='Preferred Craft'></label>
	<TextField autocapitalizationType="none"></TextField>

	<Button text="Request Charter" (tap)="sendRequest()" horizontalAlignment='center'></Button>


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

sendRequest(request: CharterRequest)
{
	alert("Charter Requested.");
}

}