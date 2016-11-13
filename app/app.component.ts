import { Component } from "@angular/core";
 //const String[] options = [{ 'View profile' }, { 'Buy fuel' } , { 'MRO's' }, { 'Aircraft maintenance' }, { 'Shuttle' }, {' Charter flights ' }]
@Component({
  selector: "my-app",
  template: `
  <StackLayout>
  	<navbar></navbar>
  	<Label text='Hello Rectrix'></Label>
  	//<a routerLink=""></a>
  	<page-router-outlet></page-router-outlet>
  	<profilebar></profilebar>
  </StackLayout>
   `
})
export class AppComponent 
{
title = 'Rectrix';
}