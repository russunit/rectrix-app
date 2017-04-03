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
			<GridLayout rows = "auto,auto,auto,auto,auto,auto,auto" columns="auto,auto">
				<Label text="Name" 								row="0" col="0" ></Label>
				<Label text={{this.fullName}} 					row="0" col="1"></Label>
				<Label text="Phone Number" 						row="1" col="0"></Label>
				<Label text={{this.charter.phoneNumber}} 		row="1" col="1"></Label> 
				<Label text="Trip Type" 						row="2" col="0"></Label>
				<Label text={{this.charter.tripType}} 			row="2" col="1"></Label> 
				<Label text="From" 								row="3" col="0"></Label>
				<Label text={{this.departure}} 					row="3" col="1"></Label> 
				<Label text="To" 								row="4" col="0"></Label>
				<Label text={{this.arrival}} 					row="4" col="1"></Label> 
				<Label text="Requirements:" 					row="5" col="0"></Label>
				<Label text={{this.charter.requirements}} 		row="5" col="1"></Label>
				<Label text="Preffered Craft:" 					row="6" col="0"></Label>
				<Label text={{this.charter.prefferedCraft}} 	row="6" col="1"></Label>
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
	{}
	
	ngOnInit()
	{
		this.subscription1 = this.currentUserService.loggedIn$.subscribe(loggedIn => this.loggedIn = loggedIn );
		this.subscription2 = this.currentUserService.currentUser$.subscribe(currentUser => this.currentUser = currentUser );

		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id']; 
			this.charter = this.currentUser.charterHistory[this.id];
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