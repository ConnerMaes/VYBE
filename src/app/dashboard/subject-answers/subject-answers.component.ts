import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {Question} from "../../../models/Qeustion.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Subject} from "../../../models/Subject.model";
import {SubjectService} from "../../../services/subject.service";
import {SessionService} from "../../../services/session.service";

@Component({
  selector: 'app-subject-answers',
  templateUrl: './subject-answers.component.html',
  styleUrls: ['./subject-answers.component.css']
})
export class SubjectAnswersComponent implements OnInit {
  loaded = false;
  subject: Subject;
  questions: Question[] = [];
  displayQuestions: Question[] = [];
  sessions = [];
  selectedSession: any;
  sessionId;
  notFoundError = false;

  constructor(private router: Router, private route: ActivatedRoute, private subjectService: SubjectService, private sessionService: SessionService) { }

  ngOnInit() {
    this.sessionId = this.route.snapshot.queryParams['sessionId'];
    const subjectID = this.route.snapshot.params['id'];
    this.retrieveSubjectDetails(subjectID);
    this.retrieveSessionDetails(subjectID);
  }

  retrieveSubjectDetails(subjectId: string) {
    this.subjectService.getSubjectDetails(+subjectId)
      .subscribe(res => {
        this.subject = res;
        this.loaded = true;
      });
  }

  retrieveSessionDetails(subjectId: string) {
    this.subjectService.getSubjectAnswers(+subjectId)
      .subscribe(res => {
        this.questions = res.questions;
        this.displayQuestions = this.questions.slice();
        this.sessions = res.sessions;
        if (this.sessionId) {
          this.selectedSession = +this.sessionId;
          this.filterQuestions(+this.sessionId);
        } else {
          this.selectedSession = 'all';
        }
      }, err => {
        this.notFoundError = true;
      });
  }

  onChange(event) {
    if (event.value === 'all') {
      this.resetFilter();
    } else {
      this.filterQuestions(event.value);
    }
  }

  onGoToSession() {
    this.router.navigate(['dashboard/sessions/' + this.selectedSession]);
  }

  filterQuestions(sessionId: number) {
    const questionsBackup = this.questions.slice();
    this.displayQuestions = [];
    for(let i=0; i<questionsBackup.length; i++) {
      const answers = [];
      for(let j=0; j<questionsBackup[i].answers.length; j++) {
        if (questionsBackup[i].answers[j].sessionID === sessionId) {
          answers.push(questionsBackup[i].answers[j]);
        }
      }
      if (answers.length > 0) {
        const question = {
          lowerValue: questionsBackup[i].lowerValue,
          upperValue: questionsBackup[i].upperValue,
          questionText: questionsBackup[i].questionText,
          questionID: questionsBackup[i].questionID,
          answers: answers
        }
        this.displayQuestions.push(question);
      }
    }
  }

  resetFilter() {
    this.displayQuestions = this.questions;
  }

  getCSV() {
    this.sessionService.getSessionCSV(this.selectedSession, this.subject.subjectID);
  }

  CSVDisabled() {
    return this.selectedSession === 'all';
  }
}
