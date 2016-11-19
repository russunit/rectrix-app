import { Component } from "@angular/core";
import { Router } from "@angular/router";
export class User {
firstName: String;
lastName: String;
aaddress: String;
city: String;
country: String;
zip: String;
username: String;
password: String;
//history1: CharterHistory;
//history2: ShuttleHistory;

}

@Component({
  selector: "signup",
  template: `
<StackLayout>
<ScrollView>
<StackLayout>
<label text='Signup Component'></label>

<label text='First Name'></label>
<Textfield autocorrect="false" autocapitalizationType="none" [(ngModel)]="user.firstName"></TextField>

<label text='Last Name'></Label>
<Textfield autocorrect="false" autocapitalizationType="none" [(ngModel)]="user.lastName"></TextField>

<label text='Address'></Label>
<Textfield autocorrect="false" autocapitalizationType="none" [(ngModel)]="user.address"></TextField>

<label text='City'></Label>
<Textfield autocorrect="false" autocapitalizationType="none" [(ngModel)]="user.city"></TextField>

<label text='Country'></Label>
<Textfield autocorrect="false" autocapitalizationType="none" [(ngModel)]="user.country"></TextField>

<label text='Zip code'></Label>
<Textfield keyboardType ="number" [(ngModel)]="user.zip"></TextField>

<label text='Username'></Label>
<Textfield autocorrect="false" autocapitalizationType="none" [(ngModel)]="user.username"></TextField>

<label text='Password'></Label>
<Textfield secure = "true" [(ngModel)]="user.password"></TextField>
<Button [text]="Submit"(tap)="signup(this.user)"></Button>
 </StackLayout>
 </ScrollView>
 </StackLayout>
`,
})
export class SignupComponent {
user: User;

constructor(private router: Router)
{
       this.user = new User();
}
signup(user:User)
{
 alert("New user created");
}
}