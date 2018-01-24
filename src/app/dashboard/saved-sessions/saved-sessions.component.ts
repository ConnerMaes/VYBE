import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Form, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Session} from "../../../models/Session.model";
import {SessionService} from "../../../services/session.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-saved-sessions',
  templateUrl: './saved-sessions.component.html',
  styleUrls: ['./saved-sessions.component.css']
})
export class SavedSessionsComponent implements OnInit {
  @ViewChild('searchBar') searchBar: any;

  sessions: Session[] = [];
  displaySessions: Session[] = [];

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
    this.sessionService.getSavedSessions()
      .subscribe(res => {
        this.sessions = res;
        this.displaySessions = this.sessions.slice();
      });
  }

  filterList(filterString: string) {
    this.displaySessions = [];
    for (let i = 0; i < this.sessions.length; i++) {
      if (this.sessions[i].name.includes(filterString)) {
        this.displaySessions.push(this.sessions[i]);
      }
    }
  }

  clearFilter() {
    this.searchBar.nativeElement.value = '';
    this.displaySessions = this.sessions.slice();
  }

  onChange(event: any) {
    this.filterList(event.srcElement.value);
  }

  goToSessionDetail(session: Session) {
    const route = 'dashboard/sessions/' + session.sessionID;
    this.router.navigate([route]);
  }

}
