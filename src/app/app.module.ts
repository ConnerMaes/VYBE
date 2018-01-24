import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule,
  MatListModule, MatStepperModule, MatInputModule, MatCheckboxModule, MatProgressSpinnerModule, MatSidenavModule, MatTableModule,
  MatDialogModule, MatRadioModule, MatSelectModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { NewSessionComponent } from './dashboard/sessions/new-session/new-session.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SessionsComponent } from './dashboard/sessions/sessions.component';
import { SessionSubjectsComponent } from './dashboard/sessions/session-subjects/session-subjects.component';
import { SessionDetailComponent } from './dashboard/sessions/session-detail/session-detail.component';
import { SubjectAnswersComponent } from './dashboard/subject-answers/subject-answers.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { SavedSessionsComponent } from './dashboard/saved-sessions/saved-sessions.component';
import { OpenSessionsComponent } from './dashboard/open-sessions/open-sessions.component';
import { AddResearcherModalComponent } from './dashboard/sessions/session-detail/add-researcher-modal/add-researcher-modal.component';
import { ParticipantsComponent } from './dashboard/participants/participants.component';
import { SessionEditComponent } from './dashboard/sessions/session-edit/session-edit.component';
import { ExistingQuestionModalComponent } from './dashboard/sessions/session-edit/existing-question-modal/existing-question-modal.component';
import { NewQuestionModalComponent } from './dashboard/sessions/session-edit/new-question-modal/new-question-modal.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { CopySessionModalComponent } from './dashboard/sessions/session-detail/copy-session-modal/copy-session-modal.component';
import { ResetPasswordModalComponent } from './login/reset-password-modal/reset-password-modal.component';
import { NotFoundComponent } from './dashboard/not-found/not-found.component';
import { GuideComponent } from './dashboard/guide/guide.component';
import { DeleteSessionModalComponent } from './dashboard/sessions/session-detail/delete-session-modal/delete-session-modal.component';
import { QuestionsComponent } from './dashboard/questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    NewSessionComponent,
    HomeComponent,
    GuideComponent,
    SessionsComponent,
    SessionSubjectsComponent,
    SessionDetailComponent,
    SubjectAnswersComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    DashboardHomeComponent,
    SavedSessionsComponent,
    OpenSessionsComponent,
    AddResearcherModalComponent,
    ParticipantsComponent,
    SessionEditComponent,
    ExistingQuestionModalComponent,
    NewQuestionModalComponent,
    SettingsComponent,
    CopySessionModalComponent,
    ResetPasswordModalComponent,
    NotFoundComponent,
    DeleteSessionModalComponent,
    QuestionsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatTableModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddResearcherModalComponent, ExistingQuestionModalComponent, NewQuestionModalComponent, CopySessionModalComponent, ResetPasswordModalComponent, DeleteSessionModalComponent]
})
export class AppModule { }
