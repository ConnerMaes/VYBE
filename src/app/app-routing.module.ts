import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {NewSessionComponent} from './dashboard/sessions/new-session/new-session.component';
import {HomeComponent} from './home/home.component';
import {SessionsComponent} from './dashboard/sessions/sessions.component';
import {SessionSubjectsComponent} from "./dashboard/sessions/session-subjects/session-subjects.component";
import {SessionDetailComponent} from "./dashboard/sessions/session-detail/session-detail.component";
import {SubjectAnswersComponent} from "./dashboard/subject-answers/subject-answers.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./login/signup/signup.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DashboardHomeComponent} from "./dashboard/dashboard-home/dashboard-home.component";
import {SavedSessionsComponent} from "./dashboard/saved-sessions/saved-sessions.component";
import {OpenSessionsComponent} from "./dashboard/open-sessions/open-sessions.component";
import {ParticipantsComponent} from "./dashboard/participants/participants.component";
import {SessionEditComponent} from "./dashboard/sessions/session-edit/session-edit.component";
import {SettingsComponent} from "./dashboard/settings/settings.component";
import {NotFoundComponent} from "./dashboard/not-found/not-found.component";
import {GuideComponent} from "./dashboard/guide/guide.component";
import {QuestionsComponent} from "./dashboard/questions/questions.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', component: DashboardHomeComponent},
    { path: 'sessions', component: SessionsComponent},
    { path: 'sessions/new', component: NewSessionComponent},
    { path: 'sessions/saved', component: SavedSessionsComponent},
    { path: 'sessions/open', component: OpenSessionsComponent},
    { path: 'sessions/:id', component: SessionDetailComponent},
    { path: 'sessions/:id/subjects', component: SessionSubjectsComponent},
    { path: 'sessions/:id/edit', component: SessionEditComponent},
    { path: 'subjects', component: ParticipantsComponent},
    { path: 'subjects/:id/answers', component: SubjectAnswersComponent},
    { path: 'questions', component: QuestionsComponent},
    { path: 'settings', component: SettingsComponent},
    { path: 'guide', component: GuideComponent},
    { path: '**', redirectTo: '/dashboard'}
  ]},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
