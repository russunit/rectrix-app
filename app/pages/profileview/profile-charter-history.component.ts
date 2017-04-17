import { Component, OnInit } from "@angular/core";
import { User } from '../../shared/user/user'
import { UserService } from "../../shared/user/user.service";
import { CurrentUserService } from "../../shared/current-user/current-user.service";
import { Router } from "@angular/router";
import { Subscription } from 'rxjs/Subscription';
import { CharterRequest } from "../../shared/charter-request/charter-request";

@Component({
  selector: "charterhistory",
  template: 
	`
	<Label text="Charter History" horizontalAlignment="center" id="header"></Label>
	<ListView [items]="charterList" (itemTap)="seeDetails($event)">
		<template let-item="item">
			<StackLayout>
				<Label text="{{item.departDate}}" id="date"></Label>
				<Label text="{{item.departLocation.toUpperCase() + ' - ' + item.arriveLocation.toUpperCase()}}" id="detail"></Label>
			</StackLayout>
		</template>
	</ListView>
  `,
  styleUrls: ["pages/profileview/profile-charter-history.component.css"],
  providers: [UserService],
}) 

export class ProfileCharterHistoryComponent implements OnInit {
	currentUser: User;
	charterList: CharterRequest[];
   
    loggedIn: boolean; 
    subscription1:Subscription;
    subscription2:Subscription;

    platform = require("platform");
	screen = this.platform.screen;
    height: number = this.screen.mainScreen.heightDIPs;
    width: number = this.screen.mainScreen.widthDIPs;
    buttonH: number = this.height * .15;
    buttonW: number = this.width * .40;

	constructor(private router: Router, private userService: UserService, private currentUserService: CurrentUserService)
	{}

	ngOnInit() 
	{		
		this.charterList = new Array();
		this.subscription1 = this.currentUserService.loggedIn$.subscribe(loggedIn => this.loggedIn = loggedIn );
		this.subscription2 = this.currentUserService.currentUser$.subscribe(currentUser => this.currentUser = currentUser );
		this.charterList = this.currentUser.charterHistory;
		//TO DO: Group by date, in order
    }  

	ngOnDestroy() 
	{
		this.subscription1.unsubscribe();
		this.subscription2.unsubscribe();
	}
	
	public seeDetails(args)
	{
		this.router.navigate(["/charterdetail", args.index]);
	}
}