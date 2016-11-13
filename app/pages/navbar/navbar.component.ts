import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from '@angular/common';


@Component({
  selector: "navbar",
  template: `
  	<StackLayout dock = "top" orientation="horizontal" horizontalAlignment="center">
  		<Button text="Back" (tap)="goBack()" height="40" width="190">Back</Button>
  		<Button text="Home" (tap)="goHome()" height="40" width="190">Home</Button>
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