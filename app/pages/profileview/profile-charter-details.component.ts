import { Component, OnInit } from "@angular/core";
import { User } from '../../shared/user/user'
import { ActivatedRoute, Params } from '@angular/router'
import { UserService } from "../../shared/user/user.service";
import { CurrentUserService } from "../../shared/current-user/current-user.service";
import {Subscription} from 'rxjs/Subscription';
import { Router } from "@angular/router";
import { CharterRequest } from "../../shared/charter-request/charter-request.ts";
@Component({
  selector: 'profile-charter-details',
  template: `
     
`,
 styleUrls: ['pages/profileview/profile-charter-details.component.css'],
providers: [UserService]

})
export class ProfileCharterDetailsComponent implements OnInit {
currentUser: User;
charter: CharterRequest;
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

});
 

}
}