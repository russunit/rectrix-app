import { Component } from "@angular/core";
import { Router } from "@angular/router"; 
import { Location } from '@angular/common';

@Component({
  selector: "profilebar",
  template: ` 
  	<StackLayout orientation="horizontal" horizontalAlignment="center">
  		<button text="Log In" (tap)="logIn()" height="40" width={{buttonW}}></button>
  		<button text="Sign Up" (tap)="signUp()" height="40" width={{buttonW}}></button> 
  	</StackLayout>
  	`,
  styleUrls: ["pages/profilebar/profilebar-common.css"]
})
export class ProfilebarComponent 
{
    platform = require("platform");
    screen = this.platform.screen;
    width: number = this.screen.mainScreen.widthDIPs;
    buttonW: number = this.width * .45;

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