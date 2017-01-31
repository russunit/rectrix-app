import { Component, OnInit } from "@angular/core";
import { User } from '../../shared/user/user'
import { UserService } from "../../shared/user/user.service";
import { CurrentUserService } from "../../shared/current-user/current-user.service";
import { Router } from "@angular/router";
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: "charterhistory",
  template: `
     
`,
 styleUrls: ["pages/profileview/profile-charter-history.component.css"],
providers: [UserService],
})

export class ProfileCharterHistoryComponent implements OnInit {
currentUser: User;
 
   
    addresses: string;
    loggedIn: boolean;
    fullName: string; 
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
   
          }  

ngOnDestroy() 
{
    
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();


    }
seeDetails()
{
   this.router.navigate(["/charterdetails"]);
}
}
