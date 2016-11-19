"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require('@angular/common');
var ProfilebarComponent = (function () {
    function ProfilebarComponent(router, location) {
        this.router = router;
        this.location = location;
    }
    ProfilebarComponent.prototype.logIn = function () {
        this.router.navigate(["/login"]);
    };
    ProfilebarComponent.prototype.signUp = function () {
        this.router.navigate(["/signup"]);
    };
    ProfilebarComponent = __decorate([
        core_1.Component({
            selector: "profilebar",
            template: "\n  \t<StackLayout orientation=\"horizontal\" horizontalAlignment=\"center\">\n  \t\t<button text=\"Log In\" (tap)=\"logIn()\" height=\"40\" width=\"190\">Back</button>\n  \t\t<button text=\"Sign Up\" (tap)=\"signUp()\" height=\"40\" width=\"190\">Home</button>\n  \t</StackLayout>\n  \t"
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_1.Location])
    ], ProfilebarComponent);
    return ProfilebarComponent;
}());
exports.ProfilebarComponent = ProfilebarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9maWxlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLHVCQUF5QixpQkFBaUIsQ0FBQyxDQUFBO0FBVzNDO0lBRUMsNkJBQW9CLE1BQWMsRUFBVSxRQUFrQjtRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUM3RCxDQUFDO0lBRUYsbUNBQUssR0FBTDtRQUVDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsb0NBQU0sR0FBTjtRQUVDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBdEJGO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxpU0FLUjtTQUNILENBQUM7OzJCQUFBO0lBZUYsMEJBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQWRZLDJCQUFtQixzQkFjL0IsQ0FBQSJ9