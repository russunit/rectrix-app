import { Component } from "@angular/core";
import { ShuttleRequest } from './shuttle-request';

@Component({
  selector: "shuttle",
  template: "<Label text='Shuttle Component'></Label>"
  //templateUrl: 'shuttle-component.html'
})
export class ShuttleComponent {
	
	sendRequest(request:ShuttleRequest)
	{

	}
}

//imports