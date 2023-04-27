import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RegisterComponent } from './components/homePage/register/register.component';
import { LoginComponent } from './components/homePage/login/login.component';
import { ChallengeComponent } from './components/homePage/challenge/challenge.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuestionsComponent } from './components/dashboard/questions/questions.component';
import { ChangePasswordComponent } from './components/dashboard/change-password/change-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full'},
  { path: 'home-page', component: HomePageComponent, children: [
    { path: '', component: ChallengeComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent},
  ]},
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', component: QuestionsComponent},
    { path: 'changePassword', component: ChangePasswordComponent}
  ]},
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
