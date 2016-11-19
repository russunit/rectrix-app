import { NgModule } from "@angular/core";
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";


import { routes, navigatableComponents } from "./app.routing";

import { AppComponent } from './app.component';
import { CharterComponent } from './pages/charter/charter.component';
import { ShuttleComponent } from './pages/shuttle/shuttle.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FboComponent } from './pages/fbo/fbo.component';
import { FboDetailComponent } from './pages/fbo/fbo-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MroComponent } from './pages/mro/mro.component';
import { MroDetailComponent } from './pages/mro/mro-detail.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { PassportJetComponent } from './pages/passportjet/passportjet.component';
import { PassportJetJoinComponent } from './pages/passportjet/passportjet-join.component';
import { ProfilebarComponent } from './pages/profilebar/profilebar.component';
import { SignupComponent } from './pages/signup/signup.component';
 
import { User } from './shared/user/user';
 


import { ProfileViewComponent } from './pages/profileview/profileview.component';
import { ProfileShuttleHistoryComponent } from './pages/profileview/profile-shuttle-history.component';
import { ProfileShuttleDetailsComponent } from './pages/profileview/profile-shuttle-details.component';
import { ProfileCharterHistoryComponent } from './pages/profileview/profile-charter-history.component';
import { ProfileCharterDetailsComponent } from './pages/profileview/profile-charter-details.component';
import { ProfileSettingsComponent } from './pages/profileview/profile-settings.component';


@NgModule({
  imports: [
  	NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  declarations: [
  	AppComponent,
  	...navigatableComponents,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
