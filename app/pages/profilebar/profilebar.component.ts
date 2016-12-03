import { Component } from "@angular/core";
import { Router } from "@angular/router"; 
import { Location } from '@angular/common';
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";

@Component({
  selector: "profilebar",
  template: ` 
  	<StackLayout orientation="horizontal" horizontalAlignment="center">


  		
      <button text={{button1}} (tap)="logIn()" height="40" width={{buttonW}}></button>
      <button text={{button2}} (tap)="signUp()" height="40" width={{buttonW}}></button> 


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

    currentUser: User;
    loggedIn: boolean;

    button1: string;
    button2: string;

	constructor(private router: Router, private location: Location)
	{
    this.currentUser = null;
    this.loggedIn = false;
    this.button1 = "Log In";
    this.button2 = "Sign Up";
  }

	logIn()
	{
    if(!this.loggedIn)
    {
      this.router.navigate(["/login"]);
    }
	}

	signUp()
	{
    if(!this.loggedIn)
    {
      this.router.navigate(["/signup"]);
    }

	}

  signIn(user: User)
  {
    this.currentUser = user;
    this.loggedIn = false;

    this.button1 = "Hello, "+user.username;
    this.button2 = "Sign Up";
  }

  signOut()
  {
    this.currentUser = null;
    this.loggedIn = false;

    this.button1 = "Log In";
    this.button2 = "Sign Up";
  }


}