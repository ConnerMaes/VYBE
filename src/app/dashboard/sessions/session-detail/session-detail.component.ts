import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Session} from '../../../../models/Session.model';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Question} from "../../../../models/Qeustion.model";
import {Researcher} from "../../../../models/Researcher.model";
import {Subject} from "../../../../models/Subject.model";
import {SessionService} from "../../../../services/session.service";
import {AuthService} from "../../../../services/auth.service";
import {MatDialog, MatDialogRef} from "@angular/material";
import {AddResearcherModalComponent} from "./add-researcher-modal/add-researcher-modal.component";
import {ResearcherService} from "../../../../services/researcher.service";
import {CopySessionModalComponent} from "./copy-session-modal/copy-session-modal.component";
import {DeleteSessionModalComponent} from "./delete-session-modal/delete-session-modal.component";

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.css']
})
export class SessionDetailComponent implements OnInit {
  session: Session;
  questions: Question[] = [];
  admins: Researcher[] = [];
  watchers: Researcher[] = [];
  subjects: Subject[] = [];
  isAdmin = false;
  loaded = false;
  isFullScreen = false;
  notFoundError = false;

  addResearcherDialogRef: MatDialogRef<AddResearcherModalComponent>;
  copySessionDialogRef: MatDialogRef<CopySessionModalComponent>;
  deleteSessionDialogRef: MatDialogRef<DeleteSessionModalComponent>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private sessionService: SessionService,
              private authService: AuthService,
              public dialog: MatDialog,
              private researcherService: ResearcherService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        const sessionID = params['id'];
        this.retrieveSessionDetails(sessionID);
      }
    );
  }

  retrieveSessionDetails(sessionId: string) {
    this.sessionService.getSessionFullDetails(+sessionId)
      .subscribe(res => {
        this.session = res.session;
        this.admins = res.admins;
        this.watchers = res.watchers;
        this.questions = res.questions;
        this.subjects = res.subjects;
        this.isAdmin = res.isAdmin;
        this.loaded = true;
      },
        err => {
          this.notFoundError = true;
        });
  }

  toggleFullScreen() {
    this.isFullScreen = !this.isFullScreen;
  }

  editSession() {
    this.router.navigate(['/dashboard/sessions/' + this.session.sessionID + '/edit']);
  }

  openAddResearcherDialog() {
    this.addResearcherDialogRef = this.dialog.open(AddResearcherModalComponent);

    this.addResearcherDialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.onAddResearcher(result.email, result.isAdmin);
      }
    });
  }

  onAddResearcher(email: string, isAdmin: boolean) {
    if (this.authService.currentUser.email !== email) {
      this.sessionService.addResearcherToSession(this.session.sessionID, email, isAdmin)
        .subscribe(res => {
          this.admins = res.admins;
          this.watchers = res.watchers;
        });
    }
  }

  openCopySessionDialog() {
    this.copySessionDialogRef = this.dialog.open(CopySessionModalComponent);

    this.copySessionDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onCopySession(result.name, result.copyResearchers);
      }
    });
  }

  onCopySession(name: string, copyResearchers: boolean) {
    console.log('copyResearchers: ' + copyResearchers);
    const questionIDs = [];
    for (let i = 0; i  < this.questions.length; i++) {
      questionIDs.push(this.questions[i].questionID);
    }
    const researcherIDs = [];
    const adminIDs = [this.authService.currentUser.researcherID];
    if (copyResearchers) {
      for (let i = 0; i  < this.watchers.length; i++) {
        researcherIDs.push(this.watchers[i].researcherID);
      }
      for (let i = 0; i  < this.admins.length; i++) {
        if (this.admins[i].researcherID !== this.authService.currentUser.researcherID) {
          adminIDs.push(this.admins[i].researcherID);
        }
      }
    }

    const newSession = {
      name: name,
      password: this.session.password,
      scaleType: this.session.scaleType,
      showPercentage: this.session.showPercentage,
      questionIDs: questionIDs,
      researcherIDs: researcherIDs,
      adminIDs: adminIDs,
      isConcept: true
    };
    console.log(newSession);

    this.sessionService.createNewSession(newSession)
      .subscribe(res => {
        this.router.navigate(['/dashboard/sessions/' + res.sessionID]);
      });
  }

  openRemoveSessionDialog() {
    this.deleteSessionDialogRef = this.dialog.open(DeleteSessionModalComponent);

    this.deleteSessionDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.sessionService.removeSession(this.session.sessionID)
          .subscribe(res => {
            if (this.session.isConcept) {
              this.router.navigate(['dashboard/sessions/saved']);
            } else if (this.session.isOpen) {
              this.router.navigate(['dashboard/sessions']);
            } else {
              this.router.navigate(['dashboard/sessions/closed']);
            }
          });
      }
    });
  }

  closeSession() {
    if (window.confirm('Are you sure you want to close the session?')) {
      this.sessionService.toggleSession(this.session.sessionID, false)
        .subscribe(res => {
          this.session = res;
        });
    }
  }

  openSession() {
    console.log(this.session.sessionID);
    this.sessionService.toggleSession(this.session.sessionID, true)
      .subscribe(res => {
        this.session = res;
      });
  }

  removeResearcher(researcher: Researcher, isAdmin: boolean) {
    this.sessionService.removeResearcherFromSession(this.session.sessionID, researcher.researcherID)
      .subscribe(res => {
        if (isAdmin) {
          this.removeFromAdmins(researcher);
        } else {
          this.removeFromWatchers(researcher);
        }
      });
  }

  changeAdminStatus(researcher: Researcher, isAdmin: boolean) {
    this.sessionService.changeAdminStatus(this.session.sessionID, researcher.researcherID, !isAdmin)
      .subscribe(res => {
        if (isAdmin) {
          this.watchers.push(researcher);
          this.removeFromAdmins(researcher);
        } else {
          this.admins.push(researcher);
          this.removeFromWatchers(researcher);
        }
      });
  }

  getCSVFile() {
    this.sessionService.getSessionCSV(this.session.sessionID);
  }

  private removeFromAdmins(researcher: Researcher) {
    const index = this.admins.indexOf(researcher);
    this.admins.splice(index, 1);
  }

  private removeFromWatchers(researcher: Researcher) {
    const index = this.watchers.indexOf(researcher);
    this.watchers.splice(index, 1);
  }

  selectSubject(subject: any) {
    const route = 'dashboard/subjects/' + subject.subjectID + '/answers';
    this.router.navigate([route], { queryParams: {sessionId: this.session.sessionID}});
  }

  emailAddressIsMe(email: string) {
    if (email === this.authService.currentUser.email) {
      return true;
    } else {
      return false;
    }
  }
}
