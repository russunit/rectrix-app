import { Component, OnInit } from "@angular/core";
import { User } from '../../shared/user/user'
import { UserService } from "../../shared/user/user.service";
import { CurrentUserService } from "../../shared/current-user/current-user.service";
import { Router } from "@angular/router";
import { Subscription } from 'rxjs/Subscription';
import { ShuttleRequest } from "../../shared/shuttle-request/shuttle-request";

@Component({
  selector: "shuttlehistory",
  template: `
	<Label text="Shuttle History" horizontalAlignment="center" id="header"></Label>
	<ListView [items]="shuttleList">
		<template let-item="item">
			<StackLayout>
				<Label text="{{item.departDate}}" id="date"></Label>
				<Button text="{{item.departLocation + ' - ' + item.arriveLocation}}" (tap)="seeDetails()" id="detail"></Button>
			</StackLayout>
		</template>
	</ListView>
`,
  styleUrls: ["pages/profileview/profile-shuttle-history.component.css"],
  providers: [UserService],
})

export class ProfileShuttleHistoryComponent implements OnInit {
	currentUser: User;
	shuttleList: ShuttleRequest[];
	shuttle: ShuttleRequest;
	shuttleHistory: ShuttleRequest[];
   
    loggedIn: boolean; 
    subscription1:Subscription;
    subscription2:Subscription;

    platform = require("platform");
	screen = this.platform.screen;
    height: number = this.screen.mainScreen.heightDIPs;
    width: number = this.screen.mainScreen.widthDIPs;
    buttonH: number = this.height * .15;
    buttonW: number = this.width * .40;
 

	constructor(private router: Router, private userService: UserService, private currentUserService: CurrentUserService){}

	ngOnInit() 
	{		
		this.shuttleHistory = new Array();
		this.shuttleList = new Array();
	
		this.shuttle = {
			firstName: "Anthony",
			lastName: "Kapotsis",
			phoneNumber: "289-529-2589",
			tripType: "One-Way",
			departLocation: "Nantucket, MA",
			departDate: "04/02/2017",
			departTime: "5:00",
			arriveLocation: "Hyannis, MA",
			arriveDate: "04/02/2017",
			arriveTime: "8:00",

			numAdults: 1,
			numChildren: 0,
			numInfants: 0,
		};
		
		this.shuttleHistory.push(this.shuttle);
		
		this.shuttle = {
			firstName: "Anthony",
			lastName: "Kapotsis",
			phoneNumber: "289-529-2589",
			tripType: "One-Way",
			departLocation: "Trenton, NJ",
			departDate: "03/12/2017",
			departTime: "2:00",
			arriveLocation: "Albany, NY",
			arriveDate: "03/13/2017",
			arriveTime: "5:00",

			numAdults: 2,
			numChildren: 1,
			numInfants: 0,
		};
		
		this.shuttleHistory.push(this.shuttle);
		
		this.currentUser = {
		firstName: "Anthony",
		lastName: "Kapotsis",
		address: "234 Kendall Street",
		city: "Ludlow, MA",
		country: "United States",
		zip: "01056",
		username: "akapotsis",
		password: "sfd4567t",
		email: "akapotsis@aol.com", 
		charterHistory: null,
		shuttleHistory: this.shuttleHistory,

		};
		
		//this.subscription1 = this.currentUserService.loggedIn$.subscribe(loggedIn => this.loggedIn = loggedIn );
		//this.subscription2 = this.currentUserService.currentUser$.subscribe(currentUser => this.currentUser = currentUser );
		this.shuttleList = this.currentUser.shuttleHistory;
		//TO DO: Group by date, in order

    }  

	ngOnDestroy() 
	{
		
		//this.subscription1.unsubscribe();
		//this.subscription2.unsubscribe();


		}
	seeDetails(args)
	{
		this.router.navigate(["/charterdetails", args.index]);
	}
}

