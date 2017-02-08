import { Component, OnInit } from "@angular/core";
import { User } from '../../shared/user/user'
import { ActivatedRoute, Params } from '@angular/router'
import { UserService } from "../../shared/user/user.service";
import { CurrentUserService } from "../../shared/current-user/current-user.service";
import {Subscription} from 'rxjs/Subscription';
import { Router } from "@angular/router";
import { ShuttleRequest } from "../../shared/shuttle-request/shuttle-request.ts";
import { Location } from '@angular/common';

@Component({
  selector: "profile-shuttle-details",
  template: 
	`

	`,
styleUrls: ['pages/profileview/profile-shuttle-details.component.css'],
providers: [UserService]

})
export class ProfileShuttleDetailsComponent implements OnInit {
	currentUser: User;
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
	}
}