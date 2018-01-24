import {Component, OnInit, ViewChild} from '@angular/core';
import {QuestionService} from "../../../services/question.service";
import {NewQuestionModalComponent} from "../sessions/session-edit/new-question-modal/new-question-modal.component";
import {MatDialog, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  @ViewChild('searchBar') searchBar: any;
  newQuestionDialogRef: MatDialogRef<NewQuestionModalComponent>;

  questions = [];
  displayQuestions = [];

  constructor(private questionService: QuestionService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.questionService.getQuestions()
      .subscribe(res => {
        this.questions = res;
        this.clearFilter();
      });
  }

  openNewQuestionDialog() {
    this.newQuestionDialogRef = this.dialog.open(NewQuestionModalComponent);

    this.newQuestionDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.questionService.createNewQuestion(result)
          .subscribe(res => {
            this.questions.push(res);
            this.clearFilter();
          });
      }
    });
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

}
