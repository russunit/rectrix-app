import { Component, OnInit } from "@angular/core";
import { User } from '../../shared/user/user'
import { UserService } from "../../shared/user/user.service";
import { CurrentUserService } from "../../shared/current-user/current-user.service";
import { Router } from "@angular/router";
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: "profile-shuttle-history",
  template: `
<ScrollView>
<label text ='{{currentUser.username}}' class='header' horizontalAlignment='center'></label> 
 
<label text ='Name' class = 'leftie'></label>
<label text = 'Address' class = 'leftie'></label>
<label text = '{{currentUser.firstName + " " + currentUser.lastName}}' class = 'rightie'></label>
<label text = '{{currentUser.address + " " + currentUser.city + " " + currentUser.country + " " + currentUser.zip }}' class = 'rightie'></label>
<Button text="Edit Profile" row="0" col="0" 		(tap)="makeChanges()" height="{{buttonH}}" width="{{buttonW}}" horizontalAlignment='center'></Button>

</ScrollView>
`,
 styleUrls: ["pages/profileview/profileview.component.css"],
providers: [UserService],
})

export class ProfileViewComponent implements OnInit {
currentUser: User;
 
    subscription1:Subscription;
    platform = require("platform");
screen = this.platform.screen;
    height: number = this.screen.mainScreen.heightDIPs;
    width: number = this.screen.mainScreen.widthDIPs;
    buttonH: number = this.height * .15;
    buttonW: number = this.width * .40;
 

constructor(private router: Router, private userService: UserService, private currentUserService: CurrentUserService){}
ngOnInit() {
        

               this.subscription1 = this.currentUserService.currentUser$.subscribe(currentUser => this.currentUser = currentUser );
        
          




    }  ngOnDestroy() 
    {
    
    this.subscription1.unsubscribe();

    }
makeChanges()
{
this.router.navigate(["/edit"]);

}
}