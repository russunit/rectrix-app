import { Component } from "@angular/core";
//import { Router, NavigationStart, NavigationEnd } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
//import { routes } from "./app.routes";
import { Router } from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: "dashboard",
  template: `
  	<GridLayout rows="auto, auto, auto" columns="auto, auto" horizontalAlignment="center" verticalAlignment="center">
   		<button text="Shuttle" row="0" col="0" 		(tap)="goShuttle()"></button>
   		<button text="Charter" row="0" col="1" 		(tap)="goCharter()"></button>
   		<button text="FBOs" row="1" col="0" 		(tap)="goFbo()"></button>
   		<button text="MROs" row="1" col="1" 		(tap)="goMro()"></button>
   		<button text="Passport Jet" row="2" col="0" (tap)="goPassJet()"></button>
   		<button text="Menu" row="2" col="1" 		(tap)="goMenu()"></button>
	</GridLayout>
  `
  
//moved the buttons to dashboard.component.html

})
export class DashboardComponent 
{
title = 'Rectrix';
select(option: String): void 
{
if(option=='View profile')
{}//go to profile page
if(option=='Buy fuel')
{}//go to fuel page
if(option=='MROs')
{}//go to MRO's page
if(option=='Aircraft maintenance')
{}//go to aircraft maintenance page}
if(option=='Shuttle')
{}//go to shuttle page
if(option=='Charter flights')
{}//go to charter page
}

constructor(private router: Router, private location: Location)
{}

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
