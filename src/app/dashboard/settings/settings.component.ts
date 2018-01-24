import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {ResearcherService} from "../../../services/researcher.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  firstName = '';
  lastName = '';
  invites = [];
  wrongEmail = '';

  constructor(private authService: AuthService, private researcherService: ResearcherService, private router: Router) { }

  ngOnInit() {
    this.firstName = this.authService.currentUser.firstName;
    this.lastName = this.authService.currentUser.lastName;
  }

  resetPassword() {
    const currentUserEmail = this.authService.currentUser.email;
    this.authService.resetPassword(currentUserEmail)
      .subscribe(res => {
        window.alert('Er is een reset email verstuurd');
      });
  }

  onChangeName() {
    if (this.nameChangeIsValid()) {
      this.researcherService.updateCurrentResearcher(this.firstName, this.lastName)
        .subscribe(res => {
          this.router.navigate(['/dashboard']);
        });
    }
  }

  nameChangeIsValid() {
    return (this.firstName !== '' && this.lastName !== '');
  }

  onAddInvite(event) {
    const email = event.srcElement.value;
    if (this.checkIfEmailAddress(email)) {
      this.invites.push(email);
      event.srcElement.value = '';
      this.wrongEmail = '';
    } else {
      this.wrongEmail = email;
    }
  }

  onRemoveInvite(index) {
    this.invites.splice(index, 1);
  }

  sendInvitations() {
    this.researcherService.inviteResearchers(this.invites)
      .subscribe(res => {
        alert('Invitations have been sent');
        this.invites = [];
      });
  }

  checkIfEmailAddress(email: string) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
