import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-delete-session-modal',
  templateUrl: './delete-session-modal.component.html',
  styleUrls: ['./delete-session-modal.component.css']
})
export class DeleteSessionModalComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteSessionModalComponent>) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.dialogRef.close({
      remove: true
    });
  }
}
