"use strict";
const core_1 = require("@angular/core");
const platform_1 = require("nativescript-angular/platform");
const forms_1 = require("nativescript-angular/forms");
const http_1 = require("nativescript-angular/http");
const router_1 = require("nativescript-angular/router");
const app_routing_1 = require("./app.routing");
const app_component_1 = require('./app.component');
const current_user_service_1 = require('./shared/current-user/current-user.service');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUl6QywyQkFBbUMsK0JBQStCLENBQUMsQ0FBQTtBQUNuRSx3QkFBd0MsNEJBQTRCLENBQUMsQ0FBQTtBQUNyRSx1QkFBdUMsMkJBQTJCLENBQUMsQ0FBQTtBQUNuRSx5QkFBeUMsNkJBQTZCLENBQUMsQ0FBQTtBQUV2RSw4QkFBOEMsZUFBZSxDQUFDLENBQUE7QUFFOUQsZ0NBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFlL0MsdUNBQW1DLDRDQUE0QyxDQUFDLENBQUE7QUF5QmhGO0FBQXdCLENBQUM7QUFmekI7SUFBQyxlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUiw2QkFBa0I7WUFDakIsK0JBQXVCO1lBQ3ZCLDZCQUFzQjtZQUN0QixpQ0FBd0I7WUFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLG9CQUFNLENBQUM7U0FDekM7UUFDRCxZQUFZLEVBQUU7WUFDYiw0QkFBWTtZQUNaLEdBQUcsbUNBQXFCO1NBQ3hCO1FBQ0QsU0FBUyxFQUFFLENBQUMseUNBQWtCLENBQUM7UUFDL0IsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUMxQixDQUFDOzthQUFBO0FBQ1csaUJBQVMsWUFBRyxDQUFBIn0=