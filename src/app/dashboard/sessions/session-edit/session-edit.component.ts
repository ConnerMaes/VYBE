import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionService} from "../../../../services/question.service";
import {SessionService} from "../../../../services/session.service";
import {ExistingQuestionModalComponent} from "./existing-question-modal/existing-question-modal.component";
import {MatDialog, MatDialogRef} from "@angular/material";
import {NewQuestionModalComponent} from "./new-question-modal/new-question-modal.component";

@Component({
  selector: 'app-session-edit',
  templateUrl: './session-edit.component.html',
  styleUrls: ['./session-edit.component.css']
})
export class SessionEditComponent implements OnInit {
  name = '';
  password = '';
  currentSession;
  selectedScaleType = 'gradient';
  showPercentage = false;
  selectedQuestions = [];
  otherQuestions = [];
  displayQuestions = [];
  loaded = false;
  notFoundError = false;

  existingQuestionDialogRef: MatDialogRef<ExistingQuestionModalComponent>;
  newQuestionDialogRef: MatDialogRef<NewQuestionModalComponent>;

  constructor(private route: ActivatedRoute, private questionService: QuestionService, private sessionService: SessionService, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    const sessionID = this.route.snapshot.params['id'];
    this.getSessionDetails(sessionID);
    this.getQuestions(sessionID);
  }

  getSessionDetails(sessionId) {
    this.sessionService.getSessionDetails(sessionId)
      .subscribe(res => {
        this.currentSession = res;
        this.name = this.currentSession.name;
        this.password = this.currentSession.password;
        this.selectedScaleType = this.currentSession.scaleType;
        this.showPercentage = this.currentSession.showPercentage;
        this.loaded = true;
      }, err => {
        this.notFoundError = true;
    });
  }

  getQuestions(sessionId) {
    this.questionService.getAllSessionQuestions(sessionId)
      .subscribe(res => {
        this.selectedQuestions = res.selected;
        this.otherQuestions = res.other;
        this.displayQuestions = this.otherQuestions;
      });
  }

  removeQuestion(question) {
    const index = this.selectedQuestions.indexOf(question);
    this.selectedQuestions.splice(index, 1);
    this.otherQuestions.push(question);
  }

  openExistingQuestionDialog() {
    this.existingQuestionDialogRef = this.dialog.open(ExistingQuestionModalComponent, {
      data: { questions: this.otherQuestions}
    });

    this.existingQuestionDialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result) {
        for(let i = 0; i < result.selected.length; i++) {
          this.selectedQuestions.push(result.selected[i]);
        }
        this.otherQuestions = [];
        for(let i = 0; i < result.other.length; i++) {
          this.otherQuestions.push(result.other[i]);
        }
      }
    });
  }

  openNewQuestionDialog() {
    this.newQuestionDialogRef = this.dialog.open(NewQuestionModalComponent);

    this.newQuestionDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.questionService.createNewQuestion(result)
          .subscribe(res => {
            this.selectedQuestions.push(res);
          });
      }
    });
  }

  saveChanges() {
    const questionIDs = [];
    for (let i = 0; i < this.selectedQuestions.length; i++) {
      questionIDs.push(this.selectedQuestions[i].questionID);
    }
    const updatedSession = {
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
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/dashboard/sessions/' + this.currentSession.sessionID]);
      });
  }

  cancelChanges() {
    this.router.navigate(['/dashboard/sessions/' + this.currentSession.sessionID]);
  }
}
