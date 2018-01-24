import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs/Observable';
import {ResearcherService} from "./researcher.service";

@Injectable()
export class SessionService {
  apiUrl = 'https://vybeapi1.azurewebsites.net/api/';

  constructor(private http: Http, private authService: AuthService, private researcherService: ResearcherService) {}

  public updateSession(sessionID: number, session: any): Observable<any> {
    const observable = new Observable(observer => {
      const options = this.authService.getAuthorizationOptions();
      this.http.put(this.apiUrl + 'sessions/' + sessionID, session, options)
        .subscribe(res => {
          observer.next(res);
        });
    });
    return observable;
  }

  public getSessions(): Observable<any> {
    const observable = new Observable(observer => {
      const researcherId = this.authService.currentUser.researcherID;
      const options = this.authService.getAuthorizationOptions();
      this.http.get(this.apiUrl + 'researchers/' + researcherId + '/sessions/closed', options)
        .subscribe(res => {
          observer.next(res.json());
        });
    });
    return observable;
  }

  public getSavedSessions(): Observable<any> {
    const observable = new Observable(observer => {
      const researcherId = this.authService.currentUser.researcherID;
      const options = this.authService.getAuthorizationOptions();
      this.http.get(this.apiUrl + 'researchers/' + researcherId + '/sessions/saved', options)
        .subscribe(res => {
          observer.next(res.json());
        });
    });
    return observable;
  }

  public getOpenSessions(): Observable<any> {
    const observable = new Observable(observer => {
      const researcherId = this.authService.currentUser.researcherID;
      const options = this.authService.getAuthorizationOptions();
      this.http.get(this.apiUrl + 'researchers/' + researcherId + '/sessions/open', options)
        .subscribe(res => {
          observer.next(res.json());
        });
    });
    return observable;
  }

  public getSessionDetails(sessionId: number): Observable<any> {
    const observable = new Observable(observer => {
      const researcherId = this.authService.currentUser.researcherID;
      const options = this.authService.getAuthorizationOptions();
      this.http.get(this.apiUrl + 'sessions/' + sessionId + '?researcherId=' + researcherId, options)
        .subscribe(res => {
          observer.next(res.json());
        }, err => {
          observer.error(err);
        });
    });
    return observable;
  }

  public getSessionFullDetails(sessionId: number): Observable<any> {
    const observable = new Observable(observer => {
      const researcherId = this.authService.currentUser.researcherID;
      const options = this.authService.getAuthorizationOptions();
      this.http.get(this.apiUrl + 'sessions/' + sessionId + '/full?researcherId=' + researcherId, options)
        .subscribe(res => {
          observer.next(res.json());
        }, err => {
          observer.error(err);
        });
    });
    return observable;
  }

  public toggleSession(sessionId: number, turnSessionOn: boolean): Observable<any> {
    const observable = new Observable(observer => {
      const researcherId = this.authService.currentUser.researcherID;
      const options = this.authService.getAuthorizationOptions();
      this.http.post(this.apiUrl + 'sessions/' + sessionId + '/start?start=' + turnSessionOn + '&researcherId=' + researcherId,{} , options)
        .subscribe(res => {
          observer.next(res.json());
        });
    });
    return observable;
  }

  public getSessionQuestions(sessionId: number): Observable<any> {
    const observable = new Observable(observer => {
      const researcherId = this.authService.currentUser.researcherID;
      const options = this.authService.getAuthorizationOptions();
      this.http.get(this.apiUrl + 'sessions/' + sessionId + '/questions?researcherId=' + researcherId, options)
        .subscribe(res => {
          observer.next(res.json());
        });
    });
    return observable;
  }

  public getSessionSubjects(sessionId: number): Observable<any> {
    const observable = new Observable(observer => {
      const researcherId = this.authService.currentUser.researcherID;
      const options = this.authService.getAuthorizationOptions();
      this.http.get(this.apiUrl + 'sessions/' + sessionId + '/subjects?researcherId=' + researcherId, options)
        .subscribe(res => {
          observer.next(res.json());
        });
    });
    return observable;
  }

  public getSessionResearchers(sessionId: number): Observable<any> {
    const observable = new Observable(observer => {
      const researcherId = this.authService.currentUser.researcherID;
      const options = this.authService.getAuthorizationOptions();
      this.http.get(this.apiUrl + 'sessions/' + sessionId + '/researchers?researcherId=' + researcherId, options)
        .subscribe(res => {
          observer.next(res.json());
        });
    });
    return observable;
  }

  public addResearcherToSession(sessionId: number, newResearcherEmail: string, isAdmin: boolean): Observable<any> {
    const observable = new Observable(observer => {
      const options = this.authService.getAuthorizationOptions();
      const researcherId = this.authService.currentUser.researcherID;
      this.researcherService.getResearcherByMail(newResearcherEmail)
        .subscribe(res => {
          console.log(res);
          this.http.post(this.apiUrl + 'sessions/' + sessionId + '/researchers/add?researcherId=' + researcherId + '&newResearcherId=' + res.researcherID + '&isAdmin=' + isAdmin,{}, options)
            .subscribe(ress => {
              observer.next(ress.json());
            });
        });
    });
    return observable;
  }

  public removeResearcherFromSession(sessionId: number, researcherId: number): Observable<any> {
    const observable = new Observable(observer => {
      const options = this.authService.getAuthorizationOptions();
      this.http.delete(this.apiUrl + 'sessions/' + sessionId + '/researchers/' + researcherId, options)
        .subscribe(res => {
          observer.next(res);
        });
    });
    return observable;
  }

  public changeAdminStatus(sessionId: number, researcherId: number, isAdmin: boolean): Observable<any> {
    const observable = new Observable(observer => {
      const headers = this.authService.getAuthorizationHeader();
      headers.append('Content-Type', 'application/json');
      const options = this.authService.getAuthorizationOptionsFromHeaders(headers);
      this.http.put(this.apiUrl + 'sessions/' + sessionId + '/researchers/' + researcherId, { isAdmin }, options)
        .subscribe(res => {
          observer.next(res);
        });
    });
    return observable;
  }

  public removeSession(sessionId: number): Observable<any> {
    const observable = new Observable(observer => {
      const currentResearcherId = this.authService.currentUser.researcherID;
      const options = this.authService.getAuthorizationOptions();
      this.http.delete(this.apiUrl + 'sessions/' + sessionId + '?researcherId=' + currentResearcherId, options)
        .subscribe(res => {
          observer.next(res);
        });
    });
    return observable;
  }

  public createNewSession(session: any): Observable<any> {
    const observable = new Observable(observer => {
      const currentResearcherId = this.authService.currentUser.researcherID;
      session.researcherIDs.push(currentResearcherId);
      session.adminIDs.push(currentResearcherId);
      const options = this.authService.getAuthorizationOptions();
      this.http.post(this.apiUrl + 'sessions/new', session, options)
        .subscribe(res => {
          observer.next(res.json());
        });
    });
    return observable;
  }

  public getSessionCSV(sessionId: number, subjectId?: number) {
    const options = this.authService.getAuthorizationOptions();
    this.http.get(this.apiUrl + 'sessions/csvfile?sessionID=' + sessionId + '&subjectID=' + subjectId, options)
      .subscribe((res) => {
        const json = res.json();
        const blob = new Blob([json.body], { type: 'text/csv' });
        const blobURL = window.URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.download = json.filename;
        anchor.href = blobURL;
        anchor.click();
      });
  }
}
