import { Component } from "@angular/core";
 //const String[] options = [{ 'View profile' }, { 'Buy fuel' } , { 'MRO's' }, { 'Aircraft maintenance' }, { 'Shuttle' }, {' Charter flights ' }]
@Component({
  selector: "my-app",
  template: `
  <Label text='Hello Rectrix'></Label>"
   <a routerLink=""></a>
   <router-outlet></router-outlet>
   `
})
export class AppComponent 
{
title = 'Rectrix';
}