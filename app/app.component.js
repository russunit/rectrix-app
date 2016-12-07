"use strict";
const core_1 = require("@angular/core");
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Rectrix';
        this.platform = require("platform");
        this.screen = this.platform.screen;
        this.height = this.screen.mainScreen.heightDIPs;
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
    __metadata('design:paramtypes', [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUEwQixlQUFlLENBQUMsQ0FBQTtBQWExQztJQUFBO1FBRUksVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixhQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9CLFdBQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUM5QixXQUFNLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO0lBQ3ZELENBQUM7QUFBRCxDQUFDO0FBakJEO0lBQUMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRTs7Ozs7OztJQU9SO0tBQ0gsQ0FBQzs7Z0JBQUE7QUFDVyxvQkFBWSxlQU14QixDQUFBIn0=