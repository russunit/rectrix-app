"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require('@angular/common');
var NavbarComponent = (function () {
    function NavbarComponent(router, location) {
        this.router = router;
        this.location = location;
    }
    NavbarComponent.prototype.goBack = function () {
        this.location.back();
    };
    NavbarComponent.prototype.goHome = function () {
        this.router.navigate(["/dashboard"]);
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: "navbar",
            template: "\n  \t<StackLayout dock = \"top\" orientation=\"horizontal\" horizontalAlignment=\"center\">\n  \t\t<Button text=\"Back\" (tap)=\"goBack()\" height=\"40\" width=\"190\">Back</Button>\n  \t\t<Button text=\"Home\" (tap)=\"goHome()\" height=\"40\" width=\"190\">Home</Button>\n \t</StackLayout>\n  \t"
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_1.Location])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6Qyx1QkFBeUIsaUJBQWlCLENBQUMsQ0FBQTtBQVkzQztJQUVDLHlCQUFvQixNQUFjLEVBQVUsUUFBa0I7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDN0QsQ0FBQztJQUVGLGdDQUFNLEdBQU47UUFFQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxnQ0FBTSxHQUFOO1FBRUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUF0QkY7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLDJTQUtSO1NBQ0gsQ0FBQzs7dUJBQUE7SUFlRixzQkFBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksdUJBQWUsa0JBYzNCLENBQUEifQ==