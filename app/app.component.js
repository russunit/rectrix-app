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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx5QkFPTyxpQkFFUCxDQUFDLENBRnVCO0FBZXhCO0lBVUksWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFSbEMsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixhQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9CLFdBQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUM5QixXQUFNLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBRWxELG1FQUFtRTtRQUNwRSxZQUFPLEdBQVksSUFBSSxDQUFDO1FBSXBCLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBa0I7WUFDdkMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUdELGlFQUFpRTtJQUNqRSxxQkFBcUIsQ0FBQyxLQUFrQjtRQUNwQyxFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksd0JBQWUsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDeEIsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSxzQkFBYSxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDO1FBRUQscUdBQXFHO1FBQ3JHLEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSx5QkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSx3QkFBZSxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDO0lBQ0wsQ0FBQztBQUdMLENBQUM7QUFsREQ7SUFBQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFOzs7Ozs7Ozs7SUFTUjtLQUNILENBQUM7O2dCQUFBO0FBQ1csb0JBQVksZUFxQ3hCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gICAgRXZlbnQgYXMgUm91dGVyRXZlbnQsXHJcbiAgICBOYXZpZ2F0aW9uU3RhcnQsXHJcbiAgICBOYXZpZ2F0aW9uRW5kLFxyXG4gICAgTmF2aWdhdGlvbkNhbmNlbCxcclxuICAgIE5hdmlnYXRpb25FcnJvcixcclxuICAgIFJvdXRlclxyXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcblxyXG4gIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCI+XHJcbiAgICA8bmF2YmFyPjwvbmF2YmFyPlxyXG4gICAgPFN0YWNrTGF5b3V0IGhlaWdodD17e2hlaWdodC03MH19PlxyXG4gICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgPC9TdGFja0xheW91dD5cclxuICBcclxuICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IFxyXG57XHJcbiAgICB0aXRsZSA9ICdSZWN0cml4JztcclxuICAgIHBsYXRmb3JtID0gcmVxdWlyZShcInBsYXRmb3JtXCIpO1xyXG4gICAgc2NyZWVuID0gdGhpcy5wbGF0Zm9ybS5zY3JlZW47XHJcbiAgICBoZWlnaHQ6IG51bWJlciA9IHRoaXMuc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0RElQcztcclxuXHJcbiAgICAgLy8gU2V0cyBpbml0aWFsIHZhbHVlIHRvIHRydWUgdG8gc2hvdyBsb2FkaW5nIHNwaW5uZXIgb24gZmlyc3QgbG9hZFxyXG4gICAgbG9hZGluZzogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG5cclxuICAgICAgICByb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZXZlbnQ6IFJvdXRlckV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGlvbkludGVyY2VwdG9yKGV2ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gU2hvd3MgYW5kIGhpZGVzIHRoZSBsb2FkaW5nIHNwaW5uZXIgZHVyaW5nIFJvdXRlckV2ZW50IGNoYW5nZXNcclxuICAgIG5hdmlnYXRpb25JbnRlcmNlcHRvcihldmVudDogUm91dGVyRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNldCBsb2FkaW5nIHN0YXRlIHRvIGZhbHNlIGluIGJvdGggb2YgdGhlIGJlbG93IGV2ZW50cyB0byBoaWRlIHRoZSBzcGlubmVyIGluIGNhc2UgYSByZXF1ZXN0IGZhaWxzXHJcbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkNhbmNlbCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59Il19