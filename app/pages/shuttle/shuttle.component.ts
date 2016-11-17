import { Component } from "@angular/core";
import { ShuttleRequest } from './shuttle-request';

@Component({
  selector: "shuttle",
  template: `
 <StackLayout>
 <ScrollView>
 <StackLayout>
	<label text='Shuttle Component' horizontalAlignment='center'></label>

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

	<label text='Number of Adults'></label>
	<TextField autocapitalizationType="none"></TextField>

	<label text='Number of Children'></label>
	<TextField autocapitalizationType="none"></TextField>

	<label text='Number of Infants'></label>
	<TextField autocapitalizationType="none"></TextField>

	<Button text="Request Shuttle" (tap)="sendRequest()" horizontalAlignment='center'></Button>


 </StackLayout>
 </ScrollView>
 </StackLayout>




	`,
  //templateUrl: 'shuttle-component.html'
})
export class ShuttleComponent {
	
	sendRequest(request:ShuttleRequest)
	{

	}
}

//imports