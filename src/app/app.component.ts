import { Component } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {QuestionService} from "../services/question.service";
import {ResearcherService} from "../services/researcher.service";
import {SessionService} from "../services/session.service";
import {SubjectService} from "../services/subject.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService, QuestionService, ResearcherService, SessionService, SubjectService]
})
export class AppComponent {
  title = 'app';

  constructor() {
    
  }
}
