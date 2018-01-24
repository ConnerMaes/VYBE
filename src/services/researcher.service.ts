import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ResearcherService {
  apiUrl = 'https://vybeapi1.azurewebsites.net/api/';

  constructor(private http: Http, private authService: AuthService) {
  }

  public getResearcherByMail(email: string): Observable<any> {
    const observable = new Observable(observer => {
      const options = this.authService.getAuthorizationOptions();
      this.http.get(this.apiUrl + 'researchers?email=' + email, options)
        .subscribe(res => {
          observer.next(res.json());
        });
    });
    return observable;
  }

  public getSubjectsFromResearcher(): Observable<any> {
    const observable = new Observable(observer => {
      const researcherId = this.authService.currentUser.researcherID;
      const options = this.authService.getAuthorizationOptions();
      this.http.get(this.apiUrl + 'researchers/' + researcherId + '/subjects', options)
        .subscribe(res => {
          observer.next(res.json());
        });
    });
    return observable;
  }

  public updateCurrentResearcher(firstName: string, lastName: string) {
    const observable = new Observable(observer => {
      const researcherId = this.authService.currentUser.researcherID;
      const options = this.authService.getAuthorizationOptions();
      this.http.put(this.apiUrl + 'researchers/' + researcherId,
        {FirstName: firstName, LastName: lastName}, options)
        .subscribe(res => {
          this.authService.currentUser = res.json();
          observer.next(res.json());
        });
    });
    return observable;
  }

  public inviteResearchers(emails: string[]) {
    const observable = new Observable(observer => {
      const researcherId = this.authService.currentUser.researcherID;
      const options = this.authService.getAuthorizationOptions();
      this.http.post(this.apiUrl + 'researchers/' + researcherId,
        {Emails: emails}, options)
        .subscribe(res => {
          observer.next(res);
        });
    });
    return observable;
  }
}
