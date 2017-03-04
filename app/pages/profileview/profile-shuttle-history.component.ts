import { Component, OnInit } from "@angular/core";
import { User } from '../../shared/user/user'
import { UserService } from "../../shared/user/user.service";
import { CurrentUserService } from "../../shared/current-user/current-user.service";
import { Router } from "@angular/router";
import {Subscription} from 'rxjs/Subscription';
import { ShuttleRequest } from "../../shared/shuttle-request/shuttle-request";
@Component({
  selector: "shuttlehistory",
  template: ` 
<ScrollView>
<ListView [items]="shuttleList">
<template let-item="item">
<StackLayout>
<Label text="{{item.departLocation+'-'+item.arriveLocation+ ' ' + item.departDate}}" ></Label>
<Button text="Submit"(tap)="seeDetails()"></Button>
</StackLayout>
</template>
</ListView>
</ScrollView>  `,
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
ngOnInit() {
        
  this.subscription1 = this.currentUserService.loggedIn$.subscribe(loggedIn => this.loggedIn = loggedIn );
  this.subscription2 = this.currentUserService.currentUser$.subscribe(currentUser => this.currentUser = currentUser );
  
  if(!this.loggedIn)
  {
      alert("Profile view unavailable. Sign in first.");
      this.router.navigate(["/login"]);
  } 
this.shuttleList = this.currentUser.shuttleHistory;
               
        
          }  

ngOnDestroy() 
{
    
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();


    }
seeDetails(args)
{
   this.router.navigate(["/shuttledetails"],args.index);
}
}
