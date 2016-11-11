import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CharterComponent } from './pages/charter/charter.component';
import { ShuttleComponent } from './pages/shuttle/shuttle.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FboComponent } from './pages/fbo/fbo.component';
import { FboDetailsComponent } from './pages/fbo/fbo-details.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MroComponent } from './pages/mro/mro.component';
import { MroDetailsComponent } from './pages/mro/mro-details.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { PassportJetComponent } from './pages/passportjet/passportjet.component';
import { PassportJetJoinComponent } from './pages/passportjet/passportjet-join.component';
import { ProfilebarComponent } from './pages/profilebar/profilebar.component';
import { SignupComponent } from './pages/signup/signup.component';



import { ProfileViewComponent } from './pages/profileview/profileview.component';
import { ProfileShuttleHistoryComponent } from './pages/profileview/profile-shuttle-history.component';
import { ProfileShuttleDetailsComponent } from './pages/profileview/profile-shuttle-details.component';
import { ProfileCharterHistoryComponent } from './pages/profileview/profile-charter-history.component';
import { ProfileCharterDetailsComponent } from './pages/profileview/profile-charter-details.component';
import { ProfileSettingsComponent } from './pages/profileview/profile-settings.component';


@NgModule({
  imports: [NativeScriptModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
