import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  passwordMatchError = false;
  inviteError = false;
  contentClass = 'hidden';
  cardClass = 'card';

  constructor(public authService: AuthService, private router: Router) {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('background-image');
  }

  ngOnInit() {
    setTimeout(() => {this.contentClass = 'visible'; }, 100);
  }

  goBackToLogin() {
    this.cardClass = 'card animation-smaller';
    this.contentClass = 'hidden';
    setTimeout(() => {this.router.navigate(['/login'], { queryParams: {fromSignup: true}}); }, 1000);
  }

  onSignup(form: any) {
    const email = form.controls.email.value;
    const password = form.controls.password.value;
    const passwordrpt = form.controls.passwordrpt.value;
    const firstName = form.controls.firstName.value;
    const lastName = form.controls.lastName.value;
    // if (!form.controls.agree.value) {
      // return;
    // }
    if (password === passwordrpt) {
      this.passwordMatchError = false;
      this.inviteError = false;
      this.authService.signUp(email, password, firstName, lastName)
        .subscribe(res => {
          this.goBackToLogin();
        }, error => {
          this.inviteError = true;
        });
    } else {
      this.passwordMatchError = true;
    }
  }
}
