"use strict";
var core_1 = require("@angular/core");
//import { routes } from "./app.routes";
var router_1 = require("@angular/router");
var common_1 = require('@angular/common');
var DashboardComponent = (function () {
    function DashboardComponent(router, location) {
        this.router = router;
        this.location = location;
        this.title = 'Rectrix';
    }
    DashboardComponent.prototype.goShuttle = function () { this.router.navigate(["/shuttle"]); };
    DashboardComponent.prototype.goCharter = function () { this.router.navigate(["/charter"]); };
    DashboardComponent.prototype.goFbo = function () { this.router.navigate(["/fbo"]); };
    DashboardComponent.prototype.goMro = function () { this.router.navigate(["/mro"]); };
    DashboardComponent.prototype.goPassJet = function () { this.router.navigate(["/passportjet"]); };
    DashboardComponent.prototype.goMenu = function () { this.router.navigate(["/menu"]); };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: "dashboard",
            template: "\n  \t<GridLayout rows=\"auto, auto, auto\" columns=\"100, 100\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\n   \t\t<button text=\"Shuttle\" row=\"0\" col=\"0\" \t\t(tap)=\"goShuttle()\" height=\"80\"></button>\n   \t\t<button text=\"Charter\" row=\"0\" col=\"1\" \t\t(tap)=\"goCharter()\" height=\"80\"></button>\n   \t\t<button text=\"FBO\" row=\"1\" col=\"0\" \t\t(tap)=\"goFbo()\" height=\"80\"></button>\n   \t\t<button text=\"MRO\" row=\"1\" col=\"1\" \t\t(tap)=\"goMro()\" height=\"80\"></button>\n   \t\t<button text=\"Passenger Jet\" row=\"2\" col=\"0\" (tap)=\"goPassJet()\" height=\"80\"></button>\n   \t\t<button text=\"Menu\" row=\"2\" col=\"1\" \t\t(tap)=\"goMenu()\" height=\"80\"></button> \n\t</GridLayout>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_1.Location])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUcxQyx3Q0FBd0M7QUFDeEMsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFDekMsdUJBQXlCLGlCQUFpQixDQUFDLENBQUE7QUFrQjNDO0lBSUEsNEJBQW9CLE1BQWMsRUFBVSxRQUFrQjtRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUY5RCxVQUFLLEdBQUcsU0FBUyxDQUFDO0lBR2pCLENBQUM7SUFFRixzQ0FBUyxHQUFULGNBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV2QyxzQ0FBUyxHQUFULGNBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV2QyxrQ0FBSyxHQUFMLGNBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVuQyxrQ0FBSyxHQUFMLGNBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVuQyxzQ0FBUyxHQUFULGNBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUzQyxtQ0FBTSxHQUFOLGNBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQXZDcEM7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLDJ1QkFTVDtTQUlGLENBQUM7OzBCQUFBO0lBMkJGLHlCQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQztBQTFCWSwwQkFBa0IscUJBMEI5QixDQUFBIn0=