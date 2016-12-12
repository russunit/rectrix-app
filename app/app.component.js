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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx5QkFPTyxpQkFFUCxDQUFDLENBRnVCO0FBZXhCO0lBVUksWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFSbEMsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixhQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9CLFdBQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUM5QixXQUFNLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBRWxELG1FQUFtRTtRQUNwRSxZQUFPLEdBQVksSUFBSSxDQUFDO1FBSXBCLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBa0I7WUFDdkMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUdELGlFQUFpRTtJQUNqRSxxQkFBcUIsQ0FBQyxLQUFrQjtRQUNwQyxFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksd0JBQWUsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDeEIsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSxzQkFBYSxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDO1FBRUQscUdBQXFHO1FBQ3JHLEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSx5QkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSx3QkFBZSxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDO0lBQ0wsQ0FBQztBQUdMLENBQUM7QUFsREQ7SUFBQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFOzs7Ozs7Ozs7SUFTUjtLQUNILENBQUM7O2dCQUFBO0FBQ1csb0JBQVksZUFxQ3hCLENBQUEifQ==