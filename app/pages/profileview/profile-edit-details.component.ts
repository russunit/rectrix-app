import { Component, OnInit } from "@angular/core";
import { User } from '../../shared/user/user'
import { NativeScriptRouterModule } from "nativescript-angular/router";
//import { routes } from "./app.routes";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { UserService } from "../../shared/user/user.service";
import { CurrentUserService } from "../../shared/current-user/current-user.service"

import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: "edit",
  template: `
<ScrollView>
<label text ='{{user.username}}' class="header"></label> 
<GridLayout rows="auto,auto,auto,auto,auto,auto" columns="auto,auto">
<TextField hint="First name" row="0" column="1" keyboardType="email" autocorrect="false" autocapitalizationType="words" [(ngModel)]="user.firstName"></TextField>
<TextField hint="Last name" row="1" column="1" [(ngModel)]="user.lastName" keyboardType="email" autocorrect="false" autocapitalizationType="words"></TextField>
<TextField hint="Street Address" row="2" column="1"  [(ngModel)]="user.address" keyboardType="email" autocorrect="false" autocapitalizationType="words"></TextField>
<TextField hint="City" row="3" column="1"  [(ngModel)]="user.city" keyboardType="email" autocorrect="false" autocapitalizationType="words"></TextField>
<TextField hint="Country" [(ngModel)]="user.country"  row="4" column="1" keyboardType="email" autocorrect="false" autocapitalizationType="words"></TextField>
<TextField hint="Zip" row="5" column="1"  [(ngModel)]="user.zip" keyboardType="number" autocorrect="false" autocapitalizationType="none"></TextField>
<Label text='First Name' row="0" column="0" ></Label>
<Label text='Last Name' row="1" column="0" ></Label>
<Label text='Street Address' row="2" column="0" ></Label>
<Label text='City' row="3" column="0" ></Label>
<Label text='Country' row="4" column="0" ></Label>
<Label text='Zip' row="5" column="0" ></Label>
</GridLayout>
<Button text="Save Changes" horizontalAlignment='center'		(tap)="change()" height="{{buttonH}}" width="{{buttonW}}" horizontalAlignment='center'></Button>
</ScrollView>
`,
 styleUrls: ["pages/profileview/profile-edit-details.component.css"],
providers: [UserService],
})

export class ProfileEditDetailsComponent implements OnInit
{
    user: User;
    platform = require("platform");
    screen = this.platform.screen;
    height: number = this.screen.mainScreen.heightDIPs;
    width: number = this.screen.mainScreen.widthDIPs;
    buttonH: number = this.height * .15;
    buttonW: number = this.width * .40;

    loggedIn: boolean;

    subscription1:Subscription;
    subscription2:Subscription;
 

constructor(private router: Router, private userService: UserService, private currentUserService: CurrentUserService)
{
       this.user = new User();
}

ngOnInit() 
{
  this.subscription1 = this.currentUserService.loggedIn$.subscribe(loggedIn => this.loggedIn = loggedIn );
  this.subscription2 = this.currentUserService.currentUser$.subscribe(currentUser => this.user = currentUser );

  if(!this.loggedIn)
  {
    alert("Profile view unavailable. Sign in first.");
    this.router.navigate(["/login"]);
  }
}  

ngOnDestroy() 
{
    
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
}

change()
{
   this.currentUserService.changeUser(this.user);
    alert("Changes saved");
}
}