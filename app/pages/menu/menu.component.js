"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require('@angular/common');
var MenuComponent = (function () {
    function MenuComponent(router, location) {
        this.router = router;
        this.location = location;
    }
    MenuComponent.prototype.logIn = function () { this.router.navigate(["/login"]); };
    MenuComponent.prototype.signUp = function () { this.router.navigate(["/signup"]); };
    MenuComponent.prototype.goShuttle = function () { this.router.navigate(["/shuttle"]); };
    MenuComponent.prototype.goCharter = function () { this.router.navigate(["/charter"]); };
    MenuComponent.prototype.goFbo = function () { this.router.navigate(["/fbo"]); };
    MenuComponent.prototype.goMro = function () { this.router.navigate(["/mro"]); };
    MenuComponent.prototype.goPassJet = function () { this.router.navigate(["/passportjet"]); };
    MenuComponent.prototype.viewProfile = function () { this.router.navigate(["/profileview"]); };
    MenuComponent = __decorate([
        core_1.Component({
            selector: "menu",
            template: "\n  \t<StackLayout>\n  \t\t<button text=\"Shuttle\" (tap)=\"goShuttle()\"></button>\n  \t\t<button text=\"Charter\" (tap)=\"goCharter()\"></button>\n  \t\t<button text=\"FBO\" (tap)=\"goFbo()\"></button>\n  \t\t<button text=\"MRO\" (tap)=\"goMro()\"></button>\n  \t\t<button text=\"Passport Jet\" (tap)=\"goPassJet()\"></button>\n  \t\t<button text=\"Log in\" (tap)=\"logIn()\"></button>\n  \t\t<button text=\"Sign up\" (tap)=\"signUp()\"></button>\n  \t\t<button text=\"View Profile\" (tap)=\"viewProfile()\"></button>\n  \t</StackLayout>\n  \t"
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_1.Location])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLHVCQUF5QixpQkFBaUIsQ0FBQyxDQUFBO0FBa0IzQztJQUVDLHVCQUFvQixNQUFjLEVBQVUsUUFBa0I7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDN0QsQ0FBQztJQUVGLDZCQUFLLEdBQUwsY0FDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXJDLDhCQUFNLEdBQU4sY0FDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXRDLGlDQUFTLEdBQVQsY0FDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXZDLGlDQUFTLEdBQVQsY0FDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXZDLDZCQUFLLEdBQUwsY0FDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRW5DLDZCQUFLLEdBQUwsY0FDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRW5DLGlDQUFTLEdBQVQsY0FDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTNDLG1DQUFXLEdBQVgsY0FDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBM0M1QztRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsbWlCQVdSO1NBRUgsQ0FBQzs7cUJBQUE7SUE4QkYsb0JBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBN0JZLHFCQUFhLGdCQTZCekIsQ0FBQSJ9