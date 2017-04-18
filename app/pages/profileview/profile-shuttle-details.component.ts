import { Component, OnInit } from "@angular/core";
import { User } from '../../shared/user/user'
import { ActivatedRoute, Params } from '@angular/router'
import { UserService } from "../../shared/user/user.service";
import { CurrentUserService } from "../../shared/current-user/current-user.service";
import { Subscription } from 'rxjs/Subscription';
import { Router } from "@angular/router";
import { ShuttleRequest } from "../../shared/shuttle-request/shuttle-request.ts";
import { Location } from '@angular/common';

@Component({
  selector: "profile-shuttle-details",
  template: 
	`
    <ScrollView>
		<StackLayout>
			<StackLayout id="header">
				<Image src="~/images/full-logo.png" height="60" width="322" id="logo"></Image>
			</StackLayout>
			
			<Label text="{{this.shuttle.departLocation.toUpperCase() + '\t to \t' + this.shuttle.arriveLocation.toUpperCase()}}" horizontalAlignment="center" id="locations"></Label>
			<Label text="{{this.shuttle.departDate + '\t\t - \t\t' + this.shuttle.arriveDate}}" horizontalAlignment="center" id="dates"></Label>
			
			<GridLayout rows = "auto,auto,auto,auto,auto" columns="auto,auto" id="info">
				<Label text="Name:" style="font-weight: 700;"				row="0" col="0" ></Label>
				<Label text={{this.fullName}} 								row="0" col="1"></Label>
				<Label text="Phone Number:" style="font-weight: 700;"		row="1" col="0"></Label>
				<Label text={{this.shuttle.phoneNumber}} 					row="1" col="1"></Label> 
				<Label text="Trip Type:" style="font-weight: 700;"			row="2" col="0"></Label>
				<Label text={{this.shuttle.tripType}} 						row="2" col="1"></Label> 
				<Label text="Departure Time:" style="font-weight: 700;"		row="3" col="0"></Label>
				<Label text={{this.shuttle.departTime}}						row="3" col="1"></Label>
				<Label text="Arrival Time:"	style="font-weight: 700;"		row="4" col="0"></Label>
				<Label text={{this.shuttle.arriveTime}}						row="4" col="1"></Label>
			</GridLayout>
			<Label text ={{this.passengers}} horizontalAlignment="center" id="passengers"></Label>
		</StackLayout>
    </ScrollView>
  `,
  styleUrls: ['pages/profileview/profile-shuttle-details.component.css'],
  providers: [UserService]

})
export class ProfileShuttleDetailsComponent implements OnInit {
	currentUser: User;
    departure: string;
    arrival: string;
    passengers: string;
	fullName: string;
	shuttle: ShuttleRequest;
	id: number;
	private sub: any;

	loggedIn: boolean; 
	subscription1:Subscription;
	subscription2:Subscription;

	platform = require("platform");
	screen = this.platform.screen;
	height: number = this.screen.mainScreen.heightDIPs;
	width: number = this.screen.mainScreen.widthDIPs;
	buttonH: number = this.height * .15;
	buttonW: number = this.width * .40;

	constructor(private router: Router, private userService: UserService,  private route: ActivatedRoute,
	private location: Location, private currentUserService: CurrentUserService) 
	{}
	
	ngOnInit()
	{
		this.subscription1 = this.currentUserService.loggedIn$.subscribe(loggedIn => this.loggedIn = loggedIn );
		this.subscription2 = this.currentUserService.currentUser$.subscribe(currentUser => this.currentUser = currentUser );

		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id']; 
			this.shuttle = this.currentUser.shuttleHistory[this.id];
		});
		
		this.arrival = this.shuttle.departLocation + " " + this.shuttle.departDate + " " + this.shuttle.departTime;
		this.departure = this.shuttle.arriveLocation + " " + this.shuttle.arriveDate + " " + this.shuttle.arriveTime;
		this.passengers ="There were " + this.shuttle.numAdults + " adults, " + this.shuttle.numChildren +" children and " + this.shuttle.numInfants + " infants"; 
		this.fullName = this.shuttle.firstName + " " + this.shuttle.lastName;
	}
	
	ngOnDestroy() 
	{	
		this.subscription1.unsubscribe();
		this.subscription2.unsubscribe();
	}
}