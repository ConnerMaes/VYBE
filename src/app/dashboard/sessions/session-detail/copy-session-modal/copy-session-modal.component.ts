import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-copy-session-modal',
  templateUrl: './copy-session-modal.component.html',
  styleUrls: ['./copy-session-modal.component.css']
})
export class CopySessionModalComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CopySessionModalComponent>) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.dialogRef.close({
      name: form.controls.name.value,
      copyResearchers: form.controls.copyResearchers.value
    });
  }
}
