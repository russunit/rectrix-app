import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: "profilebar",
  template: `
  	<StackLayout orientation="horizontal">
  		<button text="Log In" (tap)="logIn()">Back</button>
  		<button text="Sign Up" (tap)="signUp()">Home</button>

  	</StackLayout>
  	`
})
export class ProfilebarComponent 
{
	constructor(private router: Router, private location: Location)
	{}

	logIn()
	{
		this.router.navigate(["/login"]);
	}

	signUp()
	{
		this.router.navigate(["/signup"]);
	}
}