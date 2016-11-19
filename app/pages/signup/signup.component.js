"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var SignupComponent = (function () {
    function SignupComponent(router) {
        this.router = router;
        this.user = new User();
    }
    SignupComponent.prototype.signup = function (user) {
        alert("New user created");
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: "signup",
            template: "\n<StackLayout>\n<ScrollView>\n<StackLayout>\n<label text='Signup Component'></label>\n\n<label text='First Name'></label>\n<Textfield autocorrect=\"false\" autocapitalizationType=\"none\" [(ngModel)]=\"user.firstName\"></TextField>\n\n<label text='Last Name'></Label>\n<Textfield autocorrect=\"false\" autocapitalizationType=\"none\" [(ngModel)]=\"user.lastName\"></TextField>\n\n<label text='Address'></Label>\n<Textfield autocorrect=\"false\" autocapitalizationType=\"none\" [(ngModel)]=\"user.address\"></TextField>\n\n<label text='City'></Label>\n<Textfield autocorrect=\"false\" autocapitalizationType=\"none\" [(ngModel)]=\"user.city\"></TextField>\n\n<label text='Country'></Label>\n<Textfield autocorrect=\"false\" autocapitalizationType=\"none\" [(ngModel)]=\"user.country\"></TextField>\n\n<label text='Zip code'></Label>\n<Textfield keyboardType =\"number\" [(ngModel)]=\"user.zip\"></TextField>\n\n<label text='Username'></Label>\n<Textfield autocorrect=\"false\" autocapitalizationType=\"none\" [(ngModel)]=\"user.username\"></TextField>\n\n<label text='Password'></Label>\n<Textfield secure = \"true\" [(ngModel)]=\"user.password\"></TextField>\n<Button [text]=\"Submit\"(tap)=\"signup(this.user)\"></Button>\n </StackLayout>\n </ScrollView>\n </StackLayout>\n",
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6QztJQUFBO0lBWUEsQ0FBQztJQUFELFdBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLFlBQUksT0FZaEIsQ0FBQTtBQXVDRDtJQUdBLHlCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUUzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUNELGdDQUFNLEdBQU4sVUFBTyxJQUFTO1FBRWYsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDM0IsQ0FBQztJQS9DRDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsNnZDQWlDWDtTQUNBLENBQUM7O3VCQUFBO0lBWUYsc0JBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVhZLHVCQUFlLGtCQVczQixDQUFBIn0=