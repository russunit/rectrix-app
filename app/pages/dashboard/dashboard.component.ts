import { Component } from "@angular/core";
import { Router NavigationStart, NavigationEnd } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
//import { routes } from "./app.routes";

@Component({
  selector: "dashboard",
  template: "<Label text='Dashboard Component'></Label>"
<StackLayout>
<StackLayout class="nav">
<Button text="View profile"[nsRouterLink="['/profile']"></Button>
<Button text="Buy Fuel"[nsRouterLink="['/fuel']"></Button>
<Button text="MRO's"[nsRouterLink="['/MRO's']"></Button>
<Button text="Aircraft maintenance""[nsRouterLink="['/maintenance']"></Button>
<Button text="Shuttle"[nsRouterLink="['/shuttle']"></Button>
<Button text="Charter Flights"[nsRouterLink="['/charter']"></Button>
})
export class DashboardComponent 
{
title = 'Rectrix';
select(option: String): void 
{
if(option=='View profile')
//go to profile page
if(option=='Buy fuel')
//go to fuel page
if(option=='MRO's')
//go to MRO's page
if(option=='Aircraft maintenance')
//go to aircraft maintenance page
if(option=='Shuttle')
//go to shuttle page
if(option=='Charter flights')
//go to charter page
}

}
