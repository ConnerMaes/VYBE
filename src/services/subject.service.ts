import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SubjectService {
  apiUrl = 'https://vybeapi1.azurewebsites.net/api/';

  constructor(private http: Http, private authService: AuthService) {
  }

  public getSubjectDetails(subjectId: number): Observable<any> {
    const observable = new Observable(observer => {
      const researcherId = this.authService.currentUser.researcherID;
      const options = this.authService.getAuthorizationOptions();
      this.http.get(this.apiUrl + 'subjects/' + subjectId + '?researcherId=' + researcherId, options)
        .subscribe(res => {
          observer.next(res.json());
        });
    });
    return observable;
  }

  public getSubjectAnswers(subjectId: number): Observable<any> {
    const observable = new Observable(observer => {
      const researcherId = this.authService.currentUser.researcherID;
      const options = this.authService.getAuthorizationOptions();
      this.http.get(this.apiUrl + 'subjects/' + subjectId + '/answers?researcherId=' + researcherId, options)
        .subscribe(res => {
          observer.next(res.json());
        }, err => {
          observer.error(err);
        });
    });
    return observable;
  }
}
