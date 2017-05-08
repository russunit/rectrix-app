"use strict";
const core_1 = require("@angular/core");
const platform_1 = require("nativescript-angular/platform");
const forms_1 = require("nativescript-angular/forms");
const http_1 = require("nativescript-angular/http");
const router_1 = require("nativescript-angular/router");
const app_routing_1 = require("./app.routing");
const app_component_1 = require('./app.component');
const current_user_service_1 = require('./shared/current-user/current-user.service');
const element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("DropDown", () => require("nativescript-drop-down/drop-down").DropDown);
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            http_1.NativeScriptHttpModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes)
        ],
        declarations: [
            app_component_1.AppComponent,
            ...app_routing_1.navigatableComponents,
        ],
        providers: [current_user_service_1.CurrentUserService],
        bootstrap: [app_component_1.AppComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUl6QywyQkFBbUMsK0JBQStCLENBQUMsQ0FBQTtBQUNuRSx3QkFBd0MsNEJBQTRCLENBQUMsQ0FBQTtBQUNyRSx1QkFBdUMsMkJBQTJCLENBQUMsQ0FBQTtBQUNuRSx5QkFBeUMsNkJBQTZCLENBQUMsQ0FBQTtBQUV2RSw4QkFBOEMsZUFBZSxDQUFDLENBQUE7QUFFOUQsZ0NBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFlL0MsdUNBQW1DLDRDQUE0QyxDQUFDLENBQUE7QUFVaEYsbUNBQWdDLHVDQUF1QyxDQUFDLENBQUE7QUFDeEUsa0NBQWUsQ0FBQyxVQUFVLEVBQUUsTUFBTSxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQWlCeEY7QUFBd0IsQ0FBQztBQWZ6QjtJQUFDLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNSLDZCQUFrQjtZQUNqQiwrQkFBdUI7WUFDdkIsNkJBQXNCO1lBQ3RCLGlDQUF3QjtZQUN4QixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsb0JBQU0sQ0FBQztTQUN6QztRQUNELFlBQVksRUFBRTtZQUNiLDRCQUFZO1lBQ1osR0FBRyxtQ0FBcUI7U0FDeEI7UUFDRCxTQUFTLEVBQUUsQ0FBQyx5Q0FBa0IsQ0FBQztRQUMvQixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQzFCLENBQUM7O2FBQUE7QUFDVyxpQkFBUyxZQUFHLENBQUEifQ==