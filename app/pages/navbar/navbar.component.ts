import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from '@angular/common';


@Component({
  selector: "navbar",
  template: `
  	<StackLayout orientation="horizontal">
  		<button text="Back" (tap)="goBack()">Back</button>
  		<button text="Home" (tap)="goHome()">Home</button>

  	</StackLayout>
  	`
})
export class NavbarComponent 
{
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