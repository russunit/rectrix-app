import { Component, OnInit } from "@angular/core";
//import { Router, NavigationStart, NavigationEnd } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
//import { routes } from "./app.routes";
import { Router } from "@angular/router";
import { Location } from '@angular/common';
import { Page } from "ui/page";

@Component({
  selector: "dashboard",
  template: `
    <StackLayout class="layout" height={{height-140}}>
    <Image src="~/images/logo.png" height={{buttonH}} width={{buttonW}} class="logo"></Image>
  	<GridLayout rows="auto, auto, auto" columns="auto, auto" horizontalAlignment="center" verticalAlignment="center">
   		<button text="Shuttle" row="0" col="0" 		(tap)="goShuttle()" height="{{buttonH}}" width="{{buttonW}}"></button>
   		<button text="Charter" row="0" col="1" 		(tap)="goCharter()" height="{{buttonH}}" width="{{buttonW}}"></button>
   		<button text="FBO" row="1" col="0" 		(tap)="goFbo()" height="{{buttonH}}" width="{{buttonW}}"></button>
   		<button text="MRO" row="1" col="1" 		(tap)="goMro()" height="{{buttonH}}" width="{{buttonW}}"></button>
   		<button text="Passport Jet" row="2" col="0" (tap)="goPassJet()" height="{{buttonH}}" width="{{buttonW}}"></button>
   		<button text="Menu" row="2" col="1" 		(tap)="goMenu()" height="{{buttonH}}" width="{{buttonW}}"></button> 
	</GridLayout>
    </StackLayout>
  `,
  styleUrls: ["pages/dashboard/dashboard-common.css"]
  
//moved the buttons to dashboard.component.html 
 
})
export class DashboardComponent implements OnInit
{
    title = 'Rectrix';
    platform = require("platform");
    screen = this.platform.screen;
    height: number = this.screen.mainScreen.heightDIPs;
    width: number = this.screen.mainScreen.widthDIPs;
    buttonH: number = this.height * .15;
    buttonW: number = this.width * .40;

    constructor(private router: Router, private location: Location, private page: Page)
    {
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "../../images/background.png";

        console.log("dashboard test");
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
 

}
