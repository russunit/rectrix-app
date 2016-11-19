"use strict";
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
var profileview_component_1 = require('./pages/profileview/profileview.component');
var signup_component_1 = require('./pages/signup/signup.component');
exports.routes = [
    { path: '', component: dashboard_component_1.DashboardComponent },
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
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'profileview', component: profileview_component_1.ProfileViewComponent }
];
exports.navigatableComponents = [
    charter_component_1.CharterComponent,
    shuttle_component_1.ShuttleComponent,
    dashboard_component_1.DashboardComponent,
    fbo_component_1.FboComponent,
    fbo_detail_component_1.FboDetailComponent,
    login_component_1.LoginComponent,
    menu_component_1.MenuComponent,
    mro_component_1.MroComponent,
    mro_detail_component_1.MroDetailComponent,
    navbar_component_1.NavbarComponent,
    passportjet_component_1.PassportJetComponent,
    passportjet_join_component_1.PassportJetJoinComponent,
    profilebar_component_1.ProfilebarComponent,
    signup_component_1.SignupComponent,
    profileview_component_1.ProfileViewComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esa0NBQWlDLG1DQUFtQyxDQUFDLENBQUE7QUFDckUsa0NBQWlDLG1DQUFtQyxDQUFDLENBQUE7QUFDckUsb0NBQW1DLHVDQUF1QyxDQUFDLENBQUE7QUFDM0UsOEJBQTZCLDJCQUEyQixDQUFDLENBQUE7QUFDekQscUNBQW1DLGtDQUFrQyxDQUFDLENBQUE7QUFDdEUsZ0NBQStCLCtCQUErQixDQUFDLENBQUE7QUFDL0QsK0JBQThCLDZCQUE2QixDQUFDLENBQUE7QUFDNUQsOEJBQTZCLDJCQUEyQixDQUFDLENBQUE7QUFDekQscUNBQW1DLGtDQUFrQyxDQUFDLENBQUE7QUFDdEUsaUNBQWdDLGlDQUFpQyxDQUFDLENBQUE7QUFDbEUsc0NBQXFDLDJDQUEyQyxDQUFDLENBQUE7QUFDakYsMkNBQXlDLGdEQUFnRCxDQUFDLENBQUE7QUFDMUYscUNBQW9DLHlDQUF5QyxDQUFDLENBQUE7QUFDOUUsc0NBQXFDLDJDQUEyQyxDQUFDLENBQUE7QUFDakYsaUNBQWdDLGlDQUFpQyxDQUFDLENBQUE7QUFLckQsY0FBTSxHQUFHO0lBQ3BCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBTyxTQUFTLEVBQUUsd0NBQWtCLEVBQUU7SUFDaEQsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFLLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRTtJQUN2RCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQVEsU0FBUyxFQUFFLG9DQUFnQixFQUFFO0lBQ3RELEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBUSxTQUFTLEVBQUUsb0NBQWdCLEVBQUU7SUFDdEQsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFhLFNBQVMsRUFBRSw0QkFBWSxFQUFFO0lBQ25ELEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFNLFNBQVMsRUFBRSx5Q0FBa0IsRUFBRTtJQUM3RCxFQUFFLElBQUksRUFBRSxLQUFLLEVBQVMsU0FBUyxFQUFFLDRCQUFZLEVBQUU7SUFDL0MsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQU0sU0FBUyxFQUFFLHlDQUFrQixFQUFFO0lBQzdELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBUyxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUNuRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQVMsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDakQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFRLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO0lBQ3BELEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBTyxTQUFTLEVBQUUsNENBQW9CLEVBQUU7SUFDN0QsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUksU0FBUyxFQUFFLHFEQUF3QixFQUFFO0lBQ25FLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBTyxTQUFTLEVBQUUsMENBQW1CLEVBQUU7SUFDM0QsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFRLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO0lBQ3BELEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRyxTQUFTLEVBQUUsNENBQW9CLEVBQUM7Q0FDekQsQ0FBQztBQUVXLDZCQUFxQixHQUNsQztJQUNHLG9DQUFnQjtJQUNoQixvQ0FBZ0I7SUFDaEIsd0NBQWtCO0lBQ2xCLDRCQUFZO0lBQ1oseUNBQWtCO0lBQ2xCLGdDQUFjO0lBQ2QsOEJBQWE7SUFDYiw0QkFBWTtJQUNaLHlDQUFrQjtJQUNsQixrQ0FBZTtJQUNmLDRDQUFvQjtJQUNwQixxREFBd0I7SUFDeEIsMENBQW1CO0lBQ25CLGtDQUFlO0lBQ2YsNENBQW9CO0NBQ3RCLENBQUMifQ==