import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {QuestionService} from "../../../../../services/question.service";

@Component({
  selector: 'app-new-question-modal',
  templateUrl: './new-question-modal.component.html',
  styleUrls: ['./new-question-modal.component.css']
})
export class NewQuestionModalComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<NewQuestionModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onSubmit(form) {
    const newQuestion = {
      questionText: form.controls.questionText.value,
      upperValue: form.controls.upperValue.value,
      lowerValue: form.controls.lowerValue.value
    };
    this.dialogRef.close(newQuestion);
  }
}
