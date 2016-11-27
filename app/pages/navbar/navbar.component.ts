import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from '@angular/common';


@Component({
  selector: "navbar",
  template: `
  	<StackLayout orientation="horizontal" horizontalAlignment="center">
  		<Button dock="left" text="Back" (tap)="goBack()" height="40" width={{buttonW}}></Button>
  		<Button dock="right" text="Home" (tap)="goHome()" height="40" width={{buttonW}}></Button>
 	</StackLayout>
  	`,
  styleUrls: ["pages/navbar/navbar-common.css"]
})
export class NavbarComponent 
{
    platform = require("platform");
    screen = this.platform.screen;
    width: number = this.screen.mainScreen.widthDIPs;
    buttonW: number = this.width * .45;

	constructor(private router: Router, private location: Location)
	{}

	goBack()
	{
		this.location.back();
	}

	goHome()
	{
		this.router.navigate(["/dashboard"]);
	}
}