import { Component } from "@angular/core";
import { User } from '../../shared/user/user'
import { NativeScriptRouterModule } from "nativescript-angular/router";
//import { routes } from "./app.routes";
import { Router } from "@angular/router";
import { Page } from "ui/page";
@Component({
  selector: "profile-edit-details",
  template: `
<ScrollView>
<TextField hint="First name" keyboardType="email" autocorrect="false" autocapitalizationType="words" />
<TextField hint="Last name" keyboardType="email" autocorrect="false" autocapitalizationType="words" />
<TextField hint="Street Address" keyboardType="email" autocorrect="false" autocapitalizationType="words" />
<TextField hint="City" keyboardType="email" autocorrect="false" autocapitalizationType="words" />
<TextField hint="Country" keyboardType="email" autocorrect="false" autocapitalizationType="words" />
<TextField hint="Zip" keyboardType="number" autocorrect="false" autocapitalizationType="none" />
"<Label text='Name'></Label>"
"<Label text='Street Address'></Label>"
"<Label text='City'></Label>"
"<Label text='Country'></Label>"
"<Label text='Zip'></Label>"
<Button text="Save Changes" row="0" col="0" 		(tap)="changeUser()" height="{{buttonH}}" width="{{buttonW}}"></Button>
</ScrollView>
`,
})
export class ProfileEditDetailsComponent {
    platform = require("platform");
screen = this.platform.screen;
    height: number = this.screen.mainScreen.heightDIPs;
    width: number = this.screen.mainScreen.widthDIPs;
    buttonH: number = this.height * .15;
    buttonW: number = this.width * .40;
constructor(private router:Router)
{

}
changeUser()
{
   
}
}