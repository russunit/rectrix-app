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
		<GridLayout rows = "auto,auto,auto,auto,auto,auto" columns="auto,auto">
			<Label text ="Name" row="0" col="0" ></Label>
			<Label text = {{this.fullName}} row="0" col="1"></Label>
			<Label text ="Phone Number" row="1" col="0"></Label>
			<Label text = {{this.shuttle.phoneNumber}} row="1" col="1"></Label> 
			<Label text ="Trip Type" row="2" col="0"></Label>
			<Label text = {{this.shuttle.tripType}} row="2" col="1"></Label> 
			<Label text ="From" row="3" col="0"></Label>
			<Label text = {{this.departure}} row="3" col="1"></Label> 
			<Label text ="To" row="4" col="0"></Label>
			<Label text = {{this.arrival}} row="4" col="1"></Label> 
			<Label text = {{this.passengers}} row="5" col="0"></Label>
        </GridLayout>
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
		this.passengers ="There are" + this.shuttle.numAdults +this.shuttle.numAdults +"adults, " + this.shuttle.numChildren +" children and " + this.shuttle.numInfants + " infants"; 
	}
	
	ngOnDestroy() 
	{	
		this.subscription1.unsubscribe();
		this.subscription2.unsubscribe();
	}
}