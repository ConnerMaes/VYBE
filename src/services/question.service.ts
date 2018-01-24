import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class QuestionService {
  apiUrl = 'https://vybeapi1.azurewebsites.net/api/';

  constructor(private http: Http, private authService: AuthService) {
  }

  public getQuestions(): Observable<any> {
    const observable = new Observable(observer => {
      this.http.get(this.apiUrl + 'questions')
        .subscribe(res => {
          observer.next(res.json());
        });
    });
    return observable;
  }

  public getAllSessionQuestions(sessionId): Observable<any> {
    const observable = new Observable(observer => {
      const options = this.authService.getAuthorizationOptions();
      this.http.get(this.apiUrl + 'questions/sessions/' + sessionId, options)
        .subscribe(res => {
          observer.next(res.json());
        });
    });
    return observable;
  }

  public createNewQuestion(question: any): Observable<any> {
    const observable = new Observable(observer => {
      const options = this.authService.getAuthorizationOptions();
      this.http.post(this.apiUrl + 'questions/new', question, options)
        .subscribe(res => {
          observer.next(res.json());
        });
    });
    return observable;
  }
}
