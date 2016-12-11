import { Component } from "@angular/core";
import {
    Event as RouterEvent,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError,
    Router
} from '@angular/router'

@Component({
  selector: "my-app",
  template: `

  

  <StackLayout orientation="vertical">

  <div class="loading-overlay" *ngIf="loading">
    <label text="Please Wait..."></label>
    <md-progress-bar mode="indeterminate"></md-progress-bar>
  </div>

  	<navbar></navbar>
    <StackLayout height={{height-70}}>
        <router-outlet></router-outlet>
    </StackLayout>
  </StackLayout>
   `
})
export class AppComponent 
{
    title = 'Rectrix';
    platform = require("platform");
    screen = this.platform.screen;
    height: number = this.screen.mainScreen.heightDIPs;

     // Sets initial value to true to show loading spinner on first load
    loading: boolean = true;

    constructor(private router: Router) {

        router.events.subscribe((event: RouterEvent) => {
            this.navigationInterceptor(event);
        });
    }


    // Shows and hides the loading spinner during RouterEvent changes
    navigationInterceptor(event: RouterEvent): void {
        if (event instanceof NavigationStart) {
            this.loading = true;
        }
        if (event instanceof NavigationEnd) {
            this.loading = false;
        }

        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof NavigationCancel) {
            this.loading = false;
        }
        if (event instanceof NavigationError) {
            this.loading = false;
        }
    }


}