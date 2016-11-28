import { Component } from "@angular/core";
 //const String[] options = [{ 'View profile' }, { 'Buy fuel' } , { 'MRO's' }, { 'Aircraft maintenance' }, { 'Shuttle' }, {' Charter flights ' }]
@Component({
  selector: "my-app",
  template: `
  <StackLayout orientation="vertical">
  	<navbar></navbar>
    <StackLayout height={{height-140}}>
        <router-outlet></router-outlet>
    </StackLayout>
  	<profilebar></profilebar>
  </StackLayout>
   `
})
export class AppComponent 
{
    title = 'Rectrix';
    platform = require("platform");
    screen = this.platform.screen;
    height: number = this.screen.mainScreen.heightDIPs;
}