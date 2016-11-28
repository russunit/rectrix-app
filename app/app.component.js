"use strict";
const core_1 = require("@angular/core");
//const String[] options = [{ 'View profile' }, { 'Buy fuel' } , { 'MRO's' }, { 'Aircraft maintenance' }, { 'Shuttle' }, {' Charter flights ' }]
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
    <StackLayout height={{height-140}}>
        <router-outlet></router-outlet>
    </StackLayout>
  	<profilebar></profilebar>
  </StackLayout>
   `
    }), 
    __metadata('design:paramtypes', [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUN6QyxnSkFBZ0o7QUFhako7SUFBQTtRQUVJLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsYUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQixXQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDOUIsV0FBTSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztJQUN2RCxDQUFDO0FBQUQsQ0FBQztBQWxCRDtJQUFDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUU7Ozs7Ozs7O0lBUVI7S0FDSCxDQUFDOztnQkFBQTtBQUNXLG9CQUFZLGVBTXhCLENBQUEifQ==