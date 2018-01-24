import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Form, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Question} from '../../../../models/Qeustion.model';
import {Researcher} from '../../../../models/Researcher.model';
import {Http} from '@angular/http';
import {QuestionService} from "../../../../services/question.service";
import {ResearcherService} from "../../../../services/researcher.service";
import {SessionService} from "../../../../services/session.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-session',
  templateUrl: './new-session.component.html',
  styleUrls: ['./new-session.component.css']
})
export class NewSessionComponent implements OnInit {
  @ViewChild('searchBar') searchBar: any;
  @ViewChild('addResearcherBar') addResearcherBar: any;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  sessionName;
  sessionPassword = '';
  questions: Question[] = [];
  questionsLoaded = false;
  displayQuestions: Question[] = [];
  selectedQuestions: Question[] = [];
  researchers: Researcher[] = [];
  adminIDs: number[] = [];
  researcherNotFoundError = false;
  newQuestion = false;
  showNewQuestionError = false;
  selectedScaleType = 'gradient';
  showPercentage = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private questionService: QuestionService, private researcherService: ResearcherService, private  sessionService: SessionService) { }

  ngOnInit() {
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
  }

  retrieveQuestions() {
    this.questionService.getQuestions()
      .subscribe(res => {
        this.questions = res;
        this.displayQuestions = this.questions.slice();
        this.questionsLoaded = true;
      });
  }

  setName(event: any) {
    this.sessionName = event.srcElement.value;
  }

  setPassword(event: any) {
    this.sessionPassword = event.srcElement.value;
  }

  selectQuestion(question: Question) {
    this.selectedQuestions.push(question);
    for (let i = 0; i < this.questions.length; i++) {
      if (question.questionID === this.questions[i].questionID) {
        this.questions.splice(i, 1);
      }
    }
    this.clearFilter();
  }

  removeQuestion(question: Question) {
    this.questions.push(question);
    for (let i = 0; i < this.selectedQuestions.length; i++) {
      if (question.questionID === this.selectedQuestions[i].questionID) {
        this.selectedQuestions.splice(i, 1);
      }
    }
    this.displayQuestions = this.questions.slice();
  }

  addNewQuestion(questionText: string, upperValue: string, lowerValue: string) {
    this.questionService.createNewQuestion({
      questionText: questionText,
      upperValue: upperValue,
      lowerValue: lowerValue
    })
      .subscribe(res => {
        const response: Question = res;
        this.questions.push(response);
        this.newQuestion = false;
        this.clearFilter();
      });
  }

  openQuestionForm() {
    this.newQuestion = !this.newQuestion;
    this.showNewQuestionError = false;
  }

  onSubmitNewQuestion(form: NgForm) {
    console.log(form);
    if (form.valid) {
      this.addNewQuestion(form.value.newQuestionText, form.value.newQuestionUpperValue, form.value.newQuestionLowerValue);
      this.showNewQuestionError = false;
    } else {
      this.showNewQuestionError = true;
    }
  }

  togglePercentage() {
    this.showPercentage = !this.showPercentage;
  }

  filterList(filterString: string) {
    this.displayQuestions = [];
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i].questionText.includes(filterString)) {
        this.displayQuestions.push(this.questions[i]);
      }
    }
  }

  clearFilter() {
    this.searchBar.nativeElement.value = '';
    this.displayQuestions = this.questions.slice();
  }

  onChange(event: any) {
    this.filterList(event.srcElement.value);
  }

  onKeyDown(event: any) {
    if (event.key === 'Enter') {
      this.addResearcher();
    }
  }

  addResearcher() {
    this.getResearcherFromDatabase(this.addResearcherBar.nativeElement.value);
    this.addResearcherBar.nativeElement.value = '';
  }

  onToggleAdmin(event: any, researcher: any) {
    if (event.checked) {
      this.adminIDs.push(researcher.researcherID);
    } else {
      const index = this.adminIDs.lastIndexOf(researcher.researcherID);
      this.adminIDs.splice(index, 1);
    }
    console.log(this.adminIDs);
  }

  getResearcherFromDatabase(email: string) {
    this.researcherService.getResearcherByMail(email)
      .subscribe(res => {
        this.researchers.push(res);
      });
  }

  removeResearcherFromList(index: number) {
    this.researchers.splice(index, 1);
  }

  getSessionResult() {
    const questionIDs = [];
    for (let i = 0; i < this.selectedQuestions.length; i++) {
      questionIDs.push(this.selectedQuestions[i].questionID);
    }
    if (questionIDs.length === 0) {
      return;
    }
    const researcherIDs = [];
    for (let i = 0; i < this.researchers.length; i++) {
      researcherIDs.push(this.researchers[i].researcherID);
    }
    const result = {
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
  }

  startSession() {
    const result = this.getSessionResult();
    this.postResult(result);
  }

  saveSession() {
    const result = this.getSessionResult();
    result.isConcept = true;
    this.postResult(result);
  }

  postResult(result: any) {
    if (result) {
      this.sessionService.createNewSession(result)
        .subscribe(res => {
          console.log(res);
          const path = '/dashboard/sessions/' + res.sessionID;
          this.router.navigate([path]);
        });
    }
  }

}
