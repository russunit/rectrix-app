import { Component } from "@angular/core";
 //const String[] options = [{ 'View profile' }, { 'Buy fuel' } , { 'MRO's' }, { 'Aircraft maintenance' }, { 'Shuttle' }, {' Charter flights ' }]
@Component({
  selector: "my-app",
  template: `
  <StackLayout>
  <Label text='Hello Rectrix'></Label>
   <a routerLink=""></a>
   <router-outlet></router-outlet>
   <StackLayout>
   `
})
export class AppComponent 
{
title = 'Rectrix';
}