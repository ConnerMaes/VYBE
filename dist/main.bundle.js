webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_sessions_new_session_new_session_component__ = __webpack_require__("../../../../../src/app/dashboard/sessions/new-session/new-session.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_sessions_sessions_component__ = __webpack_require__("../../../../../src/app/dashboard/sessions/sessions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_sessions_session_subjects_session_subjects_component__ = __webpack_require__("../../../../../src/app/dashboard/sessions/session-subjects/session-subjects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_sessions_session_detail_session_detail_component__ = __webpack_require__("../../../../../src/app/dashboard/sessions/session-detail/session-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_subject_answers_subject_answers_component__ = __webpack_require__("../../../../../src/app/dashboard/subject-answers/subject-answers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_signup_signup_component__ = __webpack_require__("../../../../../src/app/login/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_home_dashboard_home_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard-home/dashboard-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_saved_sessions_saved_sessions_component__ = __webpack_require__("../../../../../src/app/dashboard/saved-sessions/saved-sessions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_open_sessions_open_sessions_component__ = __webpack_require__("../../../../../src/app/dashboard/open-sessions/open-sessions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_participants_participants_component__ = __webpack_require__("../../../../../src/app/dashboard/participants/participants.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dashboard_sessions_session_edit_session_edit_component__ = __webpack_require__("../../../../../src/app/dashboard/sessions/session-edit/session-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dashboard_settings_settings_component__ = __webpack_require__("../../../../../src/app/dashboard/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dashboard_guide_guide_component__ = __webpack_require__("../../../../../src/app/dashboard/guide/guide.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dashboard_questions_questions_component__ = __webpack_require__("../../../../../src/app/dashboard/questions/questions.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_9__login_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_home_dashboard_home_component__["a" /* DashboardHomeComponent */] },
            { path: 'sessions', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_sessions_sessions_component__["a" /* SessionsComponent */] },
            { path: 'sessions/new', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_sessions_new_session_new_session_component__["a" /* NewSessionComponent */] },
            { path: 'sessions/saved', component: __WEBPACK_IMPORTED_MODULE_12__dashboard_saved_sessions_saved_sessions_component__["a" /* SavedSessionsComponent */] },
            { path: 'sessions/open', component: __WEBPACK_IMPORTED_MODULE_13__dashboard_open_sessions_open_sessions_component__["a" /* OpenSessionsComponent */] },
            { path: 'sessions/:id', component: __WEBPACK_IMPORTED_MODULE_6__dashboard_sessions_session_detail_session_detail_component__["a" /* SessionDetailComponent */] },
            { path: 'sessions/:id/subjects', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_sessions_session_subjects_session_subjects_component__["a" /* SessionSubjectsComponent */] },
            { path: 'sessions/:id/edit', component: __WEBPACK_IMPORTED_MODULE_15__dashboard_sessions_session_edit_session_edit_component__["a" /* SessionEditComponent */] },
            { path: 'subjects', component: __WEBPACK_IMPORTED_MODULE_14__dashboard_participants_participants_component__["a" /* ParticipantsComponent */] },
            { path: 'subjects/:id/answers', component: __WEBPACK_IMPORTED_MODULE_7__dashboard_subject_answers_subject_answers_component__["a" /* SubjectAnswersComponent */] },
            { path: 'questions', component: __WEBPACK_IMPORTED_MODULE_18__dashboard_questions_questions_component__["a" /* QuestionsComponent */] },
            { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_16__dashboard_settings_settings_component__["a" /* SettingsComponent */] },
            { path: 'guide', component: __WEBPACK_IMPORTED_MODULE_17__dashboard_guide_guide_component__["a" /* GuideComponent */] },
            { path: '**', redirectTo: '/dashboard' }
        ] },
    { path: '**', redirectTo: '/' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-root {\r\n  background: green !important;\r\n}\r\n\r\nbody {\r\n  background-color: green !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_question_service__ = __webpack_require__("../../../../../src/services/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_researcher_service__ = __webpack_require__("../../../../../src/services/researcher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_subject_service__ = __webpack_require__("../../../../../src/services/subject.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_3__services_researcher_service__["a" /* ResearcherService */], __WEBPACK_IMPORTED_MODULE_4__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_5__services_subject_service__["a" /* SubjectService */]]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_sessions_new_session_new_session_component__ = __webpack_require__("../../../../../src/app/dashboard/sessions/new-session/new-session.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_sessions_sessions_component__ = __webpack_require__("../../../../../src/app/dashboard/sessions/sessions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_sessions_session_subjects_session_subjects_component__ = __webpack_require__("../../../../../src/app/dashboard/sessions/session-subjects/session-subjects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_sessions_session_detail_session_detail_component__ = __webpack_require__("../../../../../src/app/dashboard/sessions/session-detail/session-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_subject_answers_subject_answers_component__ = __webpack_require__("../../../../../src/app/dashboard/subject-answers/subject-answers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_signup_signup_component__ = __webpack_require__("../../../../../src/app/login/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dashboard_dashboard_home_dashboard_home_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard-home/dashboard-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dashboard_saved_sessions_saved_sessions_component__ = __webpack_require__("../../../../../src/app/dashboard/saved-sessions/saved-sessions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__dashboard_open_sessions_open_sessions_component__ = __webpack_require__("../../../../../src/app/dashboard/open-sessions/open-sessions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__dashboard_sessions_session_detail_add_researcher_modal_add_researcher_modal_component__ = __webpack_require__("../../../../../src/app/dashboard/sessions/session-detail/add-researcher-modal/add-researcher-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__dashboard_participants_participants_component__ = __webpack_require__("../../../../../src/app/dashboard/participants/participants.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__dashboard_sessions_session_edit_session_edit_component__ = __webpack_require__("../../../../../src/app/dashboard/sessions/session-edit/session-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__dashboard_sessions_session_edit_existing_question_modal_existing_question_modal_component__ = __webpack_require__("../../../../../src/app/dashboard/sessions/session-edit/existing-question-modal/existing-question-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__dashboard_sessions_session_edit_new_question_modal_new_question_modal_component__ = __webpack_require__("../../../../../src/app/dashboard/sessions/session-edit/new-question-modal/new-question-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__dashboard_settings_settings_component__ = __webpack_require__("../../../../../src/app/dashboard/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__dashboard_sessions_session_detail_copy_session_modal_copy_session_modal_component__ = __webpack_require__("../../../../../src/app/dashboard/sessions/session-detail/copy-session-modal/copy-session-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__login_reset_password_modal_reset_password_modal_component__ = __webpack_require__("../../../../../src/app/login/reset-password-modal/reset-password-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__dashboard_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/dashboard/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__dashboard_guide_guide_component__ = __webpack_require__("../../../../../src/app/dashboard/guide/guide.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__dashboard_sessions_session_detail_delete_session_modal_delete_session_modal_component__ = __webpack_require__("../../../../../src/app/dashboard/sessions/session-detail/delete-session-modal/delete-session-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__dashboard_questions_questions_component__ = __webpack_require__("../../../../../src/app/dashboard/questions/questions.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__dashboard_sessions_new_session_new_session_component__["a" /* NewSessionComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_29__dashboard_guide_guide_component__["a" /* GuideComponent */],
            __WEBPACK_IMPORTED_MODULE_10__dashboard_sessions_sessions_component__["a" /* SessionsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__dashboard_sessions_session_subjects_session_subjects_component__["a" /* SessionSubjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__dashboard_sessions_session_detail_session_detail_component__["a" /* SessionDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_13__dashboard_subject_answers_subject_answers_component__["a" /* SubjectAnswersComponent */],
            __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__login_signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_16__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_17__dashboard_dashboard_home_dashboard_home_component__["a" /* DashboardHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_18__dashboard_saved_sessions_saved_sessions_component__["a" /* SavedSessionsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__dashboard_open_sessions_open_sessions_component__["a" /* OpenSessionsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__dashboard_sessions_session_detail_add_researcher_modal_add_researcher_modal_component__["a" /* AddResearcherModalComponent */],
            __WEBPACK_IMPORTED_MODULE_21__dashboard_participants_participants_component__["a" /* ParticipantsComponent */],
            __WEBPACK_IMPORTED_MODULE_22__dashboard_sessions_session_edit_session_edit_component__["a" /* SessionEditComponent */],
            __WEBPACK_IMPORTED_MODULE_23__dashboard_sessions_session_edit_existing_question_modal_existing_question_modal_component__["a" /* ExistingQuestionModalComponent */],
            __WEBPACK_IMPORTED_MODULE_24__dashboard_sessions_session_edit_new_question_modal_new_question_modal_component__["a" /* NewQuestionModalComponent */],
            __WEBPACK_IMPORTED_MODULE_25__dashboard_settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_26__dashboard_sessions_session_detail_copy_session_modal_copy_session_modal_component__["a" /* CopySessionModalComponent */],
            __WEBPACK_IMPORTED_MODULE_27__login_reset_password_modal_reset_password_modal_component__["a" /* ResetPasswordModalComponent */],
            __WEBPACK_IMPORTED_MODULE_28__dashboard_not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_30__dashboard_sessions_session_detail_delete_session_modal_delete_session_modal_component__["a" /* DeleteSessionModalComponent */],
            __WEBPACK_IMPORTED_MODULE_31__dashboard_questions_questions_component__["a" /* QuestionsComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatStepperModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatSelectModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_20__dashboard_sessions_session_detail_add_researcher_modal_add_researcher_modal_component__["a" /* AddResearcherModalComponent */], __WEBPACK_IMPORTED_MODULE_23__dashboard_sessions_session_edit_existing_question_modal_existing_question_modal_component__["a" /* ExistingQuestionModalComponent */], __WEBPACK_IMPORTED_MODULE_24__dashboard_sessions_session_edit_new_question_modal_new_question_modal_component__["a" /* NewQuestionModalComponent */], __WEBPACK_IMPORTED_MODULE_26__dashboard_sessions_session_detail_copy_session_modal_copy_session_modal_component__["a" /* CopySessionModalComponent */], __WEBPACK_IMPORTED_MODULE_27__login_reset_password_modal_reset_password_modal_component__["a" /* ResetPasswordModalComponent */], __WEBPACK_IMPORTED_MODULE_30__dashboard_sessions_session_detail_delete_session_modal_delete_session_modal_component__["a" /* DeleteSessionModalComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard-home/dashboard-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".shortcut-holder {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n\r\n.shortcut {\r\n  border: 1px solid #dddddd;\r\n  border-radius: 10px;\r\n  width: 28%;\r\n  display: inline-block;\r\n  text-align: center;\r\n}\r\n\r\n.content {\r\n  padding: 15px;\r\n  padding-top: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard-home/dashboard-home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welkom, {{currentUserName}}</h1>\r\n<br>\r\n<div class=\"shortcut-holder\">\r\n  <div class=\"shortcut\">\r\n    <img src=\"../../../assets/session_figure.png\" alt=\"add\" style=\"width: 75%; margin-top: 15px\">\r\n    <div class=\"content\">\r\n      <h2>Sessies</h2>\r\n      <p>\r\n        <span *ngIf=\"openSessionCount!==1\">\r\n          Er is momenteel {{openSessionCount}} sessie\r\n        </span>\r\n        <span *ngIf=\"openSessionCount==1\">\r\n          Er is momenteel {{openSessionCount}} sessie\r\n        </span>\r\n         actief. Gebruikers kunnen hier aan deelnemen zolang ze actief zijn.</p>\r\n      <button mat-button routerLink=\"/dashboard/sessions\">Ga naar sessies</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"shortcut\">\r\n    <img src=\"../../../assets/add_figure.png\" alt=\"add\" style=\"width: 75%; margin-top: 15px\">\r\n    <div class=\"content\">\r\n      <h2>Nieuwe sessie</h2>\r\n      <p>Maak een nieuwe sessie aan om gebruikers te volgen. Kies vragen en voeg onderzoekers toe.</p>\r\n      <button mat-button routerLink=\"/dashboard/sessions/new\">Maak een nieuwe sessie aan</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"shortcut\">\r\n    <img src=\"../../../assets/participant_figure.png\" alt=\"add\" style=\"width: 75%; margin-top: 15px\">\r\n    <div class=\"content\">\r\n      <h2>Deelnemers</h2>\r\n      <p>Bekijk alle gebruikers dat aan uw sessie hebben deelgenomen en hun antwoorden.</p>\r\n      <button mat-button routerLink=\"/dashboard/participants\">Ga naar deelnemers</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard-home/dashboard-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardHomeComponent = (function () {
    function DashboardHomeComponent(authService, sessionSerivce) {
        this.authService = authService;
        this.sessionSerivce = sessionSerivce;
        this.currentUserName = '';
        this.openSessionCount = 0;
        var body = document.getElementsByTagName('body')[0];
        // body.classList.remove("className");
        body.classList.add('white-background');
    }
    DashboardHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUserName = this.authService.currentUser.firstName + ' ' + this.authService.currentUser.lastName;
        this.sessionSerivce.getOpenSessions()
            .subscribe(function (res) {
            _this.openSessionCount = res.length;
        });
    };
    return DashboardHomeComponent;
}());
DashboardHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-dashboard-home',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard-home/dashboard-home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard-home/dashboard-home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */]) === "function" && _b || Object])
], DashboardHomeComponent);

var _a, _b;
//# sourceMappingURL=dashboard-home.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\r\n  width: 100%;\r\n  height: 60px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: white;\r\n  overflow-x: hidden;\r\n  margin: auto;\r\n  border-bottom:4px solid #49AAE2;\r\n}\r\n\r\n.navbar .logo {\r\n  width: 75px;\r\n  margin-left: 50%;\r\n  margin-top: 20px;\r\n}\r\n\r\n.sidenav {\r\n  height: 100%;\r\n  width: 200px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: #f6f6f6;\r\n  overflow-x: hidden;\r\n  padding-top: 20px;\r\n  box-shadow: 0px 0px 20px gray;\r\n}\r\n\r\n.sidenav-black {\r\n  height: 100%;\r\n  width: 200px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: #2E2E2E;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.sidenav-image {\r\n  width: 100px;\r\n  margin-left: 50px;\r\n  margin-bottom: 30px;\r\n  cursor: pointer\r\n}\r\n\r\n.sidenav-profile {\r\n  width: 100px;\r\n  margin-left: 50px;\r\n  margin-bottom: 15px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.sidenav .active-tab {\r\n  border-right: 4px solid cornflowerblue;\r\n  background: #ddd;\r\n}\r\n\r\n.sidenav-black .active-tab {\r\n  border-right: 4px solid #49AAE2;\r\n  border-left: 4px solid #49AAE2;\r\n  color: white !important;\r\n}\r\n\r\n.sidenav mat-list mat-list-item mat-icon {\r\n  padding-right: 10px;\r\n}\r\n\r\n.sidenav mat-list mat-list-item {\r\n  cursor: pointer;\r\n  color: gray;\r\n}\r\n\r\n.sidenav-black mat-list {\r\n  padding-top: 80px;\r\n}\r\n\r\n.sidenav-black mat-list mat-list-item mat-icon {\r\n  padding-right: 10px;\r\n}\r\n\r\n.sidenav-black mat-list mat-list-item {\r\n  cursor: pointer;\r\n  color: gray;\r\n}\r\n\r\n.sidenav-black mat-list mat-list-item:hover {\r\n  background: #404040;\r\n}\r\n\r\nimg:focus {\r\n  outline: none;\r\n  border: 0;\r\n}\r\n\r\n.mat-list-item-focus {\r\n  outline: none;\r\n}\r\n\r\n.content {\r\n  padding-left: 150px;\r\n  margin-top: 50px;\r\n  padding-top: 60px;\r\n}\r\n\r\n.content-inside {\r\n  width: 60%;\r\n  margin: auto;\r\n}\r\n\r\n.filler {\r\n  height: 100%;\r\n  background: white;\r\n}\r\n\r\n.greeting-header {\r\n  background: #3D3D3D;\r\n  border-bottom: 2px solid gray;\r\n  height: 60px;\r\n  margin-bottom: 20px;\r\n  margin-top: -20px;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\n.greeting-header h4 {\r\n  padding-top: 20px;\r\n  font-family: Arial;\r\n  font-style: normal;\r\n}\r\n\r\n.close-button {\r\n  color: gray;\r\n  width: 100%;\r\n  text-align: right;\r\n}\r\n\r\n.close-button mat-icon {\r\n  margin-top: 20px;\r\n  margin-right: 20px;\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loaded\">\r\n  <div class=\"navbar\">\r\n    <img src=\"../../assets/logo.png\" alt=\"logo\" class=\"logo\">\r\n  </div>\r\n  <div class=\"sidenav-black\">\r\n    <mat-list>\r\n      <div *ngFor=\"let option of navOptions; let i = index\">\r\n        <mat-list-item [routerLink]=option.link routerLinkActive=\"active-tab\" [routerLinkActiveOptions]=\"{exact: true}\"><mat-icon>{{option.icon}}</mat-icon>{{option.title}}</mat-list-item>\r\n      </div>\r\n      <div>\r\n        <mat-list-item (click)=\"onSignOut()\"><mat-icon>power_settings_new</mat-icon>Log uit</mat-list-item>\r\n      </div>\r\n    </mat-list>\r\n    <p style=\"position: absolute; bottom: 30px; margin-left: 25px; font-size: smaller; color: gray\">\r\n      AP Hogeschool - 2017\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"content\" [style]=\"contentStyle\">\r\n    <div class=\"content-inside\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n  <div class=\"filler\">\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loaded = false;
        this.showNav = true;
        this.contentStyle = '';
        this.navOptions = [
            { icon: 'home', title: 'Home', link: '/dashboard/' },
            { icon: 'play_circle_outline', title: 'Actieve sessies', link: '/dashboard/sessions/open' },
            { icon: 'history', title: 'Recente sessies', link: '/dashboard/sessions' },
            { icon: 'save', title: 'Opgeslagen sessies', link: '/dashboard/sessions/saved' },
            { icon: 'add', title: 'Nieuwe sessie', link: '/dashboard/sessions/new' },
            { icon: 'help_outline', title: 'Vragen', link: '/dashboard/questions' },
            { icon: 'account_circle', title: 'Deelnemers', link: '/dashboard/subjects' },
            { icon: 'info_outline', title: 'Handleiding', link: '/dashboard/guide' },
            { icon: 'settings', title: 'Instellingen', link: '/dashboard/settings' },
        ];
        this.handleAuth();
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('background-image');
        body.classList.add('white-background');
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.onSignOut = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    DashboardComponent.prototype.handleAuth = function () {
        var _this = this;
        this.authService.handleAuthentication()
            .subscribe(function (loggedIn) {
            _this.loaded = true;
            if (!loggedIn) {
                _this.router.navigate(['/login']);
            }
        });
    };
    DashboardComponent.prototype.closeNavBar = function () {
        this.showNav = false;
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/guide/guide.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2{\r\n    font-size:20px;\r\n}\r\nh3{\r\n    font-size:26px;\r\n}\r\n.GoTo{\r\n    text-decoration: none;\r\n    color: #49AAE2;\r\n}\r\n.GoTo:hover{\r\n    text-decoration: underline;\r\n}\r\n\r\n#last{\r\n    padding-bottom: 50px;;\r\n}\r\n\r\nh4{\r\n    font-size: 18px;\r\n}\r\n\r\nh5{\r\n    font-size:16px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/guide/guide.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Handleiding</h1>\r\n<p id=\"voorwoord\">Welkom op VYBE. Het platform van onderzoekers om makkelijk vragen te stellen.</p>\r\n<h2>Wat doen we?</h2>\r\n<p>\r\n    Op dit platform kan je als onderzoeker sessies starten met een aantal vragen. Deze sessie kan opengesteld worden voor personen die aan deze vragenlijst kunnen deelnemen. Met deze resultaten kan er onderzoek gedaan worden.\r\n</p>\r\n<h3>Een nieuwe sessie starten</h3>\r\n<p>Op deze pagine kan u een nieuwe sessie starten. Een sessie genereert automatisch een 5-cijferige code. Deze code moeten de patiënten invullen om aan de sessie te kunnen deelnemen.</p>\r\n<h2>Stap 1</h2>\r\n<p>U geeft de sessie een naam en optioneel een wachtwoord.</p>\r\n<h2>Stap 2</h2>\r\n<p>Hier kiest u de vragen die u wilt gebruiken in de sessie.</p>\r\n<h2>Stap 3</h2>\r\n<p>Hier kan u kiezen tussen drie verschillende schalen om antwoorden op te nemen. U kan ook kiezen of de deelnemers hun antwoorden te zien krijgen of niet.</p>\r\n<h4>De verschillende schalen:</h4>\r\n<h5>Gradient</h5>\r\n<img src=\"assets/gradientscale.png\" class=\"scales\" >\r\n<p>Dit is de gradient schaal. De laagste waarde hoort bij het rode deel. De hoogste waarde hoort bij het groene deel. Met een slider kan men een waarde selecteren.</p>\r\n<h5>Line</h5>\r\n<img src=\"assets/sliderscale.png\" class=\"scales\" >\r\n<p>Dit is de lijn schaal. De laagste waarde hoort bij de linkse kant en de hoogste waarde hoort bij de rechtse kant van de schaal. Met een slider kan men een waarde selecteren.</p>\r\n<h5>Draw</h5>\r\n<img src=\"assets/drawscale.png\" class=\"scales\" >\r\n<p>Dit is de teken schaal. Hierop kan men een lijn trekken om een vraag te beantwoorden. De laagste waarde hoort bij de linkse kant en de hoogste waarde hoort bij de rechtse kant van de schaal. </p>\r\n<h2>Stap 4</h2>\r\n<p>De sessie kan ook bekeken worden door andere onderzoekers. Bij deze stap kan u deze toevoegen per e-mail.</p>\r\n<h2>Stap 5</h2>\r\n<p>Hier ziet u informatie over de sessie die u juist heeft aangemaakt. U kan deze nu direct starten op opslaan om deze later te starten.</p>\r\n\r\n<a class=\"GoTo\" routerLink=\"/dashboard/sessions/new\">Maak hier een nieuwe sessie aan</a>\r\n\r\n<h3>Actieve sessies</h3>\r\n<p>In de lijst van actieve sessies kan u de sessies zien die momenteel nog open zijn. U kan daar op een sessie klikken en deze sluiten. In de lijst ziet u bij elke sessie een 5-letterige code, de patiënten die willen toetreden tot een\r\n    een sessie moeten deze code invullen op hun smartphone of tablet <span style=\"color:grey\">Bv AAAAA</span> </p>\r\n<a class=\"GoTo\" routerLink=\"/dashboard/open-sessions\">Ga naar actieve sessies</a>\r\n\r\n<h3>Recente sessies</h3>\r\n<p>In deze lijst kan u de recente sessies zien die afgelopen zijn. Zo kan u elke sessies opnieuw bekijken. In de lijst ziet u bij elke sessie een 5-letterige code, de patiënten die willen toetreden tot een\r\n        een sessie moeten deze code invullen op hun smartphone of tablet <span style=\"color:grey\">Bv AAAAA</span></p>\r\n\r\n<a class=\"GoTo\" routerLink=\"/dashboard/sessions\">Ga naar recente sessies</a>\r\n\r\n<h3>Opgeslagen Sessies</h3>\r\n<p>Hier kan u de sessies zien die opgeslagen zijn als concept. U moet deze sessies nog openen zodat deelnemers kunnen deelnemen. In de lijst ziet u bij elke sessie een 5-letterige code, de patiënten die willen toetreden tot een\r\n        een sessie moeten deze code invullen op hun smartphone of tablet <span style=\"color:grey\">Bv AAAAA</span></p>\r\n<a class=\"GoTo\" routerLink=\"/dashboard/saved-sessions\">Ga naar opgeslagen sessies</a>\r\n\r\n<h3>Vragen</h3>\r\n<p>Dit is een lijst met alle vragen. Deze vragen hebben elk hun positieve en negatieve waarde. In deze lijst kan ook gezocht worden. U kan hier ook nieuwe vragen aanmaken.</p>\r\n<h2>Een nieuwe vraag aanmaken</h2>\r\n<p>U kan hier de vraag invullen samen met hun hoogste en laagste waarde.</p>\r\n<a class=\"GoTo\" routerLink=\"/dashboard/questions\">Ga naar de lijst met vragen</a>\r\n\r\n<h3>Deelnemers</h3>\r\n<p>Hier ziet u een lijst met alle deelnemers die ooit aan een sessie hebben deelgenomen die u aangemaakt hebt. Hier ziet u de deelnemers hun naam, leeftijd en ziekte.</p>\r\n<a class=\"GoTo\" routerLink=\"/dashboard/subjects\">Ga naar deelnemers</a>\r\n\r\n<h3>Instellingen</h3>\r\n<p>Op deze pagina kan u uw gegevens veranderen, uw paswoord resetten en onderzoekers uitnodigen om een account aan te maken.</p>\r\n<h2>Onderzoekers uitnodigen</h2>\r\n<p>In het veld vult u een emailadres in en daarna drukt u op Enter. U kan meerdere e-mailadressen in de lijst zetten om daarna een uitnodiging te verzenden.</p>\r\n<a class=\"GoTo\" id=\"last\" routerLink=\"/dashboard/settings\">Ga naar instellingen</a>"

/***/ }),

/***/ "../../../../../src/app/dashboard/guide/guide.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuideComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GuideComponent = (function () {
    function GuideComponent(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
    }
    GuideComponent.prototype.ngOnInit = function () { };
    return GuideComponent;
}());
GuideComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-guide',
        template: __webpack_require__("../../../../../src/app/dashboard/guide/guide.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/guide/guide.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], GuideComponent);

var _a, _b;
//# sourceMappingURL=guide.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Error 404</h1>\r\n  <h5>Pagina niet gevonden</h5>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../src/app/dashboard/not-found/not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/not-found/not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/open-sessions/open-sessions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "th {\r\n    padding-right: 150px;\r\n  }\r\n  \r\n  td {\r\n    padding-top: 15px;\r\n  }\r\n  \r\n  td:hover {\r\n    cursor: pointer;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/open-sessions/open-sessions.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Actieve sessies</h1>\r\n<mat-form-field style=\"width: 100%\">\r\n  <span matPrefix><mat-icon>search</mat-icon> &nbsp;</span>\r\n  <input type=\"text\" matInput #searchBar (input)=\"onChange($event)\">\r\n  <mat-icon matSuffix style=\"cursor: pointer; color: gray\" (click)=\"clearFilter()\">clear</mat-icon>\r\n</mat-form-field>\r\n<table>\r\n  <tr>\r\n    <th>Naam</th>\r\n    <th>Code</th>\r\n    <th>Paswoord</th>\r\n    <th>Start datum</th>\r\n    <th></th>\r\n  </tr>\r\n  <br>\r\n  <tr *ngFor=\"let session of displaySessions\" (click)=\"goToSessionDetail(session)\">\r\n    <td>{{session.name}}</td>\r\n    <td>{{session.code}}</td>\r\n    <td *ngIf=\"session.password\">{{session.password}}</td>\r\n    <td *ngIf=\"!session.password\">No password set</td>\r\n    <td *ngIf=\"session.startDate\">{{session.startDate}}</td>\r\n    <td><mat-icon>chevron_right</mat-icon></td>\r\n  </tr>\r\n</table>\r\n<p *ngIf=\"sessions.length == 0\" class=\"info\">Er zijn momenteel geen actieve sessies</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/open-sessions/open-sessions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenSessionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OpenSessionsComponent = (function () {
    function OpenSessionsComponent(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
        this.sessions = [];
        this.displaySessions = [];
    }
    OpenSessionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionService.getOpenSessions()
            .subscribe(function (res) {
            _this.sessions = res;
            _this.displaySessions = _this.sessions.slice();
        });
    };
    OpenSessionsComponent.prototype.filterList = function (filterString) {
        this.displaySessions = [];
        for (var i = 0; i < this.sessions.length; i++) {
            if (this.sessions[i].name.includes(filterString)) {
                this.displaySessions.push(this.sessions[i]);
            }
        }
    };
    OpenSessionsComponent.prototype.clearFilter = function () {
        this.searchBar.nativeElement.value = '';
        this.displaySessions = this.sessions.slice();
    };
    OpenSessionsComponent.prototype.onChange = function (event) {
        this.filterList(event.srcElement.value);
    };
    OpenSessionsComponent.prototype.goToSessionDetail = function (session) {
        var route = 'dashboard/sessions/' + session.sessionID;
        this.router.navigate([route]);
    };
    return OpenSessionsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('searchBar'),
    __metadata("design:type", Object)
], OpenSessionsComponent.prototype, "searchBar", void 0);
OpenSessionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-open-sessions',
        template: __webpack_require__("../../../../../src/app/dashboard/open-sessions/open-sessions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/open-sessions/open-sessions.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], OpenSessionsComponent);

var _a, _b;
//# sourceMappingURL=open-sessions.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/participants/participants.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "th {\r\n  padding-right: 150px;\r\n}\r\n\r\nth:first-child {\r\n  padding-right: 50px;\r\n}\r\n\r\nth:nth-last-child(2) {\r\n  padding-right: 10px;\r\n}\r\n\r\ntd {\r\n  padding-top: 15px;\r\n}\r\n\r\ntd:last-child {\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/participants/participants.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Deelnemers</h1>\r\n<br>\r\n<br>\r\n<table>\r\n  <tr>\r\n    <th></th>\r\n    <th>Naam</th>\r\n    <th>Leeftijd</th>\r\n    <th>Ziekte</th>\r\n    <th></th>\r\n  </tr>\r\n  <br>\r\n  <tr *ngFor=\"let subject of subjects\">\r\n    <td><mat-checkbox (click)=\"toggleSubject(subject.subjectID)\"></mat-checkbox></td>\r\n    <td>{{subject.firstName}} {{subject.lastName}}</td>\r\n    <td>{{getAge(subject.birthDate)}}</td>\r\n    <td>{{subject.illness}}</td>\r\n    <td (click)=\"selectSubject(subject)\"><mat-icon>chevron_right</mat-icon></td>\r\n  </tr>\r\n</table>\r\n<p *ngIf=\"subjects.length == 0\" class=\"info\">Er zijn momenteel geen personen weer te geven.</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/participants/participants.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_researcher_service__ = __webpack_require__("../../../../../src/services/researcher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParticipantsComponent = (function () {
    function ParticipantsComponent(researcherService, router) {
        this.researcherService = researcherService;
        this.router = router;
        this.subjects = [];
        this.selectedSubjectIds = [];
    }
    ParticipantsComponent.prototype.ngOnInit = function () {
        this.retrieveSubjects();
    };
    ParticipantsComponent.prototype.getAge = function (birthDateString) {
        var birthDateStringSplit = birthDateString.split('-'); // [0]=day [1]=month [2]=year
        var birthDate = new Date(+birthDateStringSplit[2], +birthDateStringSplit[1], +birthDateStringSplit[0]);
        return new Date().getFullYear() - birthDate.getFullYear();
    };
    ParticipantsComponent.prototype.retrieveSubjects = function () {
        var _this = this;
        this.researcherService.getSubjectsFromResearcher()
            .subscribe(function (res) {
            _this.subjects = res;
        });
    };
    ParticipantsComponent.prototype.toggleSubject = function (subjectId) {
        var index = this.selectedSubjectIds.indexOf(subjectId);
        if (index === -1) {
            this.selectedSubjectIds.push(subjectId);
        }
        else {
            this.selectedSubjectIds.splice(index, 1);
        }
    };
    ParticipantsComponent.prototype.buttonIsDiabled = function () {
        return this.selectedSubjectIds.length === 0;
    };
    ParticipantsComponent.prototype.selectSubject = function (subject, event) {
        var route = 'dashboard/subjects/' + subject.subjectID + '/answers';
        this.router.navigate([route]);
    };
    return ParticipantsComponent;
}());
ParticipantsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-participants',
        template: __webpack_require__("../../../../../src/app/dashboard/participants/participants.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/participants/participants.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_researcher_service__["a" /* ResearcherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_researcher_service__["a" /* ResearcherService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ParticipantsComponent);

var _a, _b;
//# sourceMappingURL=participants.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/questions/questions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "th {\r\n  padding-right: 200px;\r\n}\r\n\r\nth:first-child {\r\n  padding-right: 50px;\r\n}\r\n\r\nth:nth-child(2) {\r\n  padding-right: 250px;\r\n}\r\n\r\ntd {\r\n  padding-top: 15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/questions/questions.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Vragen</h1>\r\n<button mat-button color=\"primary\" (click)=\"openNewQuestionDialog()\"> <mat-icon>add</mat-icon>&nbsp;Maak een nieuwe vraag aan</button>\r\n<br>\r\n<br>\r\n<mat-form-field style=\"width: 100%\">\r\n  <span matPrefix><mat-icon>search</mat-icon> &nbsp;</span>\r\n  <input type=\"text\" matInput #searchBar (input)=\"onChange($event)\">\r\n  <mat-icon matSuffix style=\"cursor: pointer; color: gray\" (click)=\"clearFilter()\">clear</mat-icon>\r\n</mat-form-field>\r\n<table>\r\n  <tr>\r\n    <th>ID</th>\r\n    <th>Vraag</th>\r\n    <th>Hoogste waarde</th>\r\n    <th>Laagste waarde</th>\r\n  </tr>\r\n  <br>\r\n  <tr *ngFor=\"let question of displayQuestions\">\r\n    <td>{{question.questionID}}</td>\r\n    <td>{{question.questionText}}</td>\r\n    <td>{{question.upperValue}}</td>\r\n    <td>{{question.lowerValue}}</td>\r\n  </tr>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/questions/questions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_question_service__ = __webpack_require__("../../../../../src/services/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sessions_session_edit_new_question_modal_new_question_modal_component__ = __webpack_require__("../../../../../src/app/dashboard/sessions/session-edit/new-question-modal/new-question-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionsComponent = (function () {
    function QuestionsComponent(questionService, dialog) {
        this.questionService = questionService;
        this.dialog = dialog;
        this.questions = [];
        this.displayQuestions = [];
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        this.getQuestions();
    };
    QuestionsComponent.prototype.getQuestions = function () {
        var _this = this;
        this.questionService.getQuestions()
            .subscribe(function (res) {
            _this.questions = res;
            _this.clearFilter();
        });
    };
    QuestionsComponent.prototype.openNewQuestionDialog = function () {
        var _this = this;
        this.newQuestionDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__sessions_session_edit_new_question_modal_new_question_modal_component__["a" /* NewQuestionModalComponent */]);
        this.newQuestionDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.questionService.createNewQuestion(result)
                    .subscribe(function (res) {
                    _this.questions.push(res);
                    _this.clearFilter();
                });
            }
        });
    };
    QuestionsComponent.prototype.filterList = function (filterString) {
        this.displayQuestions = [];
        for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i].questionText.includes(filterString)) {
                this.displayQuestions.push(this.questions[i]);
            }
        }
    };
    QuestionsComponent.prototype.clearFilter = function () {
        this.searchBar.nativeElement.value = '';
        this.displayQuestions = this.questions.slice();
    };
    QuestionsComponent.prototype.onChange = function (event) {
        this.filterList(event.srcElement.value);
    };
    return QuestionsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('searchBar'),
    __metadata("design:type", Object)
], QuestionsComponent.prototype, "searchBar", void 0);
QuestionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-questions',
        template: __webpack_require__("../../../../../src/app/dashboard/questions/questions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/questions/questions.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_question_service__["a" /* QuestionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatDialog */]) === "function" && _b || Object])
], QuestionsComponent);

var _a, _b;
//# sourceMappingURL=questions.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/saved-sessions/saved-sessions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "th {\r\n  padding-right: 200px;\r\n}\r\n\r\ntd {\r\n  padding-top: 15px;\r\n}\r\n\r\ntd:hover {\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/saved-sessions/saved-sessions.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Opgeslagen sessies</h1>\r\n<mat-form-field style=\"width: 100%\">\r\n  <span matPrefix><mat-icon>search</mat-icon> &nbsp;</span>\r\n  <input type=\"text\" matInput #searchBar (input)=\"onChange($event)\">\r\n  <mat-icon matSuffix style=\"cursor: pointer; color: gray\" (click)=\"clearFilter()\">clear</mat-icon>\r\n</mat-form-field>\r\n<table>\r\n  <tr>\r\n    <th>Naam</th>\r\n    <th>Code</th>\r\n    <th>Paswoord</th>\r\n    <th></th>\r\n  </tr>\r\n  <br>\r\n  <tr *ngFor=\"let session of displaySessions\" (click)=\"goToSessionDetail(session)\">\r\n    <td>{{session.name}}</td>\r\n    <td>{{session.code}}</td>\r\n    <td *ngIf=\"session.password\">{{session.password}}</td>\r\n    <td *ngIf=\"!session.password\">Geen paswoord toegekend</td>\r\n    <td><mat-icon>chevron_right</mat-icon></td>\r\n  </tr>\r\n</table>\r\n<p *ngIf=\"sessions.length == 0\" class=\"info\">Er zijn momenteel geen sessies opgeslagen.</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/saved-sessions/saved-sessions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavedSessionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SavedSessionsComponent = (function () {
    function SavedSessionsComponent(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
        this.sessions = [];
        this.displaySessions = [];
    }
    SavedSessionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionService.getSavedSessions()
            .subscribe(function (res) {
            _this.sessions = res;
            _this.displaySessions = _this.sessions.slice();
        });
    };
    SavedSessionsComponent.prototype.filterList = function (filterString) {
        this.displaySessions = [];
        for (var i = 0; i < this.sessions.length; i++) {
            if (this.sessions[i].name.includes(filterString)) {
                this.displaySessions.push(this.sessions[i]);
            }
        }
    };
    SavedSessionsComponent.prototype.clearFilter = function () {
        this.searchBar.nativeElement.value = '';
        this.displaySessions = this.sessions.slice();
    };
    SavedSessionsComponent.prototype.onChange = function (event) {
        this.filterList(event.srcElement.value);
    };
    SavedSessionsComponent.prototype.goToSessionDetail = function (session) {
        var route = 'dashboard/sessions/' + session.sessionID;
        this.router.navigate([route]);
    };
    return SavedSessionsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('searchBar'),
    __metadata("design:type", Object)
], SavedSessionsComponent.prototype, "searchBar", void 0);
SavedSessionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-saved-sessions',
        template: __webpack_require__("../../../../../src/app/dashboard/saved-sessions/saved-sessions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/saved-sessions/saved-sessions.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SavedSessionsComponent);

var _a, _b;
//# sourceMappingURL=saved-sessions.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/sessions/new-session/new-session.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-form-field {\r\n  padding-right: 15px\r\n}\r\n\r\n.warning-message {\r\n  color: red;\r\n  font-style: italic;\r\n}\r\n\r\n.info-message {\r\n  color: gray;\r\n  font-style: italic;\r\n}\r\n\r\n.scales {\r\n  height: 20px;\r\n  vertical-align: middle;\r\n  padding-right: 20px;\r\n  left:2px;\r\n}\r\n\r\nh4{\r\n  font-size: 18px;\r\n}\r\n\r\nh5{\r\n  font-size:16px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/sessions/new-session/new-session.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-horizontal-stepper linear=\"true\">\r\n  <!--First step-->\r\n  <mat-step [stepControl]=\"firstFormGroup\">\r\n    <form [formGroup]=\"firstFormGroup\">\r\n      <ng-template matStepLabel>Naam</ng-template>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Naam\" formControlName=\"firstCtrl\" required (input)=\"setName($event)\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Paswoord (kan leeg zijn)\" formControlName=\"firstCtrl\"(input)=\"setPassword($event)\">\r\n      </mat-form-field>\r\n      <div>\r\n        <button mat-button matStepperNext>Volgende</button>\r\n      </div>\r\n    </form>\r\n  </mat-step>\r\n\r\n  <!--Second step-->\r\n  <mat-step [stepControl]=\"secondFormGroup\">\r\n    <form [formGroup]=\"secondFormGroup\">\r\n      <ng-template matStepLabel>Vragen selecteren</ng-template>\r\n      <div style=\"text-align: center;\" *ngIf=\"!questionsLoaded\">\r\n        <h2>Vragen laden...</h2>\r\n        <br>\r\n        <br>\r\n        <div style=\"max-width: 75px; margin: auto\">\r\n          <mat-spinner></mat-spinner>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"questionsLoaded\">\r\n        <mat-form-field style=\"width: 100%\">\r\n          <span matPrefix><mat-icon>search</mat-icon> &nbsp;</span>\r\n          <input type=\"text\" matInput #searchBar (input)=\"onChange($event)\">\r\n          <mat-icon matSuffix style=\"cursor: pointer; color: gray\" (click)=\"clearFilter()\">clear</mat-icon>\r\n        </mat-form-field>\r\n        <mat-list>\r\n          <h3 mat-subheader>Geselecteerde vragen</h3>\r\n          <mat-list-item *ngIf=\"selectedQuestions.length==0\">\r\n            <p class=\"warning-message\">Geen vragen geselecteerd</p>\r\n          </mat-list-item>\r\n          <mat-list-item *ngFor=\"let question of selectedQuestions\">\r\n            <mat-icon style=\"cursor: pointer\" (click)=\"removeQuestion(question)\">remove_circle_outline</mat-icon><span style=\"font-size: larger; padding-left: 10px\">{{question.questionText}}</span><span style=\"padding-left: 30px; color: gray\">{{question.upperValue}} - {{question.lowerValue}}</span>\r\n          </mat-list-item>\r\n        </mat-list>\r\n        <mat-list>\r\n          <h3 mat-subheader>Vragen</h3>\r\n          <mat-list-item *ngFor=\"let question of displayQuestions\">\r\n            <!--<mat-checkbox color=\"primary\" (click)=\"toggleSelected(question)\"><span style=\"font-size: larger\">{{question.questionText}}</span></mat-checkbox><span style=\"padding-left: 30px; color: gray\">{{question.upperValue}} - {{question.lowerValue}}</span>-->\r\n            <mat-icon style=\"cursor: pointer\" (click)=\"selectQuestion(question)\">add_circle_outline</mat-icon><span style=\"font-size: larger; padding-left: 10px\">{{question.questionText}}</span><span style=\"padding-left: 30px; color: gray\">{{question.upperValue}} - {{question.lowerValue}}</span>\r\n          </mat-list-item>\r\n        </mat-list>\r\n        <div *ngIf=\"newQuestion\">\r\n          <form (ngSubmit)=\"onSubmitNewQuestion(f)\" #f=\"ngForm\">\r\n            <table><tr>\r\n              <td><mat-form-field>\r\n                <input matInput placeholder=\"Vraag\" name=\"newQuestionText\" ngModel required>\r\n              </mat-form-field></td>\r\n              <td><mat-form-field>\r\n                <input matInput placeholder=\"Hoogste waarde\" name=\"newQuestionUpperValue\" ngModel required>\r\n              </mat-form-field></td>\r\n              <td><mat-form-field>\r\n                <input matInput placeholder=\"Laagste waarde\" name=\"newQuestionLowerValue\" ngModel required>\r\n              </mat-form-field></td>\r\n            </tr></table>\r\n            <p style=\"color: red; margin-top: -5px\" *ngIf=\"showNewQuestionError\"><i>Vul alle velden in.</i></p>\r\n            <button mat-button color=\"secondary\" (click)=\"openQuestionForm()\"><mat-icon>cancel</mat-icon>&nbsp;Annuleren</button>\r\n            <button mat-button color=\"primary\" type=\"submit\"> <mat-icon>add</mat-icon>&nbsp;Toevoegen</button>\r\n          </form>\r\n        </div>\r\n        <div *ngIf=\"!newQuestion\">\r\n          <br>\r\n          <button mat-button color=\"primary\" (click)=\"openQuestionForm()\"> <mat-icon>add circle outline</mat-icon>&nbsp;Nieuwe vraag toevoegen</button>\r\n        </div>\r\n        <br>\r\n        <div>\r\n          <button mat-button matStepperPrevious [disabled]=\"newQuestion\">Terug</button>\r\n          <button mat-button matStepperNext [disabled]=\"newQuestion\">Volgende</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </mat-step>\r\n\r\n  <!--Third step-->\r\n  <mat-step [stepControl]=\"thirdFormGroup\">\r\n    <form [formGroup]=\"thirdFormGroup\">\r\n      <ng-template matStepLabel>Selecteer VAS schaal type</ng-template>\r\n      <mat-form-field>\r\n        <mat-select [(value)]=\"selectedScaleType\">\r\n<<<<<<< HEAD\r\n          <mat-option value=\"gradient\">Gradient</mat-option>\r\n          <mat-option value=\"inverse\">Inverse gradient</mat-option>\r\n          <mat-option value=\"line\">Line</mat-option>\r\n          <mat-option value=\"draw\">Draw</mat-option>\r\n=======\r\n          <mat-option value=\"gradient\"><img src=\"assets/gradientscale.png\" class=\"scales\">Gradient</mat-option>\r\n          <mat-option value=\"line\"><img src=\"assets/sliderscale.png\" class=\"scales\" >Line</mat-option>\r\n          <mat-option value=\"draw\"><img src=\"assets/drawscale.png\" class=\"scales\" >Draw</mat-option>\r\n>>>>>>> 71102f9d631f804e47529698b9a5bb62d6f6afbc\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-checkbox (change)=\"togglePercentage()\">Geef percentage weer</mat-checkbox>\r\n        <h4>De verschillende schalen:</h4>\r\n          <h5>Gradient</h5>\r\n            <img src=\"assets/gradientscale.png\" class=\"scales\" >\r\n              <p>Dit is de gradient schaal. De laagste waarde hoort bij het rode deel. De hoogste waarde hoort bij het groene deel. Met een slider kan men een waarde selecteren.</p>\r\n          <h5>Line</h5>\r\n            <img src=\"assets/sliderscale.png\" class=\"scales\" >\r\n              <p>Dit is de lijn schaal. De laagste waarde hoort bij de linkse kant en de hoogste waarde hoort bij de rechtse kant van de schaal. Met een slider kan men een waarde selecteren.</p>\r\n          <h5>Draw</h5>\r\n            <img src=\"assets/drawscale.png\" class=\"scales\" >\r\n              <p>Dit is de teken schaal. Hierop kan men een lijn trekken om een vraag te beantwoorden. De laagste waarde hoort bij de linkse kant en de hoogste waarde hoort bij de rechtse kant van de schaal. </p>\r\n      <br>\r\n      <br>\r\n      <div>\r\n        <button mat-button matStepperPrevious>Terug</button>\r\n        <button mat-button matStepperNext>Volgende</button>\r\n      </div>\r\n    </form>\r\n  </mat-step>\r\n\r\n  <!--Fourth step-->\r\n  <mat-step [stepControl]=\"fourthFormGroup\">\r\n    <mat-form-field style=\"width: 100%\">\r\n      <span matPrefix><mat-icon>mail</mat-icon> &nbsp;</span>\r\n      <input type=\"email\" matInput (keydown)=\"onKeyDown($event)\" #addResearcherBar placeholder=\"Search researchers by email\">\r\n      <mat-icon matSuffix style=\"cursor: pointer; color: gray\" (click)=\"addResearcher()\">add</mat-icon>\r\n    </mat-form-field>\r\n    <p class=\"warning-message\" *ngIf=\"researcherNotFoundError\">Er is geen onderzoeker geregistreerd met dit email adres.</p>\r\n    <form [formGroup]=\"thirdFormGroup\">\r\n      <ng-template matStepLabel>Onderzoeker toevoegen</ng-template>\r\n      <mat-list *ngIf=\"researchers.length>0\">\r\n        <h3 mat-subheader>Onderzoekers</h3>\r\n        <mat-list-item *ngFor=\"let researcher of researchers; let i = index\">\r\n          <mat-icon style=\"color: gray; cursor: pointer\" (click)=\"removeResearcherFromList(i)\">remove_circle_outline</mat-icon><span style=\"padding-left: 10px\">{{researcher.firstName}} {{researcher.lastName}}</span><span style=\"padding-left: 20px; color: gray;\">{{researcher.email}}</span><mat-checkbox style=\"margin-left: 25px\" (change)=\"onToggleAdmin($event, researcher)\">Beheerder</mat-checkbox>\r\n        </mat-list-item>\r\n      </mat-list>\r\n      <p class=\"info-message\" *ngIf=\"researchers.length==0\">Geen andere onderzoekers toegevoegd aan deze sessie.</p>\r\n      <br>\r\n      <div>\r\n        <button mat-button matStepperPrevious>Terug</button>\r\n        <button mat-button matStepperNext>Volgende</button>\r\n      </div>\r\n    </form>\r\n  </mat-step>\r\n\r\n  <!--Start session-->\r\n  <mat-step>\r\n    <ng-template matStepLabel>Sessie starten</ng-template>\r\n    <mat-list>\r\n      <h3 mat-subheader>Naam</h3>\r\n      <mat-list-item>\r\n        <span style=\"padding-left: 10px\"><h3>{{sessionName}}</h3></span>\r\n      </mat-list-item>\r\n    </mat-list>\r\n    <mat-list>\r\n      <h3 mat-subheader>Paswoord</h3>\r\n      <mat-list-item>\r\n        <span style=\"padding-left: 10px\" *ngIf=\"sessionPassword !== ''\">{{sessionPassword}}</span>\r\n        <span style=\"padding-left: 10px\" class=\"info-message\" *ngIf=\"sessionPassword === ''\">Geen passwoord toegekend</span>\r\n      </mat-list-item>\r\n    </mat-list>\r\n    <mat-list>\r\n      <h3 mat-subheader>Schaal type</h3>\r\n      <mat-list-item>\r\n        <span style=\"padding-left: 10px\">{{selectedScaleType}}</span>\r\n      </mat-list-item>\r\n    </mat-list>\r\n    <mat-list>\r\n      <h3 mat-subheader>Geef percentage weer</h3>\r\n      <mat-list-item>\r\n        <span style=\"padding-left: 10px\">{{showPercentage}}</span>\r\n      </mat-list-item>\r\n    </mat-list>\r\n    <mat-list>\r\n      <h3 mat-subheader>Geselecteerde vragen ({{selectedQuestions.length}})</h3>\r\n      <mat-list-item *ngIf=\"selectedQuestions.length==0\">\r\n        <p style=\"color: red\"><i>Geen vragen geselecteerd</i></p>\r\n      </mat-list-item>\r\n      <mat-list-item *ngFor=\"let question of selectedQuestions\">\r\n        <span style=\"padding-left: 10px\">{{question.questionText}}</span><span style=\"padding-left: 30px; color: gray\">{{question.upperValue}} - {{question.lowerValue}}</span>\r\n      </mat-list-item>\r\n    </mat-list>\r\n    <mat-list *ngIf=\"researchers.length>0\">\r\n      <h3 mat-subheader>Onderzoekers ({{researchers.length}})</h3>\r\n      <mat-list-item *ngFor=\"let researcher of researchers; let i = index\">\r\n        <span style=\"padding-left: 10px\">{{researcher.firstName}} {{researcher.lastName}}</span><span style=\"padding-left: 20px; color: gray;\">{{researcher.email}}</span>\r\n      </mat-list-item>\r\n    </mat-list>\r\n    <br>\r\n    <div>\r\n      <button mat-button (click)=\"startSession()\"><mat-icon>check</mat-icon> Sessie starten</button>\r\n      <button mat-button (click)=\"saveSession()\"><mat-icon>save</mat-icon> Sessie opslaan</button>\r\n    </div>\r\n    <br>\r\n    <div>\r\n      <button mat-button matStepperPrevious>Terug</button>\r\n    </div>\r\n  </mat-step>\r\n</mat-horizontal-stepper>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/sessions/new-session/new-session.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_question_service__ = __webpack_require__("../../../../../src/services/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_researcher_service__ = __webpack_require__("../../../../../src/services/researcher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewSessionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewSessionComponent = (function () {
    function NewSessionComponent(formBuilder, router, questionService, researcherService, sessionService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.questionService = questionService;
        this.researcherService = researcherService;
        this.sessionService = sessionService;
        this.sessionPassword = '';
        this.questions = [];
        this.questionsLoaded = false;
        this.displayQuestions = [];
        this.selectedQuestions = [];
        this.researchers = [];
        this.adminIDs = [];
        this.researcherNotFoundError = false;
        this.newQuestion = false;
        this.showNewQuestionError = false;
        this.selectedScaleType = 'gradient';
        this.showPercentage = false;
    }
    NewSessionComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this.formBuilder.group({
            firstCtrl: ['']
        });
        this.secondFormGroup = this.formBuilder.group({
            secondCtrl: ['']
        });
        this.thirdFormGroup = this.formBuilder.group({
            thirdCtrl: ['']
        });
        this.fourthFormGroup = this.formBuilder.group({
            thirdCtrl: ['']
        });
        this.retrieveQuestions();
    };
    NewSessionComponent.prototype.retrieveQuestions = function () {
        var _this = this;
        this.questionService.getQuestions()
            .subscribe(function (res) {
            _this.questions = res;
            _this.displayQuestions = _this.questions.slice();
            _this.questionsLoaded = true;
        });
    };
    NewSessionComponent.prototype.setName = function (event) {
        this.sessionName = event.srcElement.value;
    };
    NewSessionComponent.prototype.setPassword = function (event) {
        this.sessionPassword = event.srcElement.value;
    };
    NewSessionComponent.prototype.selectQuestion = function (question) {
        this.selectedQuestions.push(question);
        for (var i = 0; i < this.questions.length; i++) {
            if (question.questionID === this.questions[i].questionID) {
                this.questions.splice(i, 1);
            }
        }
        this.clearFilter();
    };
    NewSessionComponent.prototype.removeQuestion = function (question) {
        this.questions.push(question);
        for (var i = 0; i < this.selectedQuestions.length; i++) {
            if (question.questionID === this.selectedQuestions[i].questionID) {
                this.selectedQuestions.splice(i, 1);
            }
        }
        this.displayQuestions = this.questions.slice();
    };
    NewSessionComponent.prototype.addNewQuestion = function (questionText, upperValue, lowerValue) {
        var _this = this;
        this.questionService.createNewQuestion({
            questionText: questionText,
            upperValue: upperValue,
            lowerValue: lowerValue
        })
            .subscribe(function (res) {
            var response = res;
            _this.questions.push(response);
            _this.newQuestion = false;
            _this.clearFilter();
        });
    };
    NewSessionComponent.prototype.openQuestionForm = function () {
        this.newQuestion = !this.newQuestion;
        this.showNewQuestionError = false;
    };
    NewSessionComponent.prototype.onSubmitNewQuestion = function (form) {
        console.log(form);
        if (form.valid) {
            this.addNewQuestion(form.value.newQuestionText, form.value.newQuestionUpperValue, form.value.newQuestionLowerValue);
            this.showNewQuestionError = false;
        }
        else {
            this.showNewQuestionError = true;
        }
    };
    NewSessionComponent.prototype.togglePercentage = function () {
        this.showPercentage = !this.showPercentage;
    };
    NewSessionComponent.prototype.filterList = function (filterString) {
        this.displayQuestions = [];
        for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i].questionText.includes(filterString)) {
                this.displayQuestions.push(this.questions[i]);
            }
        }
    };
    NewSessionComponent.prototype.clearFilter = function () {
        this.searchBar.nativeElement.value = '';
        this.displayQuestions = this.questions.slice();
    };
    NewSessionComponent.prototype.onChange = function (event) {
        this.filterList(event.srcElement.value);
    };
    NewSessionComponent.prototype.onKeyDown = function (event) {
        if (event.key === 'Enter') {
            this.addResearcher();
        }
    };
    NewSessionComponent.prototype.addResearcher = function () {
        this.getResearcherFromDatabase(this.addResearcherBar.nativeElement.value);
        this.addResearcherBar.nativeElement.value = '';
    };
    NewSessionComponent.prototype.onToggleAdmin = function (event, researcher) {
        if (event.checked) {
            this.adminIDs.push(researcher.researcherID);
        }
        else {
            var index = this.adminIDs.lastIndexOf(researcher.researcherID);
            this.adminIDs.splice(index, 1);
        }
        console.log(this.adminIDs);
    };
    NewSessionComponent.prototype.getResearcherFromDatabase = function (email) {
        var _this = this;
        this.researcherService.getResearcherByMail(email)
            .subscribe(function (res) {
            _this.researchers.push(res);
        });
    };
    NewSessionComponent.prototype.removeResearcherFromList = function (index) {
        this.researchers.splice(index, 1);
    };
    NewSessionComponent.prototype.getSessionResult = function () {
        var questionIDs = [];
        for (var i = 0; i < this.selectedQuestions.length; i++) {
            questionIDs.push(this.selectedQuestions[i].questionID);
        }
        if (questionIDs.length === 0) {
            return;
        }
        var researcherIDs = [];
        for (var i = 0; i < this.researchers.length; i++) {
            researcherIDs.push(this.researchers[i].researcherID);
        }
        var result = {
            name: this.sessionName,
            password: this.sessionPassword,
            scaleType: this.selectedScaleType,
            showPercentage: this.showPercentage,
            questionIDs: questionIDs,
            researcherIDs: researcherIDs,
            adminIDs: this.adminIDs,
            isConcept: false
        };
        return result;
    };
    NewSessionComponent.prototype.startSession = function () {
        var result = this.getSessionResult();
        this.postResult(result);
    };
    NewSessionComponent.prototype.saveSession = function () {
        var result = this.getSessionResult();
        result.isConcept = true;
        this.postResult(result);
    };
    NewSessionComponent.prototype.postResult = function (result) {
        var _this = this;
        if (result) {
            this.sessionService.createNewSession(result)
                .subscribe(function (res) {
                console.log(res);
                var path = '/dashboard/sessions/' + res.sessionID;
                _this.router.navigate([path]);
            });
        }
    };
    return NewSessionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('searchBar'),
    __metadata("design:type", Object)
], NewSessionComponent.prototype, "searchBar", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('addResearcherBar'),
    __metadata("design:type", Object)
], NewSessionComponent.prototype, "addResearcherBar", void 0);
NewSessionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-new-session',
        template: __webpack_require__("../../../../../src/app/dashboard/sessions/new-session/new-session.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/sessions/new-session/new-session.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_question_service__["a" /* QuestionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_researcher_service__["a" /* ResearcherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_researcher_service__["a" /* ResearcherService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_session_service__["a" /* SessionService */]) === "function" && _e || Object])
], NewSessionComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=new-session.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/sessions/session-detail/add-researcher-modal/add-researcher-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/sessions/session-detail/add-researcher-modal/add-researcher-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n  <h2 mat-dialog-title>Onderzoeker toevoegen</h2>\r\n  <mat-dialog-content>Geef het email adres in van de onderzoeker die u wenst toe te voegen.</mat-dialog-content>\r\n  <br>\r\n  <mat-form-field style=\"width: 100%\">\r\n    <input matInput placeholder=\"Email\" ngModel email name=\"email\">\r\n  </mat-form-field>\r\n  <mat-radio-group ngModel name=\"isAdmin\">\r\n    <mat-radio-button checked=\"true\" value=true>Beheerder</mat-radio-button>\r\n    <mat-radio-button value=false style=\"margin-left: 25px\">Volger</mat-radio-button>\r\n  </mat-radio-group>\r\n  <mat-dialog-actions>\r\n    <button mat-button mat-dialog-close>Annuleren</button>\r\n    <button mat-button type=\"submit\">Toevoegen</button>\r\n  </mat-dialog-actions>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/sessions/session-detail/add-researcher-modal/add-researcher-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddResearcherModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddResearcherModalComponent = (function () {
    function AddResearcherModalComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    AddResearcherModalComponent.prototype.ngOnInit = function () {
    };
    AddResearcherModalComponent.prototype.onSubmit = function (form) {
        console.log(form);
        this.dialogRef.close({
            email: form.controls.email.value,
            isAdmin: form.controls.isAdmin.value
        });
    };
    return AddResearcherModalComponent;
}());
AddResearcherModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-add-researcher-modal',
        template: __webpack_require__("../../../../../src/app/dashboard/sessions/session-detail/add-researcher-modal/add-researcher-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/sessions/session-detail/add-researcher-modal/add-researcher-modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatDialogRef */]) === "function" && _a || Object])
], AddResearcherModalComponent);

var _a;
//# sourceMappingURL=add-researcher-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/sessions/session-detail/copy-session-modal/copy-session-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/sessions/session-detail/copy-session-modal/copy-session-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n  <h2 mat-dialog-title>Sessie kopiëren</h2>\r\n  <mat-dialog-content>Geef een naam in voor de nieuwe gekopiëerde sessie.</mat-dialog-content>\r\n  <br>\r\n  <mat-form-field style=\"width: 100%\">\r\n    <input matInput placeholder=\"Name\" ngModel name=\"name\">\r\n  </mat-form-field>\r\n  <br>\r\n  <mat-checkbox ngModel name=\"copyResearchers\">Volgers onthouden</mat-checkbox>\r\n  <br>\r\n  <mat-dialog-actions>\r\n    <button mat-button mat-dialog-close>Annuleren</button>\r\n    <button mat-button type=\"submit\">Kopiëren</button>\r\n  </mat-dialog-actions>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/sessions/session-detail/copy-session-modal/copy-session-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CopySessionModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CopySessionModalComponent = (function () {
    function CopySessionModalComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    CopySessionModalComponent.prototype.ngOnInit = function () {
    };
    CopySessionModalComponent.prototype.onSubmit = function (form) {
        this.dialogRef.close({
            name: form.controls.name.value,
            copyResearchers: form.controls.copyResearchers.value
        });
    };
    return CopySessionModalComponent;
}());
CopySessionModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-copy-session-modal',
        template: __webpack_require__("../../../../../src/app/dashboard/sessions/session-detail/copy-session-modal/copy-session-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/sessions/session-detail/copy-session-modal/copy-session-modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatDialogRef */]) === "function" && _a || Object])
], CopySessionModalComponent);

var _a;
//# sourceMappingURL=copy-session-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/sessions/session-detail/delete-session-modal/delete-session-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/sessions/session-detail/delete-session-modal/delete-session-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n  <h2 mat-dialog-title>Sessie verwijderen</h2>\r\n  <mat-dialog-content>Bent u zeker dat u deze sessie wilt verwijderen?</mat-dialog-content>\r\n  <br>\r\n  <mat-dialog-content>Als u deze sessie verwijderd zullen alle antwoorden die aan deze sessie gelinkt zijn ook verwijderd worden.</mat-dialog-content>\r\n  <br>\r\n  <mat-dialog-actions>\r\n    <button mat-button mat-dialog-close>Annuleren</button>\r\n    <button mat-button type=\"submit\">Verijwderen</button>\r\n  </mat-dialog-actions>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/sessions/session-detail/delete-session-modal/delete-session-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteSessionModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeleteSessionModalComponent = (function () {
    function DeleteSessionModalComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DeleteSessionModalComponent.prototype.ngOnInit = function () {
    };
    DeleteSessionModalComponent.prototype.onSubmit = function (form) {
        this.dialogRef.close({
            remove: true
        });
    };
    return DeleteSessionModalComponent;
}());
DeleteSessionModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-delete-session-modal',
        template: __webpack_require__("../../../../../src/app/dashboard/sessions/session-detail/delete-session-modal/delete-session-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/sessions/session-detail/delete-session-modal/delete-session-modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatDialogRef */]) === "function" && _a || Object])
], DeleteSessionModalComponent);

var _a;
//# sourceMappingURL=delete-session-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/sessions/session-detail/session-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fullscreen {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  background: white;\r\n  z-index: 2;\r\n  text-align: center;\r\n}\r\n\r\n.back-arrow {\r\n  position: fixed;\r\n  left: 50px;\r\n  top: 50px;\r\n  z-index: 2;\r\n}\r\n\r\n.fullscreen-details {\r\n  margin-top: 150px;\r\n  font-size: 150%;\r\n}\r\n\r\n.fullscreen-details img {\r\n  width: 10%;\r\n}\r\n\r\n.option {\r\n  display: none;\r\n}\r\n\r\n.researcher:hover + .option {\r\n  display: inline;\r\n}\r\n\r\n.option {\r\n  color: gray;\r\n}\r\n\r\n.option:hover {\r\n  display: inline;\r\n}\r\n\r\n.GoTo{\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/sessions/session-detail/session-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loaded\">\r\n  <div *ngIf=\"isFullScreen\" class=\"fullscreen\">\r\n    <button mat-button class=\"back-arrow\" (click)=\"toggleFullScreen()\">\r\n      <mat-icon>arrow_back</mat-icon> Terug\r\n    </button>\r\n    <div class=\"fullscreen-details\">\r\n      <img src=\"../../../../assets/logo.png\" alt=\"logo\">\r\n      <br>\r\n      <br>\r\n      <h1>Code:</h1>\r\n      <h1>{{session.code}}</h1>\r\n      <br>\r\n      <div *ngIf=\"session.password\">\r\n        <h2>Paswoord: </h2>\r\n        <h2>{{session.password}}</h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <h1 style=\"display: inline-block\">{{session.name}}</h1>\r\n\r\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n    <mat-icon>more_vert</mat-icon>\r\n  </button>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button mat-menu-item (click)=\"toggleFullScreen()\">\r\n      <mat-icon>fullscreen</mat-icon>\r\n      <span>Fullscreen</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"openAddResearcherDialog()\" *ngIf=\"isAdmin\">\r\n      <mat-icon>person_add</mat-icon>\r\n      <span>Onderzoeker toevoegen</span>\r\n    </button>\r\n    <button mat-menu-item *ngIf=\"isAdmin\" (click)=\"editSession()\" [disabled]=\"session.isOpen\">\r\n      <mat-icon>edit</mat-icon>\r\n      <span>Sessie bewerken</span>\r\n    </button>\r\n    <button mat-menu-item *ngIf=\"isAdmin\" (click)=\"openCopySessionDialog()\">\r\n      <mat-icon>content_copy</mat-icon>\r\n      <span>Sessie kopiëren</span>\r\n    </button>\r\n    <button mat-menu-item *ngIf=\"isAdmin\" (click)=\"openRemoveSessionDialog()\">\r\n      <mat-icon>delete</mat-icon>\r\n      <span>Sessie verwijderen</span>\r\n    </button>\r\n    <button mat-menu-item style=\"color: red\" *ngIf=\"session.isOpen && isAdmin\" (click)=\"closeSession()\">\r\n      <mat-icon>close</mat-icon>\r\n      <span>Sessie sluiten</span>\r\n    </button>\r\n    <button mat-menu-item style=\"color: green\" *ngIf=\"!session.isOpen && isAdmin\" (click)=\"openSession()\">\r\n      <mat-icon>play_circle_outline</mat-icon>\r\n      <span>Sessie openen</span>\r\n    </button>\r\n  </mat-menu>\r\n\r\n  <p *ngIf=\"!session.isConcept\">Start datum: {{session.startDate}}</p>\r\n  <p *ngIf=\"!session.isConcept && !session.isOpen\">Eind datum: {{session.endDate}}</p>\r\n  <p>Sessie code: {{session.code}}</p>\r\n  <p *ngIf=\"session.password\">Paswoord: {{session.password}}</p>\r\n  <p>VAS schaal type: {{session.scaleType}}</p>\r\n  <p>Percentage weergeven: {{session.showPercentage}}</p>\r\n  <div *ngIf=\"!session.isConcept\">\r\n    <p *ngIf=\"session.isOpen\" style=\"color: green\">Deze sessie is momenteel open</p>\r\n    <p *ngIf=\"!session.isOpen\" style=\"color: red\">Deze sessie is momenteel gesloten</p>\r\n  </div>\r\n  <p *ngIf=\"session.isConcept\" style=\"color: gray;\">Deze sessie is nog niet gestart</p>\r\n  <br>\r\n  <mat-list>\r\n    <h3 mat-subheader>Vragen</h3>\r\n    <mat-list-item *ngFor=\"let question of questions\">\r\n      <span style=\"font-size: larger; padding-left: 10px\">{{question.questionText}}</span><span style=\"padding-left: 30px; color: gray\">{{question.upperValue}} - {{question.lowerValue}}</span>\r\n    </mat-list-item>\r\n    <br>\r\n    <h3 mat-subheader>Beheerders</h3>\r\n    <mat-list-item *ngFor=\"let admin of admins\">\r\n      <span class=\"researcher\"><span style=\"padding-left: 10px; cursor: pointer\">{{admin.firstName}} {{admin.lastName}}</span><span style=\"padding-left: 20px; color: gray;\">{{admin.email}} <span *ngIf=\" emailAddressIsMe(admin.email)\">(ik)</span> </span></span>\r\n      <button *ngIf=\"!emailAddressIsMe(admin.email) && isAdmin\" mat-icon-button [matMenuTriggerFor]=\"menuAdmin\" class=\"option\">\r\n          <mat-icon>settings</mat-icon>\r\n        </button>\r\n      <mat-menu #menuAdmin=\"matMenu\">\r\n        <button mat-menu-item (click)=\"removeResearcher(admin, true)\">\r\n          <mat-icon>remove</mat-icon>\r\n          <span>Verwijderen</span>\r\n        </button>\r\n        <button mat-menu-item (click)=\"changeAdminStatus(admin, true)\">\r\n          <mat-icon>remove_red_eye</mat-icon>\r\n          <span>Toevoegen aan volgers</span>\r\n        </button>\r\n      </mat-menu>\r\n    </mat-list-item>\r\n    <br>\r\n    <h3 mat-subheader *ngIf=\"watchers.length>0\">Volgers</h3>\r\n    <mat-list-item *ngFor=\"let watcher of watchers\">\r\n      <span class=\"researcher\"><span style=\"padding-left: 10px; cursor: pointer\">{{watcher.firstName}} {{watcher.lastName}}</span><span style=\"padding-left: 20px; color: gray;\">{{watcher.email}} <span *ngIf=\" emailAddressIsMe(watcher.email)\">(ik)</span> </span></span>\r\n      <button *ngIf=\"!emailAddressIsMe(watcher.email) && isAdmin\" mat-icon-button [matMenuTriggerFor]=\"menuWatcher\" class=\"option\">\r\n        <mat-icon>settings</mat-icon>\r\n      </button>\r\n      <mat-menu #menuWatcher=\"matMenu\">\r\n        <button mat-menu-item (click)=\"removeResearcher(watcher, false)\">\r\n          <mat-icon>remove</mat-icon>\r\n          <span>Verwijderen</span>\r\n        </button>\r\n        <button mat-menu-item (click)=\"changeAdminStatus(watcher, false)\">\r\n          <mat-icon>person_add</mat-icon>\r\n          <span>Toevoegen aan beheerders</span>\r\n        </button>\r\n      </mat-menu>\r\n    </mat-list-item>\r\n    <br>\r\n    <h3 mat-subheader *ngIf=\"!session.isConcept\">Deelnames ({{subjects.length}})</h3>\r\n    <button mat-button>\r\n      <mat-icon>file_download</mat-icon>\r\n      <a routerLink=\"api/subjects/CSVdata\">Download CSV File</a>\r\n    </button>\r\n    <br>\r\n    <br>\r\n    <mat-list-item *ngFor=\"let subject of subjects\" (click)=\"selectSubject(subject)\" style=\"cursor: pointer\">\r\n      <span style=\"padding-left: 10px\">{{subject.firstName}} {{subject.lastName}}</span><span style=\"padding-left: 20px; color: gray;\">{{subject.email}}</span><mat-icon style=\"padding-left: 20px; color: gray;\">chevron_right</mat-icon>\r\n    </mat-list-item>\r\n  </mat-list>\r\n</div>\r\n<app-not-found *ngIf=\"notFoundError\"></app-not-found>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/sessions/session-detail/session-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_researcher_modal_add_researcher_modal_component__ = __webpack_require__("../../../../../src/app/dashboard/sessions/session-detail/add-researcher-modal/add-researcher-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_researcher_service__ = __webpack_require__("../../../../../src/services/researcher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__copy_session_modal_copy_session_modal_component__ = __webpack_require__("../../../../../src/app/dashboard/sessions/session-detail/copy-session-modal/copy-session-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__delete_session_modal_delete_session_modal_component__ = __webpack_require__("../../../../../src/app/dashboard/sessions/session-detail/delete-session-modal/delete-session-modal.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SessionDetailComponent = (function () {
    function SessionDetailComponent(route, router, sessionService, authService, dialog, researcherService) {
        this.route = route;
        this.router = router;
        this.sessionService = sessionService;
        this.authService = authService;
        this.dialog = dialog;
        this.researcherService = researcherService;
        this.questions = [];
        this.admins = [];
        this.watchers = [];
        this.subjects = [];
        this.isAdmin = false;
        this.loaded = false;
        this.isFullScreen = false;
        this.notFoundError = false;
    }
    SessionDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var sessionID = params['id'];
            _this.retrieveSessionDetails(sessionID);
        });
    };
    SessionDetailComponent.prototype.retrieveSessionDetails = function (sessionId) {
        var _this = this;
        this.sessionService.getSessionFullDetails(+sessionId)
            .subscribe(function (res) {
            _this.session = res.session;
            _this.admins = res.admins;
            _this.watchers = res.watchers;
            _this.questions = res.questions;
            _this.subjects = res.subjects;
            _this.isAdmin = res.isAdmin;
            _this.loaded = true;
        }, function (err) {
            _this.notFoundError = true;
        });
    };
    SessionDetailComponent.prototype.toggleFullScreen = function () {
        this.isFullScreen = !this.isFullScreen;
    };
    SessionDetailComponent.prototype.editSession = function () {
        this.router.navigate(['/dashboard/sessions/' + this.session.sessionID + '/edit']);
    };
    SessionDetailComponent.prototype.openAddResearcherDialog = function () {
        var _this = this;
        this.addResearcherDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__add_researcher_modal_add_researcher_modal_component__["a" /* AddResearcherModalComponent */]);
        this.addResearcherDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.onAddResearcher(result.email, result.isAdmin);
            }
        });
    };
    SessionDetailComponent.prototype.onAddResearcher = function (email, isAdmin) {
        var _this = this;
        if (this.authService.currentUser.email !== email) {
            this.sessionService.addResearcherToSession(this.session.sessionID, email, isAdmin)
                .subscribe(function (res) {
                _this.admins = res.admins;
                _this.watchers = res.watchers;
            });
        }
    };
    SessionDetailComponent.prototype.openCopySessionDialog = function () {
        var _this = this;
        this.copySessionDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__copy_session_modal_copy_session_modal_component__["a" /* CopySessionModalComponent */]);
        this.copySessionDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.onCopySession(result.name, result.copyResearchers);
            }
        });
    };
    SessionDetailComponent.prototype.onCopySession = function (name, copyResearchers) {
        var _this = this;
        console.log('copyResearchers: ' + copyResearchers);
        var questionIDs = [];
        for (var i = 0; i < this.questions.length; i++) {
            questionIDs.push(this.questions[i].questionID);
        }
        var researcherIDs = [];
        var adminIDs = [this.authService.currentUser.researcherID];
        if (copyResearchers) {
            for (var i = 0; i < this.watchers.length; i++) {
                researcherIDs.push(this.watchers[i].researcherID);
            }
            for (var i = 0; i < this.admins.length; i++) {
                if (this.admins[i].researcherID !== this.authService.currentUser.researcherID) {
                    adminIDs.push(this.admins[i].researcherID);
                }
            }
        }
        var newSession = {
            name: name,
            password: this.session.password,
            scaleType: this.session.scaleType,
            showPercentage: this.session.showPercentage,
            questionIDs: questionIDs,
            researcherIDs: researcherIDs,
            adminIDs: adminIDs,
            isConcept: true
        };
        console.log(newSession);
        this.sessionService.createNewSession(newSession)
            .subscribe(function (res) {
            _this.router.navigate(['/dashboard/sessions/' + res.sessionID]);
        });
    };
    SessionDetailComponent.prototype.openRemoveSessionDialog = function () {
        var _this = this;
        this.deleteSessionDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__delete_session_modal_delete_session_modal_component__["a" /* DeleteSessionModalComponent */]);
        this.deleteSessionDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.sessionService.removeSession(_this.session.sessionID)
                    .subscribe(function (res) {
                    if (_this.session.isConcept) {
                        _this.router.navigate(['dashboard/sessions/saved']);
                    }
                    else if (_this.session.isOpen) {
                        _this.router.navigate(['dashboard/sessions']);
                    }
                    else {
                        _this.router.navigate(['dashboard/sessions/closed']);
                    }
                });
            }
        });
    };
    SessionDetailComponent.prototype.closeSession = function () {
        var _this = this;
        if (window.confirm('Are you sure you want to close the session?')) {
            this.sessionService.toggleSession(this.session.sessionID, false)
                .subscribe(function (res) {
                _this.session = res;
            });
        }
    };
    SessionDetailComponent.prototype.openSession = function () {
        var _this = this;
        console.log(this.session.sessionID);
        this.sessionService.toggleSession(this.session.sessionID, true)
            .subscribe(function (res) {
            _this.session = res;
        });
    };
    SessionDetailComponent.prototype.removeResearcher = function (researcher, isAdmin) {
        var _this = this;
        this.sessionService.removeResearcherFromSession(this.session.sessionID, researcher.researcherID)
            .subscribe(function (res) {
            if (isAdmin) {
                _this.removeFromAdmins(researcher);
            }
            else {
                _this.removeFromWatchers(researcher);
            }
        });
    };
    SessionDetailComponent.prototype.changeAdminStatus = function (researcher, isAdmin) {
        var _this = this;
        this.sessionService.changeAdminStatus(this.session.sessionID, researcher.researcherID, !isAdmin)
            .subscribe(function (res) {
            if (isAdmin) {
                _this.watchers.push(researcher);
                _this.removeFromAdmins(researcher);
            }
            else {
                _this.admins.push(researcher);
                _this.removeFromWatchers(researcher);
            }
        });
    };
    SessionDetailComponent.prototype.removeFromAdmins = function (researcher) {
        var index = this.admins.indexOf(researcher);
        this.admins.splice(index, 1);
    };
    SessionDetailComponent.prototype.removeFromWatchers = function (researcher) {
        var index = this.watchers.indexOf(researcher);
        this.watchers.splice(index, 1);
    };
    SessionDetailComponent.prototype.selectSubject = function (subject) {
        var route = 'dashboard/subjects/' + subject.subjectID + '/answers';
        this.router.navigate([route], { queryParams: { sessionId: this.session.sessionID } });
    };
    SessionDetailComponent.prototype.emailAddressIsMe = function (email) {
        if (email === this.authService.currentUser.email) {
            return true;
        }
        else {
            return false;
        }
    };
    return SessionDetailComponent;
}());
SessionDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-session-detail',
        template: __webpack_require__("../../../../../src/app/dashboard/sessions/session-detail/session-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/sessions/session-detail/session-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatDialog */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_researcher_service__["a" /* ResearcherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_researcher_service__["a" /* ResearcherService */]) === "function" && _f || Object])
], SessionDetailComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=session-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/sessions/session-edit/existing-question-modal/existing-question-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/sessions/session-edit/existing-question-modal/existing-question-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h2>Vragen</h2>\r\n  <mat-list>\r\n    <mat-list-item *ngFor=\"let question of data.questions\">\r\n      <mat-checkbox (change)=\"onToggleQuestion(question)\"></mat-checkbox><span style=\"font-size: larger; padding-left: 10px\">{{question.questionText}}</span><span style=\"padding-left: 30px; color: gray\">{{question.upperValue}} - {{question.lowerValue}}</span>\r\n    </mat-list-item>\r\n  </mat-list>\r\n  <p *ngIf=\"data.questions.length == 0\" class=\"info\">Geen vragen beschikbaar.</p>\r\n  <button mat-button mat-dialog-close>Annuleren</button>\r\n  <button mat-button (click)=\"onReturn()\"><mat-icon>save</mat-icon>Opslaan</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/sessions/session-edit/existing-question-modal/existing-question-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExistingQuestionModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ExistingQuestionModalComponent = (function () {
    function ExistingQuestionModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.returnQuestions = [];
        this.questions = [];
    }
    ExistingQuestionModalComponent.prototype.ngOnInit = function () {
        console.log(this.data);
        this.questions = this.data.questions.splice();
    };
    ExistingQuestionModalComponent.prototype.onToggleQuestion = function (question) {
        var index = this.returnQuestions.indexOf(question);
        if (index < 0) {
            this.returnQuestions.push(question);
        }
        else {
            this.returnQuestions.splice(index, 1);
        }
    };
    ExistingQuestionModalComponent.prototype.onReturn = function () {
        var other = [];
        for (var i = 0; i < this.data.questions.length; i++) {
            var index = this.returnQuestions.indexOf(this.data.questions[i]);
            if (index < 0) {
                other.push(this.data.questions[i]);
            }
        }
        this.dialogRef.close({
            selected: this.returnQuestions,
            other: other
        });
    };
    return ExistingQuestionModalComponent;
}());
ExistingQuestionModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-existing-question-modal',
        template: __webpack_require__("../../../../../src/app/dashboard/sessions/session-edit/existing-question-modal/existing-question-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/sessions/session-edit/existing-question-modal/existing-question-modal.component.css")]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatDialogRef */]) === "function" && _a || Object, Object])
], ExistingQuestionModalComponent);

var _a;
//# sourceMappingURL=existing-question-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/sessions/session-edit/new-question-modal/new-question-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-form-field {\r\n  width: 100%;\r\n  display: block;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/sessions/session-edit/new-question-modal/new-question-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n  <h2 mat-dialog-title>Nieuwe vraag</h2>\r\n  <mat-dialog-content>Vul de vraag en de bovenste en onderste waarden in om een nieuwe vraag aan te maken.</mat-dialog-content>\r\n  <br>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Vraag\" ngModel name=\"questionText\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Hoogste waarde\" ngModel name=\"upperValue\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Laagste waarde\" ngModel name=\"lowerValue\">\r\n  </mat-form-field>\r\n  <mat-dialog-actions>\r\n    <button mat-button mat-dialog-close>Annuleren</button>\r\n    <button mat-button type=\"submit\">Toevoegen</button>\r\n  </mat-dialog-actions>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/sessions/session-edit/new-question-modal/new-question-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewQuestionModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var NewQuestionModalComponent = (function () {
    function NewQuestionModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    NewQuestionModalComponent.prototype.ngOnInit = function () {
    };
    NewQuestionModalComponent.prototype.onSubmit = function (form) {
        var newQuestion = {
            questionText: form.controls.questionText.value,
            upperValue: form.controls.upperValue.value,
            lowerValue: form.controls.lowerValue.value
        };
        this.dialogRef.close(newQuestion);
    };
    return NewQuestionModalComponent;
}());
NewQuestionModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-new-question-modal',
        template: __webpack_require__("../../../../../src/app/dashboard/sessions/session-edit/new-question-modal/new-question-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/sessions/session-edit/new-question-modal/new-question-modal.component.css")]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatDialogRef */]) === "function" && _a || Object, Object])
], NewQuestionModalComponent);

var _a;
//# sourceMappingURL=new-question-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/sessions/session-edit/session-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/sessions/session-edit/session-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loaded\">\r\n  <h2>Naam</h2>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Name\" [(ngModel)]=\"name\">\r\n  </mat-form-field>\r\n  <h2>Paswoord</h2>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Password\" [(ngModel)]=\"password\">\r\n  </mat-form-field>\r\n  <h2>Slider type</h2>\r\n  <mat-form-field>\r\n    <mat-select [(value)]=\"selectedScaleType\">\r\n      <mat-option value=\"gradient\">Gradient</mat-option>\r\n      <mat-option value=\"inverse\">Inverse gradient</mat-option>\r\n      <mat-option value=\"line\">Line</mat-option>\r\n      <mat-option value=\"draw\">Draw</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <br>\r\n  <mat-checkbox [(ngModel)]=\"showPercentage\">Toon percentage</mat-checkbox>\r\n  <h2>Vragen</h2>\r\n  <mat-list>\r\n    <mat-list-item *ngFor=\"let question of selectedQuestions\">\r\n      <mat-icon style=\"cursor: pointer\" (click)=\"removeQuestion(question)\">remove_circle_outline</mat-icon><span style=\"font-size: larger; padding-left: 10px\">{{question.questionText}}</span><span style=\"padding-left: 30px; color: gray\">{{question.upperValue}} - {{question.lowerValue}}</span>\r\n    </mat-list-item>\r\n  </mat-list>\r\n  <br>\r\n  <button mat-button (click)=\"openExistingQuestionDialog()\">&nbsp;Kies uit bestaande vragen</button>\r\n  <button mat-button color=\"primary\" (click)=\"openNewQuestionDialog()\"> <mat-icon>add</mat-icon>&nbsp;Maak een nieuwe vraag aan</button>\r\n  <br>\r\n  <br>\r\n  <button mat-button (click)=\"cancelChanges()\">Annuleren</button>\r\n  <button mat-button (click)=\"saveChanges()\">Opslaan</button>\r\n</div>\r\n<app-not-found *ngIf=\"notFoundError\"></app-not-found>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/sessions/session-edit/session-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_question_service__ = __webpack_require__("../../../../../src/services/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__existing_question_modal_existing_question_modal_component__ = __webpack_require__("../../../../../src/app/dashboard/sessions/session-edit/existing-question-modal/existing-question-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__new_question_modal_new_question_modal_component__ = __webpack_require__("../../../../../src/app/dashboard/sessions/session-edit/new-question-modal/new-question-modal.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SessionEditComponent = (function () {
    function SessionEditComponent(route, questionService, sessionService, dialog, router) {
        this.route = route;
        this.questionService = questionService;
        this.sessionService = sessionService;
        this.dialog = dialog;
        this.router = router;
        this.name = '';
        this.password = '';
        this.selectedScaleType = 'gradient';
        this.showPercentage = false;
        this.selectedQuestions = [];
        this.otherQuestions = [];
        this.displayQuestions = [];
        this.loaded = false;
        this.notFoundError = false;
    }
    SessionEditComponent.prototype.ngOnInit = function () {
        var sessionID = this.route.snapshot.params['id'];
        this.getSessionDetails(sessionID);
        this.getQuestions(sessionID);
    };
    SessionEditComponent.prototype.getSessionDetails = function (sessionId) {
        var _this = this;
        this.sessionService.getSessionDetails(sessionId)
            .subscribe(function (res) {
            _this.currentSession = res;
            _this.name = _this.currentSession.name;
            _this.password = _this.currentSession.password;
            _this.selectedScaleType = _this.currentSession.scaleType;
            _this.showPercentage = _this.currentSession.showPercentage;
            _this.loaded = true;
        }, function (err) {
            _this.notFoundError = true;
        });
    };
    SessionEditComponent.prototype.getQuestions = function (sessionId) {
        var _this = this;
        this.questionService.getAllSessionQuestions(sessionId)
            .subscribe(function (res) {
            _this.selectedQuestions = res.selected;
            _this.otherQuestions = res.other;
            _this.displayQuestions = _this.otherQuestions;
        });
    };
    SessionEditComponent.prototype.removeQuestion = function (question) {
        var index = this.selectedQuestions.indexOf(question);
        this.selectedQuestions.splice(index, 1);
        this.otherQuestions.push(question);
    };
    SessionEditComponent.prototype.openExistingQuestionDialog = function () {
        var _this = this;
        this.existingQuestionDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__existing_question_modal_existing_question_modal_component__["a" /* ExistingQuestionModalComponent */], {
            data: { questions: this.otherQuestions }
        });
        this.existingQuestionDialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result) {
                for (var i = 0; i < result.selected.length; i++) {
                    _this.selectedQuestions.push(result.selected[i]);
                }
                _this.otherQuestions = [];
                for (var i = 0; i < result.other.length; i++) {
                    _this.otherQuestions.push(result.other[i]);
                }
            }
        });
    };
    SessionEditComponent.prototype.openNewQuestionDialog = function () {
        var _this = this;
        this.newQuestionDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__new_question_modal_new_question_modal_component__["a" /* NewQuestionModalComponent */]);
        this.newQuestionDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.questionService.createNewQuestion(result)
                    .subscribe(function (res) {
                    _this.selectedQuestions.push(res);
                });
            }
        });
    };
    SessionEditComponent.prototype.saveChanges = function () {
        var _this = this;
        var questionIDs = [];
        for (var i = 0; i < this.selectedQuestions.length; i++) {
            questionIDs.push(this.selectedQuestions[i].questionID);
        }
        var updatedSession = {
            Name: this.name,
            Password: this.password,
            ScaleType: this.selectedScaleType,
            ShowPercentage: this.showPercentage,
            QuestionIDs: questionIDs,
            ResearcherIDs: [],
            AdminIDs: [],
            IsConcept: false
        };
        console.log(updatedSession);
        this.sessionService.updateSession(this.currentSession.sessionID, updatedSession)
            .subscribe(function (res) {
            console.log(res);
            _this.router.navigate(['/dashboard/sessions/' + _this.currentSession.sessionID]);
        });
    };
    SessionEditComponent.prototype.cancelChanges = function () {
        this.router.navigate(['/dashboard/sessions/' + this.currentSession.sessionID]);
    };
    return SessionEditComponent;
}());
SessionEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-session-edit',
        template: __webpack_require__("../../../../../src/app/dashboard/sessions/session-edit/session-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/sessions/session-edit/session-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_question_service__["a" /* QuestionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MatDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], SessionEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=session-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/sessions/session-subjects/session-subjects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "th {\r\n  padding-right: 200px;\r\n}\r\n\r\ntd {\r\n  padding-top: 15px;\r\n}\r\n\r\ntd:hover {\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/sessions/session-subjects/session-subjects.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loaded && !sessionNotFoundError\">\r\n  <h1>{{session.name}} <span style=\"color: gray; font-size: small; margin-left: 50px; margin-bottom: 5px\" *ngIf=\"!session.isConcept\">{{session.startDate}}</span></h1>\r\n  <table>\r\n    <tr>\r\n      <th>Name</th>\r\n      <th>Illness</th>\r\n      <th>Birth date</th>\r\n      <th></th>\r\n    </tr>\r\n    <br>\r\n    <tr *ngFor=\"let subject of displaySubjects\" (click)=\"selectSubject(subject)\">\r\n      <td>{{subject.firstName}} {{subject.lastName}}</td>\r\n      <td>{{subject.illness}}</td>\r\n      <td>{{subject.birthDate}}</td>\r\n      <td><mat-icon>chevron_right</mat-icon></td>\r\n    </tr>\r\n  </table>\r\n  <br>\r\n  <br>\r\n  <button mat-button (click)=\"toSessionDetails()\"><mat-icon>arrow_back</mat-icon> Back to session details</button>\r\n</div>\r\n\r\n<div *ngIf=\"sessionNotFoundError\" style=\"text-align: center\">\r\n  <h2 style=\"color:gray;\">Session does not exist</h2>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/sessions/session-subjects/session-subjects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionSubjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SessionSubjectsComponent = (function () {
    function SessionSubjectsComponent(http, route, router, sessionService) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.sessionService = sessionService;
        this.loaded = false;
        this.session = null;
        this.subjects = [];
        this.displaySubjects = [];
        this.sessionNotFoundError = false;
    }
    SessionSubjectsComponent.prototype.ngOnInit = function () {
        var sessionId = this.route.snapshot.params['id'];
        this.retrieveSessionDetails(sessionId);
        this.retrieveSubjects(sessionId);
    };
    SessionSubjectsComponent.prototype.retrieveSubjects = function (sessionId) {
        var _this = this;
        this.sessionService.getSessionSubjects(+sessionId)
            .subscribe(function (res) {
            _this.subjects = res;
            _this.displaySubjects = _this.subjects.slice();
        });
    };
    SessionSubjectsComponent.prototype.retrieveSessionDetails = function (sessionId) {
        var _this = this;
        this.sessionService.getSessionDetails(+sessionId)
            .subscribe(function (res) {
            _this.session = res;
            _this.loaded = true;
        });
    };
    SessionSubjectsComponent.prototype.selectSubject = function (subject) {
        var route = 'dashboard/subjects/' + subject.subjectID + '/answers';
        this.router.navigate([route]);
    };
    SessionSubjectsComponent.prototype.toSessionDetails = function () {
        var route = 'dashboard/sessions/' + this.session.sessionID;
        this.router.navigate([route]);
    };
    return SessionSubjectsComponent;
}());
SessionSubjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-session-subjects',
        template: __webpack_require__("../../../../../src/app/dashboard/sessions/session-subjects/session-subjects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/sessions/session-subjects/session-subjects.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */]) === "function" && _d || Object])
], SessionSubjectsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=session-subjects.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/sessions/sessions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "th {\r\n    padding-right: 150px;\r\n  }\r\n  \r\n  td {\r\n    padding-top: 15px;\r\n  }\r\n  \r\n  td:hover {\r\n    cursor: pointer;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/sessions/sessions.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Recente sessies</h1>\r\n<mat-form-field style=\"width: 100%\">\r\n    <span matPrefix><mat-icon>search</mat-icon> &nbsp;</span>\r\n    <input type=\"text\" matInput #searchBar (input)=\"onChange($event)\">\r\n    <mat-icon matSuffix style=\"cursor: pointer; color: gray\" (click)=\"clearFilter()\">clear</mat-icon>\r\n  </mat-form-field>\r\n<table>\r\n\r\n  <tr>\r\n    <th>Naam</th>\r\n    <th>Code</th>\r\n    <th>Paswoord</th>\r\n    <th>Eind datum</th>\r\n    <th></th>\r\n  </tr>\r\n  <br>\r\n  <tr *ngFor=\"let session of displaySessions\" (click)=\"goToSessionDetail(session)\">\r\n    <td>{{session.name}}</td>\r\n    <td>{{session.code}}</td>\r\n    <td *ngIf=\"session.password\">{{session.password}}</td>\r\n    <td *ngIf=\"!session.password\">Geen paswoord toegekend</td>\r\n    <td *ngIf=\"!session.isOpen\">{{session.endDate}}</td>\r\n    <td *ngIf=\"session.isOpen\">Open</td>\r\n    <td><mat-icon>chevron_right</mat-icon></td>\r\n  </tr>\r\n</table>\r\n<p *ngIf=\"sessions.length == 0\" class=\"info\">Er zijn momenteel geen sessies om weer te geven.</p>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/sessions/sessions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SessionsComponent = (function () {
    function SessionsComponent(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
        this.sessions = [];
        this.displaySessions = [];
    }
    SessionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionService.getSessions()
            .subscribe(function (res) {
            _this.sessions = res;
            _this.displaySessions = _this.sessions.slice();
        });
    };
    SessionsComponent.prototype.filterList = function (filterString) {
        this.displaySessions = [];
        for (var i = 0; i < this.sessions.length; i++) {
            if (this.sessions[i].name.includes(filterString)) {
                this.displaySessions.push(this.sessions[i]);
            }
        }
    };
    SessionsComponent.prototype.clearFilter = function () {
        this.searchBar.nativeElement.value = '';
        this.displaySessions = this.sessions.slice();
    };
    SessionsComponent.prototype.onChange = function (event) {
        this.filterList(event.srcElement.value);
    };
    SessionsComponent.prototype.goToSessionDetail = function (session) {
        var route = 'dashboard/sessions/' + session.sessionID;
        this.router.navigate([route]);
    };
    return SessionsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('searchBar'),
    __metadata("design:type", Object)
], SessionsComponent.prototype, "searchBar", void 0);
SessionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-sessions',
        template: __webpack_require__("../../../../../src/app/dashboard/sessions/sessions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/sessions/sessions.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SessionsComponent);

var _a, _b;
//# sourceMappingURL=sessions.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".invite {\r\n  background: #dddddd;\r\n  padding: 5px;\r\n  border-radius: 4px;\r\n  margin-right: 20px;\r\n  margin-bottom: 20px;\r\n  display: inline-block;\r\n}\r\n\r\n.close {\r\n  font-weight: bolder;\r\n  cursor: pointer;\r\n  margin-left: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Naam</h2>\r\n<mat-form-field>\r\n  <input type=\"text\" matInput placeholder=\"Voornaam\" [(ngModel)]=\"firstName\">\r\n</mat-form-field>\r\n<br>\r\n<mat-form-field>\r\n  <input type=\"text\" matInput placeholder=\"Achternaam\" [(ngModel)]=\"lastName\">\r\n</mat-form-field>\r\n<br>\r\n<button mat-button type=\"submit\" (click)=\"onChangeName()\"><mat-icon>save</mat-icon> Veranderingen opslaan</button>\r\n<br>\r\n<h2>Paswoord resetten</h2>\r\n<p>U zal een mail ontvangen met een link naar een Auth0 pagina waar u uw paswoord kan resetten.</p>\r\n<button mat-button (click)=\"resetPassword()\"><mat-icon>sync</mat-icon> Reset paswoord</button>\r\n<br>\r\n<br>\r\n<h2>Onderzoekers uitnodigen</h2>\r\n<p>Om een account aan te maken moet men uitgenodigd worden. Voer de email adressen in van de personen die u wil uitnodigen.</p>\r\n<div *ngIf=\"invites.length > 0\">\r\n  <h4>Uitnodigingen:</h4>\r\n  <span *ngFor=\"let invite of invites; let i = index\" class=\"invite\">\r\n  {{invite}} <span class=\"close\" (click)=\"onRemoveInvite(i)\">X</span>\r\n  </span>\r\n  <br>\r\n  <button mat-button (click)=\"sendInvitations()\">Uitnodigingen verzenden</button>\r\n</div>\r\n<br>\r\n<mat-form-field style=\"width: 100%\">\r\n  <input type=\"text\" matInput placeholder=\"Uitnodigingen\" (keyup.enter)=\"onAddInvite($event)\">\r\n</mat-form-field>\r\n<p *ngIf=\"wrongEmail !== ''\" class=\"error\">{{wrongEmail}} is geen aanvaarbaar email adres.</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_researcher_service__ = __webpack_require__("../../../../../src/services/researcher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsComponent = (function () {
    function SettingsComponent(authService, researcherService, router) {
        this.authService = authService;
        this.researcherService = researcherService;
        this.router = router;
        this.firstName = '';
        this.lastName = '';
        this.invites = [];
        this.wrongEmail = '';
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.firstName = this.authService.currentUser.firstName;
        this.lastName = this.authService.currentUser.lastName;
    };
    SettingsComponent.prototype.resetPassword = function () {
        var currentUserEmail = this.authService.currentUser.email;
        this.authService.resetPassword(currentUserEmail)
            .subscribe(function (res) {
            window.alert('Er is een reset email verstuurd');
        });
    };
    SettingsComponent.prototype.onChangeName = function () {
        var _this = this;
        if (this.nameChangeIsValid()) {
            this.researcherService.updateCurrentResearcher(this.firstName, this.lastName)
                .subscribe(function (res) {
                _this.router.navigate(['/dashboard']);
            });
        }
    };
    SettingsComponent.prototype.nameChangeIsValid = function () {
        return (this.firstName !== '' && this.lastName !== '');
    };
    SettingsComponent.prototype.onAddInvite = function (event) {
        var email = event.srcElement.value;
        if (this.checkIfEmailAddress(email)) {
            this.invites.push(email);
            event.srcElement.value = '';
            this.wrongEmail = '';
        }
        else {
            this.wrongEmail = email;
        }
    };
    SettingsComponent.prototype.onRemoveInvite = function (index) {
        this.invites.splice(index, 1);
    };
    SettingsComponent.prototype.sendInvitations = function () {
        var _this = this;
        this.researcherService.inviteResearchers(this.invites)
            .subscribe(function (res) {
            alert('Invitations have been sent');
            _this.invites = [];
        });
    };
    SettingsComponent.prototype.checkIfEmailAddress = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-settings',
        template: __webpack_require__("../../../../../src/app/dashboard/settings/settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_researcher_service__["a" /* ResearcherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_researcher_service__["a" /* ResearcherService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SettingsComponent);

var _a, _b, _c;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/subject-answers/subject-answers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\r\n    text-decoration: none;\r\n    color: black;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/subject-answers/subject-answers.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loaded\">\r\n  <h2>{{subject.firstName}} {{subject.lastName}}</h2>\r\n  <p>email adres: {{subject.email}}</p>\r\n  <p>Geboorte datum: {{subject.birthDate}}</p>\r\n  <p>Ziekte: {{subject.illness}}</p>\r\n  <br>\r\n  <div *ngIf=\"displayQuestions.length > 0\">\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"Select session\" [(value)]=\"selectedSession\" (change)=\"onChange($event)\">\r\n        <mat-option value=\"all\">Alle sessies</mat-option>\r\n        <mat-option *ngFor=\"let session of sessions\" [value]=\"session.sessionID\">\r\n          {{session.name}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <button mat-button *ngIf=\"selectedSession!=='all'\" (click)=\"onGoToSession()\">\r\n      <span>Naar sessie</span>\r\n      <mat-icon>chevron_right</mat-icon>\r\n    </button>\r\n    <br>\r\n    <button mat-button>\r\n      <mat-icon>file_download</mat-icon>\r\n      <a routerLink=\"api/subjects/CSVdata\">Download CSV File</a>\r\n    </button>\r\n    <br>\r\n    <br>\r\n    <div *ngFor=\"let question of displayQuestions\">\r\n      <h4>{{question.questionText}}</h4>\r\n      <p *ngFor=\"let answer of question.answers\">\r\n        {{answer.answerPercentage}}% <span style=\"color: gray; margin-left: 30px;\">({{answer.answerDate}})</span> {{answer.sessionId}}\r\n      </p>\r\n      <br>\r\n    </div>\r\n  </div>\r\n  <p *ngIf=\"displayQuestions.length == 0\" class=\"info\">De deelnemer heeft momenteel nog geen vragen beantwoord.</p>\r\n</div>\r\n<app-not-found *ngIf=\"notFoundError\"></app-not-found>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/subject-answers/subject-answers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_subject_service__ = __webpack_require__("../../../../../src/services/subject.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectAnswersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubjectAnswersComponent = (function () {
    function SubjectAnswersComponent(router, route, subjectService) {
        this.router = router;
        this.route = route;
        this.subjectService = subjectService;
        this.loaded = false;
        this.questions = [];
        this.displayQuestions = [];
        this.sessions = [];
        this.notFoundError = false;
    }
    SubjectAnswersComponent.prototype.ngOnInit = function () {
        this.sessionId = this.route.snapshot.queryParams['sessionId'];
        var subjectID = this.route.snapshot.params['id'];
        this.retrieveSubjectDetails(subjectID);
        this.retrieveSessionDetails(subjectID);
    };
    SubjectAnswersComponent.prototype.retrieveSubjectDetails = function (subjectId) {
        var _this = this;
        this.subjectService.getSubjectDetails(+subjectId)
            .subscribe(function (res) {
            _this.subject = res;
            _this.loaded = true;
        });
    };
    SubjectAnswersComponent.prototype.retrieveSessionDetails = function (subjectId) {
        var _this = this;
        this.subjectService.getSubjectAnswers(+subjectId)
            .subscribe(function (res) {
            _this.questions = res.questions;
            _this.displayQuestions = _this.questions.slice();
            _this.sessions = res.sessions;
            if (_this.sessionId) {
                _this.selectedSession = +_this.sessionId;
                _this.filterQuestions(+_this.sessionId);
            }
            else {
                _this.selectedSession = 'all';
            }
        }, function (err) {
            _this.notFoundError = true;
        });
    };
    SubjectAnswersComponent.prototype.onChange = function (event) {
        if (event.value === 'all') {
            this.resetFilter();
        }
        else {
            this.filterQuestions(event.value);
        }
    };
    SubjectAnswersComponent.prototype.onGoToSession = function () {
        this.router.navigate(['dashboard/sessions/' + this.selectedSession]);
    };
    SubjectAnswersComponent.prototype.filterQuestions = function (sessionId) {
        var questionsBackup = this.questions.slice();
        this.displayQuestions = [];
        for (var i = 0; i < questionsBackup.length; i++) {
            var answers = [];
            for (var j = 0; j < questionsBackup[i].answers.length; j++) {
                if (questionsBackup[i].answers[j].sessionID === sessionId) {
                    answers.push(questionsBackup[i].answers[j]);
                }
            }
            if (answers.length > 0) {
                var question = {
                    lowerValue: questionsBackup[i].lowerValue,
                    upperValue: questionsBackup[i].upperValue,
                    questionText: questionsBackup[i].questionText,
                    questionID: questionsBackup[i].questionID,
                    answers: answers
                };
                this.displayQuestions.push(question);
            }
        }
    };
    SubjectAnswersComponent.prototype.resetFilter = function () {
        this.displayQuestions = this.questions;
    };
    return SubjectAnswersComponent;
}());
SubjectAnswersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-subject-answers',
        template: __webpack_require__("../../../../../src/app/dashboard/subject-answers/subject-answers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/subject-answers/subject-answers.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_subject_service__["a" /* SubjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_subject_service__["a" /* SubjectService */]) === "function" && _c || Object])
], SubjectAnswersComponent);

var _a, _b, _c;
//# sourceMappingURL=subject-answers.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\np {\r\n    text-align: center;\r\n    font-size: 18px;\r\n}\r\nh1{\r\n    text-align: center;\r\n    font-size: 60px;\r\n    \r\n}\r\n#text{\r\n    margin: auto;\r\n    width: 100%;\r\n    color: #4f5759;\r\n    font-family: 'Roboto', serif;\r\n}\r\n #logoBanner{\r\n     width: 100%;\r\n     \r\n }\r\n  .logo {\r\n    width: 50%;\r\n    margin-left:auto;\r\n    margin-right: auto;\r\n    padding: 20px;\r\n    display: block;\r\n  }\r\n\r\n  \r\n  \r\n  a {\r\n    width: 10%;\r\n    background: #49AAE2;\r\n    color: white;\r\n    margin:auto;\r\n    margin-top:20px;\r\n    text-decoration: none;\r\n    padding: 10px;\r\n    text-align: center;\r\n    display: block;\r\n    \r\n  }\r\n\r\n  a:hover{\r\n    background: rgb(22, 149, 218);\r\n  }\r\n  body{\r\n      margin: 0px;\r\n      \r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"logoBanner\">\r\n<img src=\"../../assets/logo.png\" alt=\"logo\" class=\"logo\">\r\n</div>\r\n\r\n\r\n<div id=\"text\">\r\n  <h1>Welcome </h1>\r\n  <p>Welkom op VYBE. Een platform voor onderzoekers om op een gemakkelijke  manier vragen te stellen.</p>\r\n  <a href=\"/login\">Login</a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(authSerive) {
        this.authSerive = authSerive;
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('background-image');
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  background: #49AAE2;\r\n  z-index: 0;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.card {\r\n  height: 500px;\r\n  width: 800px;\r\n  box-shadow: 0px 0px 15px gray;\r\n  margin: auto;\r\n  margin-top: 100px;\r\n  text-align: center;\r\n  background: white;\r\n  border-radius: 10px;\r\n}\r\n\r\n.logo {\r\n  width: 15%;\r\n  margin-top: 75px;\r\n}\r\n\r\n.bottom-text {\r\n  font-size: smaller;\r\n  text-align: center;\r\n  color: white;\r\n  margin-top: 25px;\r\n}\r\n\r\n.forgot-password {\r\n  display: block;\r\n}\r\n\r\na {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\na:hover {\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n\r\nmat-icon {\r\n  margin-right: 15px;\r\n}\r\n\r\nform {\r\n  padding-top: 50px;\r\n  margin: auto;\r\n  width: 60%;\r\n}\r\n\r\nform mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\nform button {\r\n  width: 100%;\r\n  background: #49AAE2;\r\n  color: white;\r\n}\r\n\r\n.animation-larger {\r\n  height: 800px;\r\n  -webkit-animation-name: larger;\r\n          animation-name: larger;\r\n  -webkit-animation-duration: 1s;\r\n          animation-duration: 1s;\r\n}\r\n\r\n.visible {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  transition: opacity 0.5s linear;\r\n}\r\n\r\n.hidden {\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: visibility 0s 0.5s, opacity 0.5s linear;\r\n}\r\n\r\n@-webkit-keyframes larger {\r\n  from {height: 500px}\r\n  to {height: 800px}\r\n}\r\n\r\n@keyframes larger {\r\n  from {height: 500px}\r\n  to {height: 800px}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"cardClass\">\r\n  <div [ngClass]=\"contentClass\">\r\n    <img src=\"../../assets/logo.png\" alt=\"logo\" class=\"logo\">\r\n    <form (ngSubmit)=\"onLogin(f)\" #f=\"ngForm\">\r\n      <mat-form-field>\r\n        <mat-icon matPrefix>mail_outline</mat-icon>\r\n        <input type=\"email\" matInput placeholder=\"email\" name=\"email\" ngModel>\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n        <mat-icon matPrefix>lock_outline</mat-icon>\r\n        <input type=\"password\" matInput placeholder=\"password\" name=\"password\" ngModel>\r\n      </mat-form-field>\r\n      <br>\r\n      <p class=\"error\" *ngIf=\"wrongEmailPasswordError\">Het email adres of paswoord komt niet overeen.</p>\r\n      <p class=\"error\" *ngIf=\"serverError\">Er is een probleem met de server. Probeer het later opnieuw.</p>\r\n      <br>\r\n      <button mat-button type=\"submit\" [disabled]=\"loginButtonDisabled\">Login</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n<p class=\"bottom-text\" [ngClass]=\"contentClass\">Nog geen account? <a (click)=\"goToSignup()\">Klik hier</a></p>\r\n<a class=\"bottom-text forgot-password\" [ngClass]=\"contentClass\" (click)=\"openResetPasswordModal()\">Paswoord vergeten</a>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reset_password_modal_reset_password_modal_component__ = __webpack_require__("../../../../../src/app/login/reset-password-modal/reset-password-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(authService, router, route, dialog) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.loginButtonDisabled = false;
        this.contentClass = 'visible';
        this.cardClass = 'card';
        this.wrongEmailPasswordError = false;
        this.serverError = false;
        var body = document.getElementsByTagName('body')[0];
        // body.classList.remove("className");
        body.classList.add('background-image');
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        var fromSignup = this.route.snapshot.queryParams['fromSignup'];
        if (fromSignup) {
            this.contentClass = 'hidden';
            setTimeout(function () { _this.contentClass = 'visible'; }, 100);
        }
    };
    LoginComponent.prototype.goToSignup = function () {
        var _this = this;
        this.contentClass = 'hidden';
        this.cardClass = 'card animation-larger';
        setTimeout(function () { _this.router.navigate(['/signup']); }, 1000);
    };
    LoginComponent.prototype.onLogin = function (form) {
        var _this = this;
        var email = form.controls.email.value;
        var password = form.controls.password.value;
        this.loginButtonDisabled = true;
        this.authService.login(email, password)
            .subscribe(function (res) {
            _this.router.navigate(['/dashboard']);
        }, function (err) {
            console.log(err);
            _this.loginButtonDisabled = false;
            if (err.statusCode === 403) {
                _this.wrongEmailPasswordError = true;
            }
            else {
                _this.serverError = true;
            }
        });
    };
    LoginComponent.prototype.openResetPasswordModal = function () {
        var _this = this;
        this.resetPasswordDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__reset_password_modal_reset_password_modal_component__["a" /* ResetPasswordModalComponent */]);
        this.resetPasswordDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.authService.resetPassword(result.email)
                    .subscribe(function (res) {
                    if (res) {
                        // window.alert('An email to reset your password has been sent to ' + result.email);
                    }
                });
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatDialog */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/reset-password-modal/reset-password-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/reset-password-modal/reset-password-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n  <h2 mat-dialog-title>Paswoord resetten</h2>\r\n  <mat-dialog-content>Voer uw email adres in. Hierna zal u een mail ontvangen met een link naar een Auth0 pagina waar u uw paswoord kan resetten.</mat-dialog-content>\r\n  <br>\r\n  <mat-form-field style=\"width: 100%\">\r\n    <input matInput placeholder=\"Email\" ngModel email name=\"email\">\r\n  </mat-form-field>\r\n  <mat-dialog-actions>\r\n    <button mat-button mat-dialog-close>Annuleren</button>\r\n    <button mat-button type=\"submit\">Verstuur email</button>\r\n  </mat-dialog-actions>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/reset-password-modal/reset-password-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResetPasswordModalComponent = (function () {
    function ResetPasswordModalComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ResetPasswordModalComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordModalComponent.prototype.onSubmit = function (form) {
        this.dialogRef.close({
            email: form.controls.email.value,
        });
    };
    return ResetPasswordModalComponent;
}());
ResetPasswordModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-reset-password-modal',
        template: __webpack_require__("../../../../../src/app/login/reset-password-modal/reset-password-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/reset-password-modal/reset-password-modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatDialogRef */]) === "function" && _a || Object])
], ResetPasswordModalComponent);

var _a;
//# sourceMappingURL=reset-password-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n  height: 800px;\r\n  width: 800px;\r\n  box-shadow: 0px 0px 15px gray;\r\n  margin: auto;\r\n  margin-top: 100px;\r\n  text-align: center;\r\n  background: white;\r\n  border-radius: 10px;\r\n  color: #363636;\r\n}\r\n\r\n.card h1 {\r\n  padding-top: 50px;\r\n}\r\n\r\n.warning {\r\n  border: 1px solid red;\r\n  border-radius: 15px;\r\n  padding: 10px;\r\n  padding-bottom: 0px;\r\n  width: 60%;\r\n  margin: auto;\r\n  margin-top: 25px;\r\n  color: red;\r\n}\r\n\r\nform {\r\n  width: 50%;\r\n  margin: auto;\r\n  padding-top: 25px;\r\n}\r\n\r\nform mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\nform button {\r\n  width: 80%;\r\n  margin-top: 50px;\r\n  background: #49AAE2;\r\n  color: white;\r\n}\r\n\r\nmat-checkbox a {\r\n  color: royalblue;\r\n  text-decoration: none;\r\n}\r\n\r\nmat-checkbox a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.back-link {\r\n  display: block;\r\n  font-size: smaller;\r\n  text-align: center;\r\n  color: white;\r\n  margin-top: 25px;\r\n  text-decoration: none;\r\n  padding-bottom: 25px;\r\n}\r\n\r\n.back-link:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.visible {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  transition: opacity 0.5s linear;\r\n}\r\n\r\n.hidden {\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: visibility 0s 0.5s, opacity 0.5s linear;\r\n}\r\n\r\n.animation-smaller {\r\n  height: 500px;\r\n  -webkit-animation-name: smaller;\r\n          animation-name: smaller;\r\n  -webkit-animation-duration: 1s;\r\n          animation-duration: 1s;\r\n}\r\n\r\n@-webkit-keyframes smaller {\r\n  from {height: 800px}\r\n  to {height: 500px}\r\n}\r\n\r\n@keyframes smaller {\r\n  from {height: 800px}\r\n  to {height: 500px}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"cardClass\">\r\n  <div [ngClass]=\"contentClass\">\r\n    <h1>Nieuwe account</h1>\r\n    <div class=\"warning\">\r\n      <mat-icon>error_outline</mat-icon>\r\n      <p>Er kan enkel een nieuwe account aangemaakt worden als je uitgenodigd bent.</p>\r\n    </div>\r\n    <form (ngSubmit)=\"onSignup(f)\" #f=\"ngForm\">\r\n      <mat-form-field>\r\n        <input type=\"email\" matInput placeholder=\"email\" required email name=\"email\" ngModel>\r\n      </mat-form-field>\r\n      <br>\r\n      <p *ngIf=\"inviteError\" class=\"error\">Er is geen invite beschikbaar op dit email adres.</p>\r\n      <mat-form-field>\r\n        <input type=\"password\" matInput placeholder=\"paswoord\" required name=\"password\" ngModel>\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n        <input type=\"password\" matInput placeholder=\"herhaal paswoord\" required name=\"passwordrpt\" ngModel>\r\n      </mat-form-field>\r\n      <br>\r\n      <p *ngIf=\"passwordMatchError\" class=\"error\">Paswoorden zijn niet gelijk.</p>\r\n      <mat-form-field>\r\n        <input type=\"text\" matInput placeholder=\"voornaam\" required name=\"firstName\" ngModel>\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n        <input type=\"text\" matInput placeholder=\"achternaam\" required name=\"lastName\" ngModel>\r\n      </mat-form-field>\r\n      <br>\r\n      <br>\r\n      <!--<mat-checkbox required name=\"agree\" ngModel>I have read and agree the <a href=\"https://www.w3schools.com\" target=\"_blank\">Terms & conditions</a></mat-checkbox>-->\r\n      <button mat-button type=\"submit\">Maak account aan</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n<a class=\"back-link\" [ngClass]=\"contentClass\" (click)=\"goBackToLogin()\">Terug naar login</a>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.passwordMatchError = false;
        this.inviteError = false;
        this.contentClass = 'hidden';
        this.cardClass = 'card';
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('background-image');
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { _this.contentClass = 'visible'; }, 100);
    };
    SignupComponent.prototype.goBackToLogin = function () {
        var _this = this;
        this.cardClass = 'card animation-smaller';
        this.contentClass = 'hidden';
        setTimeout(function () { _this.router.navigate(['/login'], { queryParams: { fromSignup: true } }); }, 1000);
    };
    SignupComponent.prototype.onSignup = function (form) {
        var _this = this;
        var email = form.controls.email.value;
        var password = form.controls.password.value;
        var passwordrpt = form.controls.passwordrpt.value;
        var firstName = form.controls.firstName.value;
        var lastName = form.controls.lastName.value;
        // if (!form.controls.agree.value) {
        // return;
        // }
        if (password === passwordrpt) {
            this.passwordMatchError = false;
            this.inviteError = false;
            this.authService.signUp(email, password, firstName, lastName)
                .subscribe(function (res) {
                _this.goBackToLogin();
            }, function (error) {
                _this.inviteError = true;
            });
        }
        else {
            this.passwordMatchError = true;
        }
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/login/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_auth0_js__ = __webpack_require__("../../../../auth0-js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_auth0_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_2_auth0_js__["WebAuth"]({
            clientID: 'qA7vUJsbKYq_e5vCjk-CjqoqfCF24yAN',
            domain: 'teunv.eu.auth0.com',
            audience: 'http://localhost:51630',
        });
        this.currentUser = null;
    }
    AuthService.prototype.loginClient = function (email, password) {
        var _this = this;
        var setSessionFunction = this.setSession;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.auth0.client.login({
                realm: 'Username-Password-Authentication',
                username: email,
                password: password,
                scope: 'openid offline_access'
            }, function (err, authResult) {
                if (authResult) {
                    setSessionFunction(authResult, email);
                    observer.next(authResult);
                }
                if (err) {
                    observer.error(err);
                }
            });
        });
        return observable;
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.loginClient(email, password)
                .subscribe(function (res) {
                _this.setCurrentUser(email)
                    .subscribe(function (user) {
                    observer.next(user);
                });
            }, function (err) {
                observer.error(err);
            });
        });
        return observable;
    };
    AuthService.prototype.getUserInfo = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            var accessToken = localStorage.getItem('access_token');
            if (accessToken) {
                _this.auth0.client.userInfo(accessToken, function (err, user) {
                    if (err) {
                        observer.error(err);
                    }
                    if (user) {
                        observer.next(user);
                    }
                });
            }
            else {
                observer.error('user not logged in');
            }
        });
        return observable;
    };
    AuthService.prototype.signUp = function (email, password, firstName, lastName) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.addResearcherToDatabase(email, firstName, lastName)
                .subscribe(function (added) {
                if (added) {
                    _this.signUpClient(email, password)
                        .subscribe(function (ok) {
                        if (ok) {
                            observer.next(true);
                        }
                    }, function (error) {
                        observer.error(error);
                    });
                }
            }, function (error) {
                observer.error(error);
            });
        });
        return observable;
    };
    AuthService.prototype.signUpClient = function (email, password) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.auth0.signup({
                connection: 'Username-Password-Authentication',
                email: email,
                password: password
            }, function (err) {
                if (err) {
                    observer.error(err);
                }
                else {
                    observer.next(true);
                }
            });
        });
        return observable;
    };
    AuthService.prototype.addResearcherToDatabase = function (email, firstName, lastName) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.http.post('http://localhost:51630/api/researchers/new', {
                email: email,
                firstName: firstName,
                lastName: lastName
            })
                .subscribe(function (res) {
                observer.next(true);
            }, function (error) {
                observer.error(error);
            });
        });
        return observable;
    };
    AuthService.prototype.setSession = function (authResult, email) {
        console.log('expires in: ' + authResult.expiresIn);
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify(Date.now() + ((+authResult.expiresIn) * 1000));
        console.log('now: ' + Date.now());
        console.log('expires at: ' + expiresAt);
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        localStorage.setItem('refresh_token', authResult.refreshToken);
        localStorage.setItem('user_mail', email);
    };
    AuthService.prototype.setTokens = function (authResult) {
        console.log('set tokens');
        console.log('expires in: ' + authResult.expiresIn);
        console.log(authResult);
        var expiresAt = JSON.stringify(Date.now() + ((+authResult.expiresIn) * 1000));
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.getAccessToken = function () {
        return localStorage.getItem('access_token');
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('user_mail');
    };
    AuthService.prototype.isAuthenticated = function () {
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return Date.now() < expiresAt;
    };
    AuthService.prototype.setCurrentUser = function (email) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            var options = _this.getAuthorizationOptions();
            _this.http.get('http://localhost:51630/api/researchers?email=' + email, options)
                .subscribe(function (res) {
                var researcher = res.json();
                var currentUser = new User(researcher.researcherID, researcher.email, researcher.firstName, researcher.lastName);
                _this.currentUser = currentUser;
                observer.next(_this.currentUser);
            });
        });
        return observable;
    };
    AuthService.prototype.getAuthorizationHeader = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]();
        header.append('Authorization', 'Bearer ' + this.getAccessToken());
        return header;
    };
    AuthService.prototype.getAuthorizationOptions = function () {
        var header = this.getAuthorizationHeader();
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        return options;
    };
    AuthService.prototype.getAuthorizationOptionsFromHeaders = function (headers) {
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return options;
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            if (_this.isAuthenticated()) {
                _this.setCurrentUser(localStorage.getItem('user_mail'))
                    .subscribe(function (res) {
                    console.log(res);
                    _this.schedualTokenRefresh();
                    observer.next(true);
                });
            }
            else {
                observer.next(false);
            }
        });
        return observable;
    };
    AuthService.prototype.schedualTokenRefresh = function () {
        var now = Date.now();
        var expiresAt = localStorage.getItem('expires_at');
        console.log(+expiresAt);
        var timeBetween = +expiresAt - now;
        console.log('refresh in: ' + timeBetween);
        var that = this;
        setTimeout(function () { that.getNewAccessToken(); }, timeBetween);
    };
    AuthService.prototype.getNewAccessToken = function () {
        var _this = this;
        console.log('get new token');
        var refreshToken = localStorage.getItem('refresh_token');
        this.http.post('https://teunv.eu.auth0.com/oauth/token', {
            grant_type: 'refresh_token',
            client_id: 'qA7vUJsbKYq_e5vCjk-CjqoqfCF24yAN',
            refresh_token: refreshToken
        })
            .subscribe(function (result) {
            var res = result.json();
            _this.setTokens({
                'accessToken': res.access_token,
                'idToken': res.id_token,
                'expiresIn': res.expires_in
            });
            _this.schedualTokenRefresh();
        });
    };
    AuthService.prototype.resetPassword = function (email) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.auth0.changePassword({
                connection: 'Username-Password-Authentication',
                email: email
            }, function (err, resp) {
                if (err) {
                    observer.next(false);
                }
                else {
                    observer.next(true);
                }
            });
        });
        return observable;
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthService);

var User = (function () {
    function User(researcherID, email, firstName, lastName) {
        this.researcherID = researcherID;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
}());
var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/services/question.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionService = (function () {
    function QuestionService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.apiUrl = 'http://localhost:51630/api/';
    }
    QuestionService.prototype.getQuestions = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.apiUrl + 'questions')
                .subscribe(function (res) {
                observer.next(res.json());
            });
        });
        return observable;
    };
    QuestionService.prototype.getAllSessionQuestions = function (sessionId) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            var options = _this.authService.getAuthorizationOptions();
            _this.http.get(_this.apiUrl + 'questions/sessions/' + sessionId, options)
                .subscribe(function (res) {
                observer.next(res.json());
            });
        });
        return observable;
    };
    QuestionService.prototype.createNewQuestion = function (question) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            var options = _this.authService.getAuthorizationOptions();
            _this.http.post(_this.apiUrl + 'questions/new', question, options)
                .subscribe(function (res) {
                observer.next(res.json());
            });
        });
        return observable;
    };
    return QuestionService;
}());
QuestionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], QuestionService);

var _a, _b;
//# sourceMappingURL=question.service.js.map

/***/ }),

/***/ "../../../../../src/services/researcher.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResearcherService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResearcherService = (function () {
    function ResearcherService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.apiUrl = 'http://localhost:51630/api/';
    }
    ResearcherService.prototype.getResearcherByMail = function (email) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            var options = _this.authService.getAuthorizationOptions();
            _this.http.get(_this.apiUrl + 'researchers?email=' + email, options)
                .subscribe(function (res) {
                observer.next(res.json());
            });
        });
        return observable;
    };
    ResearcherService.prototype.getSubjectsFromResearcher = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            var researcherId = _this.authService.currentUser.researcherID;
            var options = _this.authService.getAuthorizationOptions();
            _this.http.get(_this.apiUrl + 'researchers/' + researcherId + '/subjects', options)
                .subscribe(function (res) {
                observer.next(res.json());
            });
        });
        return observable;
    };
    ResearcherService.prototype.updateCurrentResearcher = function (firstName, lastName) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            var researcherId = _this.authService.currentUser.researcherID;
            var options = _this.authService.getAuthorizationOptions();
            _this.http.put(_this.apiUrl + 'researchers/' + researcherId, { FirstName: firstName, LastName: lastName }, options)
                .subscribe(function (res) {
                _this.authService.currentUser = res.json();
                observer.next(res.json());
            });
        });
        return observable;
    };
    ResearcherService.prototype.inviteResearchers = function (emails) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            var researcherId = _this.authService.currentUser.researcherID;
            var options = _this.authService.getAuthorizationOptions();
            _this.http.post(_this.apiUrl + 'researchers/' + researcherId, { Emails: emails }, options)
                .subscribe(function (res) {
                observer.next(res);
            });
        });
        return observable;
    };
    return ResearcherService;
}());
ResearcherService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], ResearcherService);

var _a, _b;
//# sourceMappingURL=researcher.service.js.map

/***/ }),

/***/ "../../../../../src/services/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__researcher_service__ = __webpack_require__("../../../../../src/services/researcher.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SessionService = (function () {
    function SessionService(http, authService, researcherService) {
        this.http = http;
        this.authService = authService;
        this.researcherService = researcherService;
        this.apiUrl = 'http://localhost:51630/api/';
    }
    SessionService.prototype.updateSession = function (sessionID, session) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            var options = _this.authService.getAuthorizationOptions();
            _this.http.put(_this.apiUrl + 'sessions/' + sessionID, session, options)
                .subscribe(function (res) {
                observer.next(res);
            });
        });
        return observable;
    };
    SessionService.prototype.getSessions = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            var researcherId = _this.authService.currentUser.researcherID;
            var options = _this.authService.getAuthorizationOptions();
            _this.http.get(_this.apiUrl + 'researchers/' + researcherId + '/sessions/closed', options)
                .subscribe(function (res) {
                observer.next(res.json());
            });
        });
        return observable;
    };
    SessionService.prototype.getSavedSessions = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            var researcherId = _this.authService.currentUser.researcherID;
            var options = _this.authService.getAuthorizationOptions();
            _this.http.get(_this.apiUrl + 'researchers/' + researcherId + '/sessions/saved', options)
                .subscribe(function (res) {
                observer.next(res.json());
            });
        });
        return observable;
    };
    SessionService.prototype.getOpenSessions = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            var researcherId = _this.authService.currentUser.researcherID;
            var options = _this.authService.getAuthorizationOptions();
            _this.http.get(_this.apiUrl + 'researchers/' + researcherId + '/sessions/open', options)
                .subscribe(function (res) {
                observer.next(res.json());
            });
        });
        return observable;
    };
    SessionService.prototype.getSessionDetails = function (sessionId) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            var researcherId = _this.authService.currentUser.researcherID;
            var options = _this.authService.getAuthorizationOptions();
            _this.http.get(_this.apiUrl + 'sessions/' + sessionId + '?researcherId=' + researcherId, options)
                .subscribe(function (res) {
                observer.next(res.json());
            }, function (err) {
                observer.error(err);
            });
        });
        return observable;
    };
    SessionService.prototype.getSessionFullDetails = function (sessionId) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            var researcherId = _this.authService.currentUser.researcherID;
            var options = _this.authService.getAuthorizationOptions();
            _this.http.get(_this.apiUrl + 'sessions/' + sessionId + '/full?researcherId=' + researcherId, options)
                .subscribe(function (res) {
                observer.next(res.json());
            }, function (err) {
                observer.error(err);
            });
        });
        return observable;
    };
    SessionService.prototype.toggleSession = function (sessionId, turnSessionOn) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            var researcherId = _this.authService.currentUser.researcherID;
            var options = _this.authService.getAuthorizationOptions();
            _this.http.post(_this.apiUrl + 'sessions/' + sessionId + '/start?start=' + turnSessionOn + '&researcherId=' + researcherId, {}, options)
                .subscribe(function (res) {
                observer.next(res.json());
            });
        });
        return observable;
    };
    SessionService.prototype.getSessionQuestions = function (sessionId) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            var researcherId = _this.authService.currentUser.researcherID;
            var options = _this.authService.getAuthorizationOptions();
            _this.http.get(_this.apiUrl + 'sessions/' + sessionId + '/questions?researcherId=' + researcherId, options)
                .subscribe(function (res) {
                observer.next(res.json());
            });
        });
        return observable;
    };
    SessionService.prototype.getSessionSubjects = function (sessionId) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            var researcherId = _this.authService.currentUser.researcherID;
            var options = _this.authService.getAuthorizationOptions();
            _this.http.get(_this.apiUrl + 'sessions/' + sessionId + '/subjects?researcherId=' + researcherId, options)
                .subscribe(function (res) {
                observer.next(res.json());
            });
        });
        return observable;
    };
    SessionService.prototype.getSessionResearchers = function (sessionId) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            var researcherId = _this.authService.currentUser.researcherID;
            var options = _this.authService.getAuthorizationOptions();
            _this.http.get(_this.apiUrl + 'sessions/' + sessionId + '/researchers?researcherId=' + researcherId, options)
                .subscribe(function (res) {
                observer.next(res.json());
            });
        });
        return observable;
    };
    SessionService.prototype.addResearcherToSession = function (sessionId, newResearcherEmail, isAdmin) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            var options = _this.authService.getAuthorizationOptions();
            var researcherId = _this.authService.currentUser.researcherID;
            _this.researcherService.getResearcherByMail(newResearcherEmail)
                .subscribe(function (res) {
                console.log(res);
                _this.http.post(_this.apiUrl + 'sessions/' + sessionId + '/researchers/add?researcherId=' + researcherId + '&newResearcherId=' + res.researcherID + '&isAdmin=' + isAdmin, {}, options)
                    .subscribe(function (ress) {
                    observer.next(ress.json());
                });
            });
        });
        return observable;
    };
    SessionService.prototype.removeResearcherFromSession = function (sessionId, researcherId) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            var options = _this.authService.getAuthorizationOptions();
            _this.http.delete(_this.apiUrl + 'sessions/' + sessionId + '/researchers/' + researcherId, options)
                .subscribe(function (res) {
                observer.next(res);
            });
        });
        return observable;
    };
    SessionService.prototype.changeAdminStatus = function (sessionId, researcherId, isAdmin) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            var headers = _this.authService.getAuthorizationHeader();
            headers.append('Content-Type', 'application/json');
            var options = _this.authService.getAuthorizationOptionsFromHeaders(headers);
            _this.http.put(_this.apiUrl + 'sessions/' + sessionId + '/researchers/' + researcherId, { isAdmin: isAdmin }, options)
                .subscribe(function (res) {
                observer.next(res);
            });
        });
        return observable;
    };
    SessionService.prototype.removeSession = function (sessionId) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            var currentResearcherId = _this.authService.currentUser.researcherID;
            var options = _this.authService.getAuthorizationOptions();
            _this.http.delete(_this.apiUrl + 'sessions/' + sessionId + '?researcherId=' + currentResearcherId, options)
                .subscribe(function (res) {
                observer.next(res);
            });
        });
        return observable;
    };
    SessionService.prototype.createNewSession = function (session) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            var currentResearcherId = _this.authService.currentUser.researcherID;
            session.researcherIDs.push(currentResearcherId);
            session.adminIDs.push(currentResearcherId);
            var options = _this.authService.getAuthorizationOptions();
            _this.http.post(_this.apiUrl + 'sessions/new', session, options)
                .subscribe(function (res) {
                observer.next(res.json());
            });
        });
        return observable;
    };
    return SessionService;
}());
SessionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__researcher_service__["a" /* ResearcherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__researcher_service__["a" /* ResearcherService */]) === "function" && _c || Object])
], SessionService);

var _a, _b, _c;
//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ "../../../../../src/services/subject.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubjectService = (function () {
    function SubjectService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.apiUrl = 'http://localhost:51630/api/';
    }
    SubjectService.prototype.getSubjectDetails = function (subjectId) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            var researcherId = _this.authService.currentUser.researcherID;
            var options = _this.authService.getAuthorizationOptions();
            _this.http.get(_this.apiUrl + 'subjects/' + subjectId + '?researcherId=' + researcherId, options)
                .subscribe(function (res) {
                observer.next(res.json());
            });
        });
        return observable;
    };
    SubjectService.prototype.getSubjectAnswers = function (subjectId) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            var researcherId = _this.authService.currentUser.researcherID;
            var options = _this.authService.getAuthorizationOptions();
            _this.http.get(_this.apiUrl + 'subjects/' + subjectId + '/answers?researcherId=' + researcherId, options)
                .subscribe(function (res) {
                observer.next(res.json());
            }, function (err) {
                observer.error(err);
            });
        });
        return observable;
    };
    return SubjectService;
}());
SubjectService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], SubjectService);

var _a, _b;
//# sourceMappingURL=subject.service.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map