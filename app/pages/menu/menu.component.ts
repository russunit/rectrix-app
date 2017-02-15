import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from '@angular/common';
import { User } from "../../shared/user/user";
import { CurrentUserService } from "../../shared/current-user/current-user.service";
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: "menu",
  template: `
  <ScrollView>
  	<StackLayout class="layout">
  		<button text="Shuttle" (tap)="goShuttle()" class="navigation"></button>
  		<button text="Charter" (tap)="goCharter()" class="navigation"></button>
  		<button text="FBO" (tap)="goFbo()" class="navigation"></button>
  		<button text="MRO" (tap)="goMro()" class="navigation"></button>
  		<button text="Passport Jet" (tap)="goPassJet()" class="navigation"></button>
  		<button text="Sign up" (tap)="signUp()" *ngIf="!loggedIn" class="navigation"></button>
  		<button text="Sign in" (tap)="logIn()" *ngIf="!loggedIn" class="navigation"></button>
  		<button text="View Profile" (tap)="viewProfile()" *ngIf="loggedIn" class="navigation"></button>
  		<button text="Sign out" (tap)="logOut()" *ngIf="loggedIn" class="navigation"></button>
  	</StackLayout>
   </ScrollView>
  	`,
	styleUrls: ["pages/menu/menu.css"],

})
export class MenuComponent implements OnInit
{

	user: User;
    loggedIn: boolean;

    subscription1:Subscription;
    subscription2:Subscription;
	
	platform = require("platform");
    screen = this.platform.screen;
    height: number = this.screen.mainScreen.heightDIPs;

	constructor(private router: Router, private location: Location, private currentUserService: CurrentUserService)
	{}

	ngOnInit()
	{
		//gets the current user from service
        this.subscription1 = this.currentUserService.loggedIn$.subscribe(loggedIn => this.loggedIn = loggedIn );
        this.subscription2 = this.currentUserService.currentUser$.subscribe(currentUser => this.user = currentUser );
	}

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
	{ this.router.navigate(["/profileview"]); }

	logOut()
	{
	  this.currentUserService.changeUser(null);
      this.currentUserService.toggleLoggedIn(false);
      this.router.navigate(["/dashboard"]); 
      alert("Signed out.");
	}

}