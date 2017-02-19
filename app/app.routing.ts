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
import { ProfileViewComponent } from './pages/profileview/profileview.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileEditDetailsComponent } from './pages/profileview/profile-edit-details.component';
import { ProfileCharterHistoryComponent } from './pages/profileview/profile-charter-history.component';
import { ProfileShuttleHistoryComponent } from './pages/profileview/profile-shuttle-history.component';
import { ProfileShuttleDetailsComponent } from './pages/profileview/profile-shuttle-details.component';
import { ProfileCharterDetailsComponent } from './pages/profileview/profile-charter-details.component';
import { SuggestionComponent } from './pages/suggestion/suggestion.component';

export const routes = [
  { path: '', 					component: DashboardComponent },
  { path: 'dashboard',  		component: DashboardComponent },
  { path: 'charter',     		component: CharterComponent },
  { path: 'shuttle',     		component: ShuttleComponent },
  { path: 'fbo',          		component: FboComponent },
  { path: 'fbo-detail/:id',     component: FboDetailComponent },
  { path: 'mro',     			component: MroComponent },
  { path: 'mro-detail/:id',     component: MroDetailComponent },
  { path: 'login',     			component: LoginComponent },
  { path: 'menu',     			component: MenuComponent },
  { path: 'navbar',     		component: NavbarComponent },
  { path: 'passportjet',     	component: PassportJetComponent },
  { path: 'passportjet-join',   component: PassportJetJoinComponent },
  { path: 'profilebar',     	component: ProfilebarComponent },
  { path: 'signup',     		component: SignupComponent },
  { path: 'profileview',		component: ProfileViewComponent },
{ path: 'edit', component:       ProfileEditDetailsComponent },
{ path: 'shuttlehistory', component: ProfileShuttleHistoryComponent },
{ path: 'charterhistory', component: ProfileCharterHistoryComponent },
{ path: 'shuttledetail', component: ProfileShuttleDetailsComponent },
{ path: 'charterdetail', component: ProfileCharterDetailsComponent },
{ path: 'suggestion', component: SuggestionComponent }
];

export const navigatableComponents = 
[
ProfileShuttleDetailsComponent,
ProfileCharterDetailsComponent,
ProfileShuttleHistoryComponent,
ProfileCharterHistoryComponent,
ProfileEditDetailsComponent,
  	CharterComponent,
  	ShuttleComponent,
  	DashboardComponent,
  	FboComponent,
  	FboDetailComponent,
  	LoginComponent,
  	MenuComponent,
  	MroComponent,
  	MroDetailComponent,
  	NavbarComponent,
  	PassportJetComponent,
  	PassportJetJoinComponent,
  	ProfilebarComponent,
  	SignupComponent,
  	ProfileViewComponent,
SuggestionComponent
];