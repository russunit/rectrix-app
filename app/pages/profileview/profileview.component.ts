import { Component } from "@angular/core";
import { User } from '../../shared/user/user'

@Component({
  selector: "profileview",
  template:`
<ScrollView>
 "<Label text='Profile View Component'></Label>"
  <h1>text={{user.firstName+" " +user.lastName}}</h1>
<div>
  <p class="leftie">Name <br/> Address <br/> Recent Activity<br/><\p> 
</div>

<div>
"<Label text={{user.firstName <br/> user.lastName}}></Label>"
"<Label text={{user.address <br/> user.city <br/> user.country <br/> user.zip}}></Label>"

</div>

</Scrollview>
`,
   styleUrls: ["./profileview.component.css"]
})
export class ProfileViewComponent {
user:User;
}