import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from '@angular/router';
import {ResetPasswordModalComponent} from "./reset-password-modal/reset-password-modal.component";
import {MatDialog, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginButtonDisabled = false;
  contentClass = 'visible';
  cardClass = 'card';
  resetPasswordDialogRef: MatDialogRef<ResetPasswordModalComponent>;
  wrongEmailPasswordError = false;
  serverError = false;

  constructor(public authService: AuthService, public router: Router, private route: ActivatedRoute, private dialog: MatDialog) {
    const body = document.getElementsByTagName('body')[0];
    // body.classList.remove("className");
    body.classList.add('background-image');
   }

  ngOnInit() {
    const fromSignup = this.route.snapshot.queryParams['fromSignup'];
    if (fromSignup) {
      this.contentClass = 'hidden';
      setTimeout(() => {this.contentClass = 'visible'; }, 100);
    }
  }

  goToSignup() {
    this.contentClass = 'hidden';
    this.cardClass = 'card animation-larger';
    setTimeout(() => {this.router.navigate(['/signup']); }, 1000);
  }

  onLogin(form: any) {
    const email = form.controls.email.value;
    const password = form.controls.password.value;
    this.loginButtonDisabled = true;
    this.authService.login(email, password)
      .subscribe(res => {
        this.router.navigate(['/dashboard']);
      }, err => {
        console.log(err);
        this.loginButtonDisabled = false;
        if (err.statusCode === 403) {
          this.wrongEmailPasswordError = true;
        } else {
          this.serverError = true;
        }
      });
  }

  openResetPasswordModal() {
    this.resetPasswordDialogRef = this.dialog.open(ResetPasswordModalComponent);

    this.resetPasswordDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authService.resetPassword(result.email)
          .subscribe(res => {
            if (res) {
              // window.alert('An email to reset your password has been sent to ' + result.email);
            }
          });
      }
    });
  }
}
