import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: "menu",
  template: `
  	<StackLayout>
  		<button text="Shuttle" (tap)="goShuttle()"></button>
  		<button text="Charter" (tap)="goCharter()"></button>
  		<button text="FBO" (tap)="goFbo()"></button>
  		<button text="MRO" (tap)="goMro()"></button>
  		<button text="Passport Jet" (tap)="goPassJet()"></button>
  		<button text="Log in" (tap)="logIn()"></button>
  		<button text="Sign up" (tap)="signUp()"></button>
  		<button text="View Profile" (tap)="viewProfile()"></button>
  	</StackLayout>
  	`

})
export class MenuComponent 
{
	constructor(private router: Router, private location: Location)
	{}

	logIn()
	{ this.router.navigate(["/login"]); }

	signUp()
	{ this.router.navigate(["/signup"]); }

	goShuttle()
	{ this.router.navigate(["/shuttle"]); }

	goCharter()
	{ this.router.navigate(["/charter"]); }

	goFbo()
	{ this.router.navigate(["/fbo"]); }

	goMro()
	{ this.router.navigate(["/mro"]); }

	goPassJet()
	{ this.router.navigate(["/passportjet"]); }

	viewProfile()
	{ this.router.navigate(["/profile-view"]); }

}