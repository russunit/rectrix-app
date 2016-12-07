import { Component, OnInit } from "@angular/core";
//import { Router, NavigationStart, NavigationEnd } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
//import { routes } from "./app.routes";
import { Router } from "@angular/router";
import { Location } from '@angular/common';
import { Page } from "ui/page";
import { User } from "../../shared/user/user";
import { CurrentUserService } from "../../shared/current-user/current-user.service";
import {Subscription} from 'rxjs/Subscription';


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
	    </GridLayout>
    </StackLayout>
    <StackLayout height="70">
        <GridLayout rows="auto, auto, auto, auto" columns="auto, auto" horizontalAlignment="center" verticalAlignment="center">
             <button text={{button1}} row="3" col="0" (tap)="logIn()" height="40" width={{navLeft}} class="profilebutton"></button>
             <button text={{button2}} row="3" col="1" (tap)="signUp()" height="40" width={{navRight}} class="profilebutton"></button>
        </GridLayout>
    </StackLayout>
       
  `,
  styleUrls: ["pages/dashboard/dashboard-common.css"],
  
 
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
    navLeft: number = this.width * .45;
    navRight: number = this.width * .45;


    navLeftSignedIn: number = this.buttonW *1.3;
    navRightSignedIn: number = this.buttonW;


    button1: string;
    button2: string;
    currentUser: User;
    loggedIn: boolean;

    subscription1:Subscription;
    subscription2:Subscription;

    constructor(private router: Router, private location: Location, private page: Page, private currentUserService: CurrentUserService) {}

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "../../images/background.png";

        //gets the current user from service
        this.subscription1 = this.currentUserService.loggedIn$.subscribe(loggedIn => this.loggedIn = loggedIn );
        this.subscription2 = this.currentUserService.currentUser$.subscribe(currentUser => this.currentUser = currentUser );
        
        //test
        /*
        console.log("DASHBOARD:");
        console.log("loggedIn:");
        if(this.loggedIn)
        {
          console.log("TRUE");
          console.log("currentUser:")
          console.log(this.currentUser.username);
        }
        if(!this.loggedIn)
          console.log("FALSE");
          */



        if(this.loggedIn)
        {
          this.signInFormat();
        }
        else
        {
          this.signOutFormat();
        }



        //console.log("dashboard test OnInit");
    }

    ngOnDestroy() 
    {
    // prevent memory leak when component is destroyed
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();

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
      this.currentUserService.changeUser(null);
      this.currentUserService.toggleLoggedIn(false);
      this.signOutFormat();
      alert("Signed out.");
    }

}

signOutFormat()
{
  this.button1 = "Log In";
  this.button2 = "Sign Up";
  //this.navLeft = this.buttonW * 1.15;
  //this.navRight = this.buttonW * 1.15;
}

signInFormat()
{
  this.button1 = "Hi, "+this.currentUser.username;
  this.button2 = "Sign Out";
  this.navLeft = this.navLeftSignedIn;
  this.navRight = this.navRightSignedIn;
}

}