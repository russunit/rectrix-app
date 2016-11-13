import { Component } from "@angular/core";
 //const String[] options = [{ 'View profile' }, { 'Buy fuel' } , { 'MRO's' }, { 'Aircraft maintenance' }, { 'Shuttle' }, {' Charter flights ' }]
@Component({
  selector: "my-app",
  template: `
  <StackLayout orientation="vertical">
  	<navbar></navbar>
    <router-outlet></router-outlet>
  	<profilebar></profilebar>
  </StackLayout>
   `
})
export class AppComponent 
{
title = 'Rectrix';
}