import { Component, OnInit } from "@angular/core";
import { User } from '../../shared/user/user'
import { ActivatedRoute, Params } from '@angular/router'
import { UserService } from "../../shared/user/user.service";
import { CurrentUserService } from "../../shared/current-user/current-user.service";
import {Subscription} from 'rxjs/Subscription';
import { Router } from "@angular/router";
import { CharterRequest } from "../../shared/charter-request/charter-request.ts";
import { Location } from '@angular/common';

@Component({
  selector: 'profile-charter-details',
  template: 
	`
	<StackLayout>
		<StackLayout id="header">
			<Image src="~/images/full-logo.png" height="60" width="322" id="logo"></Image>
		</StackLayout>
		
		<Label text="{{this.charter.departLocation.toUpperCase() + '\t to \t' + this.charter.arriveLocation.toUpperCase()}}" horizontalAlignment="center" id="locations"></Label>
		<Label text="{{this.charter.departDate + '\t\t - \t\t' + this.charter.arriveDate}}" horizontalAlignment="center" id="dates"></Label>
		
		<GridLayout rows = "auto,auto,auto,auto,auto,auto,auto" columns="4*,5*" id="info">
			<Label text="Name:" style="font-weight: 700;"				row="0" col="0" ></Label>
			<Label text={{this.fullName}} 								row="0" col="1"></Label>
			<Label text="Phone Number:" style="font-weight: 700;"		row="1" col="0"></Label>
			<Label text={{this.charter.phoneNumber}} 					row="1" col="1"></Label> 
			<Label text="Trip Type:" style="font-weight: 700;"			row="2" col="0"></Label>
			<Label text={{this.charter.tripType}} 						row="2" col="1"></Label> 
			<Label text="Departure Time:" style="font-weight: 700;"		row="3" col="0"></Label>
			<Label text={{this.charter.departTime}}						row="3" col="1"></Label>
			<Label text="Arrival Time:"	style="font-weight: 700;"		row="4" col="0"></Label>
			<Label text={{this.charter.arriveTime}}						row="4" col="1"></Label>
			<Label text="Requirements:" style="font-weight: 700;" 		row="5" col="0"></Label>
			<Label text={{this.charter.requirements}} 					row="5" col="1"></Label>
			<Label text="Preferred Craft:" style="font-weight: 700;"	row="6" col="0"></Label>
			<Label text={{this.charter.preferredCraft}} 				row="6" col="1"></Label>
		</GridLayout>
	</StackLayout>
	`,
  styleUrls: ['pages/profileview/profile-charter-details.component.css'],
  providers: [UserService]

})
export class ProfileCharterDetailsComponent implements OnInit {
	currentUser: User;
	charter: CharterRequest;
	id: number;
	private sub: any;
    arrival: string;
    departure: string;
	fullName: string;
	loggedIn: boolean; 
	subscription1:Subscription;
	subscription2:Subscription;

	platform = require("platform");
	screen = this.platform.screen;
	height: number = this.screen.mainScreen.heightDIPs;
	width: number = this.screen.mainScreen.widthDIPs;
	buttonH: number = this.height * .15;
	buttonW: number = this.width * .40;

	constructor(private router: Router, private userService: UserService, private route: ActivatedRoute,
	private location: Location,  private currentUserService: CurrentUserService)
	{
		
	}
	
	ngOnInit()
	{
		this.subscription1 = this.currentUserService.loggedIn$.subscribe(loggedIn => this.loggedIn = loggedIn );
		this.subscription2 = this.currentUserService.currentUser$.subscribe(currentUser => this.currentUser = currentUser );

		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id']; 
			this.charter = this.currentUser.charterHistory[this.id];
			console.log(this.id);
		});
		
		this.arrival = this.charter.departLocation + " " + this.charter.departDate + " " + this.charter.departTime;
		this.departure = this.charter.arriveLocation + " " + this.charter.arriveDate + " " + this.charter.arriveTime;

		this.fullName = this.charter.firstName + " " + this.charter.lastName;

	}
	
	ngOnDestroy() 
	{
		this.subscription1.unsubscribe();
		this.subscription2.unsubscribe();
    }
}