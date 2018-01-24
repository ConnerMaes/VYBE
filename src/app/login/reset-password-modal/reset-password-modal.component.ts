import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-reset-password-modal',
  templateUrl: './reset-password-modal.component.html',
  styleUrls: ['./reset-password-modal.component.css']
})
export class ResetPasswordModalComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ResetPasswordModalComponent>) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.dialogRef.close({
      email: form.controls.email.value,
    });
  }
}
