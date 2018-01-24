import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-existing-question-modal',
  templateUrl: './existing-question-modal.component.html',
  styleUrls: ['./existing-question-modal.component.css']
})
export class ExistingQuestionModalComponent implements OnInit {
  returnQuestions = [];
  questions = [];

  constructor(public dialogRef: MatDialogRef<ExistingQuestionModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data);
    this.questions = this.data.questions.splice();
  }

  onToggleQuestion(question) {
    const index = this.returnQuestions.indexOf(question);
    if (index < 0) {
      this.returnQuestions.push(question);
    } else {
      this.returnQuestions.splice(index, 1);
    }
  }

  onReturn() {
    const other = [];
    for(let i=0; i<this.data.questions.length; i++) {
      const index = this.returnQuestions.indexOf(this.data.questions[i]);
      if(index < 0) {
        other.push(this.data.questions[i]);
      }
    }
    this.dialogRef.close({
      selected: this.returnQuestions,
      other: other
    });
  }
}
