import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {SessionService} from "../../../services/session.service";

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  currentUserName = '';
  openSessionCount = 0;

  constructor(private authService: AuthService, private sessionSerivce: SessionService) {
    const body = document.getElementsByTagName('body')[0];
    // body.classList.remove("className");
    body.classList.add('white-background');
   }

  ngOnInit() {
    this.currentUserName = this.authService.currentUser.firstName + ' ' + this.authService.currentUser.lastName;
    this.sessionSerivce.getOpenSessions()
      .subscribe(res => {
        this.openSessionCount = res.length;
      });
  }

}
