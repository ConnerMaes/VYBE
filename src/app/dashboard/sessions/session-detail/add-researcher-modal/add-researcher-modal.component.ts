import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-add-researcher-modal',
  templateUrl: './add-researcher-modal.component.html',
  styleUrls: ['./add-researcher-modal.component.css']
})
export class AddResearcherModalComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddResearcherModalComponent>) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
    this.dialogRef.close({
      email: form.controls.email.value,
      isAdmin: form.controls.isAdmin.value
    });
  }
}
