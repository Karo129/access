import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/homePage/login/login.component';
import { RegisterComponent } from './components/homePage/register/register.component';
import { ChallengeComponent } from './components/homePage/challenge/challenge.component';

import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuestionsComponent } from './components/dashboard/questions/questions.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { ChangePasswordComponent } from './components/dashboard/change-password/change-password.component';
import { QuestionComponent } from './components/dashboard/questions/question/question.component';
import { ListQuestionaireComponent } from './components/home-page/list-questionaire/list-questionaire.component';
import { AddNameComponent } from './components/home-page/listQuestionaire/add-name/add-name.component';
import { QuestComponent } from './components/home-page/listQuestionaire/quest/quest.component';
import { AnswerComponent } from './components/home-page/listQuestionaire/answer/answer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    ChallengeComponent,
    DashboardComponent,
    QuestionsComponent,
    NavbarComponent,
    ChangePasswordComponent,
    QuestionComponent,
    ListQuestionaireComponent,
    AddNameComponent,
    QuestComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
