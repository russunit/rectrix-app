"use strict";
const core_1 = require("@angular/core");
const router_1 = require('@angular/router');
let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'Rectrix';
        this.platform = require("platform");
        this.screen = this.platform.screen;
        this.height = this.screen.mainScreen.heightDIPs;
        // Sets initial value to true to show loading spinner on first load
        this.loading = true;
        router.events.subscribe((event) => {
            this.navigationInterceptor(event);
        });
    }
    // Shows and hides the loading spinner during RouterEvent changes
    navigationInterceptor(event) {
        if (event instanceof router_1.NavigationStart) {
            this.loading = true;
        }
        if (event instanceof router_1.NavigationEnd) {
            this.loading = false;
        }
        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof router_1.NavigationCancel) {
            this.loading = false;
        }
        if (event instanceof router_1.NavigationError) {
            this.loading = false;
        }
    }
};
AppComponent = __decorate([
    core_1.Component({
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
    }), 
    __metadata('design:paramtypes', [router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx5QkFPTyxpQkFFUCxDQUFDLENBRnVCO0FBc0J4QjtJQVVJLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUmxDLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsYUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQixXQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDOUIsV0FBTSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUVsRCxtRUFBbUU7UUFDcEUsWUFBTyxHQUFZLElBQUksQ0FBQztRQUlwQixNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQWtCO1lBQ3ZDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFHRCxpRUFBaUU7SUFDakUscUJBQXFCLENBQUMsS0FBa0I7UUFDcEMsRUFBRSxDQUFDLENBQUMsS0FBSyxZQUFZLHdCQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksc0JBQWEsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQztRQUVELHFHQUFxRztRQUNyRyxFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVkseUJBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksd0JBQWUsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQztJQUNMLENBQUM7QUFHTCxDQUFDO0FBekREO0lBQUMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztJQWdCUjtLQUNILENBQUM7O2dCQUFBO0FBQ1csb0JBQVksZUFxQ3hCLENBQUEifQ==