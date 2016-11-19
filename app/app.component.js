"use strict";
const core_1 = require("@angular/core");
//const String[] options = [{ 'View profile' }, { 'Buy fuel' } , { 'MRO's' }, { 'Aircraft maintenance' }, { 'Shuttle' }, {' Charter flights ' }]
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Rectrix';
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: `
  <StackLayout orientation="vertical">
  	<navbar></navbar>
    <router-outlet></router-outlet>
  	<profilebar></profilebar>
  </StackLayout>
   `
    }), 
    __metadata('design:paramtypes', [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUN6QyxnSkFBZ0o7QUFXako7SUFBQTtRQUVBLFVBQUssR0FBRyxTQUFTLENBQUM7SUFDbEIsQ0FBQztBQUFELENBQUM7QUFiRDtJQUFDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUU7Ozs7OztJQU1SO0tBQ0gsQ0FBQzs7Z0JBQUE7QUFDVyxvQkFBWSxlQUd4QixDQUFBIn0=