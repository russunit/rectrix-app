"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var charter_component_1 = require('./pages/charter/charter.component');
var shuttle_component_1 = require('./pages/shuttle/shuttle.component');
var dashboard_component_1 = require('./pages/dashboard/dashboard.component');
var fbo_component_1 = require('./pages/fbo/fbo.component');
var fbo_detail_component_1 = require('./pages/fbo/fbo-detail.component');
var login_component_1 = require('./pages/login/login.component');
var menu_component_1 = require('./pages/menu/menu.component');
var mro_component_1 = require('./pages/mro/mro.component');
var mro_detail_component_1 = require('./pages/mro/mro-detail.component');
var navbar_component_1 = require('./pages/navbar/navbar.component');
var passportjet_component_1 = require('./pages/passportjet/passportjet.component');
var passportjet_join_component_1 = require('./pages/passportjet/passportjet-join.component');
var profilebar_component_1 = require('./pages/profilebar/profilebar.component');
var signup_component_1 = require('./pages/signup/signup.component');
var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'charter', component: charter_component_1.CharterComponent },
    { path: 'shuttle', component: shuttle_component_1.ShuttleComponent },
    { path: 'fbo', component: fbo_component_1.FboComponent },
    { path: 'fbo-detail/:id', component: fbo_detail_component_1.FboDetailComponent },
    { path: 'mro', component: mro_component_1.MroComponent },
    { path: 'mro-detail/:id', component: mro_detail_component_1.MroDetailComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'menu', component: menu_component_1.MenuComponent },
    { path: 'navbar', component: navbar_component_1.NavbarComponent },
    { path: 'passportjet', component: passportjet_component_1.PassportJetComponent },
    { path: 'passportjet-join', component: passportjet_join_component_1.PassportJetJoinComponent },
    { path: 'profilebar', component: profilebar_component_1.ProfilebarComponent },
    { path: 'signup', component: signup_component_1.SignupComponent }
];
var AppRouting = (function () {
    function AppRouting() {
    }
    AppRouting = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRouting);
    return AppRouting;
}());
exports.AppRouting = AppRouting;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXFDLGVBQWUsQ0FBQyxDQUFBO0FBQ3JELHVCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBR3ZELGtDQUFpQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3JFLGtDQUFpQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3JFLG9DQUFtQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBQzNFLDhCQUE2QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3pELHFDQUFtQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3RFLGdDQUErQiwrQkFBK0IsQ0FBQyxDQUFBO0FBQy9ELCtCQUE4Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzVELDhCQUE2QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3pELHFDQUFtQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3RFLGlDQUFnQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ2xFLHNDQUFxQywyQ0FBMkMsQ0FBQyxDQUFBO0FBQ2pGLDJDQUF5QyxnREFBZ0QsQ0FBQyxDQUFBO0FBQzFGLHFDQUFvQyx5Q0FBeUMsQ0FBQyxDQUFBO0FBQzlFLGlDQUFnQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBRWxFLElBQU0sTUFBTSxHQUFXO0lBQ3JCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDekQsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFLLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRTtJQUN2RCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQVEsU0FBUyxFQUFFLG9DQUFnQixFQUFFO0lBQ3RELEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBUSxTQUFTLEVBQUUsb0NBQWdCLEVBQUU7SUFDdEQsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFhLFNBQVMsRUFBRSw0QkFBWSxFQUFFO0lBQ25ELEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFNLFNBQVMsRUFBRSx5Q0FBa0IsRUFBRTtJQUM3RCxFQUFFLElBQUksRUFBRSxLQUFLLEVBQVMsU0FBUyxFQUFFLDRCQUFZLEVBQUU7SUFDL0MsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQU0sU0FBUyxFQUFFLHlDQUFrQixFQUFFO0lBQzdELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBTSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUNoRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQU0sU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDOUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFNLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO0lBQ2xELEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBTSxTQUFTLEVBQUUsNENBQW9CLEVBQUU7SUFDNUQsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUksU0FBUyxFQUFFLHFEQUF3QixFQUFFO0lBQ25FLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBTSxTQUFTLEVBQUUsMENBQW1CLEVBQUU7SUFDMUQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFNLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO0NBQ25ELENBQUM7QUFNRjtJQUFBO0lBQXlCLENBQUM7SUFKMUI7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBRSxxQkFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBRTtZQUN6QyxPQUFPLEVBQUUsQ0FBRSxxQkFBWSxDQUFFO1NBQzFCLENBQUM7O2tCQUFBO0lBQ3VCLGlCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLGtCQUFVLGFBQUcsQ0FBQSJ9