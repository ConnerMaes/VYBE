import { Component, OnInit } from '@angular/core';
import {Subject} from '../../../../models/Subject.model';
import {Http} from '@angular/http';
import {ActivatedRoute, Router} from "@angular/router";
import {Session} from "../../../../models/Session.model";
import {SessionService} from "../../../../services/session.service";

@Component({
  selector: 'app-session-subjects',
  templateUrl: './session-subjects.component.html',
  styleUrls: ['./session-subjects.component.css']
})
export class SessionSubjectsComponent implements OnInit {
  loaded = false;
  session: Session = null;
  subjects = [];
  displaySubjects = [];
  sessionNotFoundError = false;

  constructor(private http: Http, private route: ActivatedRoute, private router: Router, private sessionService: SessionService) { }

  ngOnInit() {
    const sessionId = this.route.snapshot.params['id'];
    this.retrieveSessionDetails(sessionId);
    this.retrieveSubjects(sessionId);
  }

  retrieveSubjects(sessionId: string) {
    this.sessionService.getSessionSubjects(+sessionId)
      .subscribe(res => {
        this.subjects = res;
        this.displaySubjects = this.subjects.slice();
      });
  }

  retrieveSessionDetails(sessionId: string) {
    this.sessionService.getSessionDetails(+sessionId)
      .subscribe(res => {
        this.session = res;
        this.loaded = true;
      });
  }

  selectSubject(subject: any) {
    const route = 'dashboard/subjects/' + subject.subjectID + '/answers';
    this.router.navigate([route]);
  }

  toSessionDetails() {
    const route = 'dashboard/sessions/' + this.session.sessionID;
    this.router.navigate([route]);
  }

}
