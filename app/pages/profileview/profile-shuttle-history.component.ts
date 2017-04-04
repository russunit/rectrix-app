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
	<ListView [items]="shuttleList" (itemTap)="seeDetails($event)">
		<template let-item="item">
			<StackLayout>
				<Label text="{{item.departDate + ' ' + item.departLocation + ' - ' + item.arriveLocation}}"></Label>
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
		this.shuttleList = new Array();
		
		this.subscription1 = this.currentUserService.loggedIn$.subscribe(loggedIn => this.loggedIn = loggedIn );
		this.subscription2 = this.currentUserService.currentUser$.subscribe(currentUser => this.currentUser = currentUser );
		this.shuttleList = this.currentUser.shuttleHistory;
		//TO DO: Group by date, in order
    }  

	ngOnDestroy() 
	{
		this.subscription1.unsubscribe();
		this.subscription2.unsubscribe();
	}
	
	seeDetails(args)
	{
		this.router.navigate(["/charterdetails", args.index]);
	}
}