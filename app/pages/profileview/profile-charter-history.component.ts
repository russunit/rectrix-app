import { Component, OnInit } from "@angular/core";
import { User } from '../../shared/user/user'
import { UserService } from "../../shared/user/user.service";
import { CurrentUserService } from "../../shared/current-user/current-user.service";
import { Router } from "@angular/router";
import {Subscription} from 'rxjs/Subscription';
import { CharterRequest } from "../../shared/charter-request/charter-request.ts";
@Component({
  selector: "charterhistory",
  template: `
     
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
 

constructor(private router: Router, private userService: UserService, private currentUserService: CurrentUserService){}
ngOnInit() {
        
  this.subscription1 = this.currentUserService.loggedIn$.subscribe(loggedIn => this.loggedIn = loggedIn );
  this.subscription2 = this.currentUserService.currentUser$.subscribe(currentUser => this.currentUser = currentUser );
   this.charterList = this.currentUser.charterHistory;
          }  

ngOnDestroy() 
{
    
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();


    }
seeDetails(args)
{
   this.router.navigate(["/charterdetails"],args.index);
}
}
