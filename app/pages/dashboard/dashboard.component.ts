import { Component, OnInit } from "@angular/core";
//import { Router, NavigationStart, NavigationEnd } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
//import { routes } from "./app.routes";
import { Router } from "@angular/router";
import { Location } from '@angular/common';
import { Page } from "ui/page";
import { User } from "../../shared/user/user";
import { CurrentUserService } from "../../shared/current-user/current-user.service";


@Component({
  selector: "dashboard",
  template: `
    <StackLayout class="layout" height={{height-140}}>
    <Image src="~/images/logo.png" height={{buttonH}} width={{buttonW}} class="logo"></Image>
  	<GridLayout rows="auto, auto, auto, auto" columns="auto, auto" horizontalAlignment="center" verticalAlignment="center">
   		<button text="Shuttle" row="0" col="0" 		(tap)="goShuttle()" height="{{buttonH}}" width="{{buttonW}}"></button>
   		<button text="Charter" row="0" col="1" 		(tap)="goCharter()" height="{{buttonH}}" width="{{buttonW}}"></button>
   		<button text="FBO" row="1" col="0" 		(tap)="goFbo()" height="{{buttonH}}" width="{{buttonW}}"></button>
   		<button text="MRO" row="1" col="1" 		(tap)="goMro()" height="{{buttonH}}" width="{{buttonW}}"></button>
   		<button text="Passport Jet" row="2" col="0" (tap)="goPassJet()" height="{{buttonH}}" width="{{buttonW}}"></button>
   		<button text="Menu" row="2" col="1" 		(tap)="goMenu()" height="{{buttonH}}" width="{{buttonW}}"></button> 
      <button text={{button1}} row="3" col="0" (tap)="logIn()" height="40" width={{buttonW}} class="profilebutton"></button>
      <button text={{button2}} row="3" col="1" (tap)="signUp()" height="40" width={{buttonW}} class="profilebutton"></button>
       

	</GridLayout>
  
    </StackLayout>
  `,
  styleUrls: ["pages/dashboard/dashboard-common.css"],
  providers: [CurrentUserService]
  
 
})
export class DashboardComponent implements OnInit
{
    title = 'Rectrix';
    platform = require("platform");
    screen = this.platform.screen;
    height: number = this.screen.mainScreen.heightDIPs;
    width: number = this.screen.mainScreen.widthDIPs;
    buttonH: number = this.height * .12;
    buttonW: number = this.width * .40;

    button1: string;
    button2: string;
    currentUser: User;
    loggedIn: boolean;

    constructor(private router: Router, private location: Location, private page: Page, private currentUserService: CurrentUserService)
    {
        //console.log("dashboard test Constructor");
        this.currentUser = null;
        this.loggedIn = false;
        //this.button1 = "Log In";
        //this.button2 = "Sign Up";

    }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "../../images/background.png";

        //gets the current user
        this.currentUserService.currentUser.subscribe(value => {this.currentUser;})
        this.currentUserService.loggedIn.subscribe(value => {this.loggedIn;})

        //this.currentUser = this.currentUserService.currentUser.emit(null);
        //this.loggedIn = this.currentUserService.loggedIn.emit(null);

        if(this.loggedIn)
        {
          this.button1 = "Hello, "+this.currentUser.username;
          this.button2 = "Sign Out";
        }
        else
        {
          this.button1 = "Log In";
          this.button2 = "Sign Up";
        }

        //console.log("dashboard test OnInit");
    }

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

goMenu()
{ this.router.navigate(["/menu"]); }

  logIn()
  {
    if(!this.loggedIn)
    {
      this.router.navigate(["/login"]);
    }
    else
    {
      //TODO go to profile view
    }
  }

  signUp()
  {
    if(!this.loggedIn)
    {
      this.router.navigate(["/signup"]);
    }
    else
    {
      //TODO Sign out
    }

  }

}