import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RegisterComponent } from './components/homePage/register/register.component';
import { LoginComponent } from './components/homePage/login/login.component';
import { ChallengeComponent } from './components/homePage/challenge/challenge.component';

const routes: Routes = [
  { path: '', redirectTo: '/challenge', pathMatch: 'full'},
  { path: 'challenge', component: ChallengeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '/challenge', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
