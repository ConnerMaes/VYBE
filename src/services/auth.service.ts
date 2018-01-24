import { Injectable } from '@angular/core';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import {Observable} from 'rxjs/Observable';
import {Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'qA7vUJsbKYq_e5vCjk-CjqoqfCF24yAN',
    domain: 'teunv.eu.auth0.com',
    audience: 'http://localhost:51630',
  });

  public currentUser: User = null;

  constructor(private http: Http) {}

  public loginClient(email: string, password: string): Observable<any> {
    const setSessionFunction = this.setSession;
    const observable = new Observable(observer => {
      this.auth0.client.login({
        realm: 'Username-Password-Authentication',
        username: email,
        password: password,
        scope: 'openid offline_access'
      }, function(err, authResult) {
        if (authResult) {
          setSessionFunction(authResult, email);
          observer.next(authResult);
        }
        if (err) {
          observer.error(err);
        }
      });
    });
    return observable;
  }

  public login(email: string, password: string): Observable<any> {
    const observable = new Observable(observer => {
      this.loginClient(email, password)
        .subscribe(res => {
          this.setCurrentUser(email)
            .subscribe(user => {
              observer.next(user);
            });
        }, err => {
          observer.error(err);
        });
    });
    return observable;
  }

  public getUserInfo(): Observable<any> {
    const observable = new Observable(observer => {
      const accessToken = localStorage.getItem('access_token');
      if (accessToken) {
        this.auth0.client.userInfo(accessToken, function(err, user) {
          if (err) {
            observer.error(err);
          }
          if (user) {
            observer.next(user);
          }
        });
      } else {
        observer.error('user not logged in');
      }
    });
    return observable;
  }

  public signUp(email: string, password: string, firstName: string, lastName: string): Observable<boolean> {
    const observable = new Observable(observer => {
      this.addResearcherToDatabase(email, firstName, lastName)
        .subscribe(added => {
          if (added) {
            this.signUpClient(email, password)
              .subscribe(ok => {
                if (ok) {
                  observer.next(true);
                }
              }, error => {
                observer.error(error);
              });
          }
        }, error => {
          observer.error(error);
        });
    })
    return observable;
  }

  public signUpClient(email: string, password: string): Observable<boolean> {
    const observable = new Observable(observer => {
      this.auth0.signup({
        connection: 'Username-Password-Authentication',
        email: email,
        password: password
      }, function (err) {
        if (err) {
          observer.error(err);
        } else {
          observer.next(true);
        }
      });
    });
    return observable;
  }

  private addResearcherToDatabase(email: string, firstName: string, lastName: string): Observable<boolean> {
    const observable = new Observable(observer => {
      this.http.post('https://vybeapi1.azurewebsites.net/api/researchers/new', {
        email: email,
        firstName: firstName,
        lastName: lastName
      })
        .subscribe(res => {
          observer.next(true);
        }, error => {
          observer.error(error);
        });
    });
    return observable;
  }

  public setSession(authResult, email): void {
    console.log('expires in: ' + authResult.expiresIn);
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify(Date.now() + ((+authResult.expiresIn)*1000));
    console.log('now: ' + Date.now());
    console.log('expires at: ' + expiresAt);
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('refresh_token', authResult.refreshToken);
    localStorage.setItem('user_mail', email);
  }

  public setTokens(authResult) {
    console.log('set tokens');
    console.log('expires in: ' + authResult.expiresIn);
    console.log(authResult);
    const expiresAt = JSON.stringify(Date.now() + ((+authResult.expiresIn) * 1000));
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public getAccessToken(): string {
    return localStorage.getItem('access_token');
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('user_mail');
  }

  public isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return Date.now() < expiresAt;
  }

  public setCurrentUser(email: string): Observable<any> {
    const observable = new Observable(observer => {
      const options = this.getAuthorizationOptions();
      this.http.get('https://vybeapi1.azurewebsites.net/api/researchers?email=' + email, options)
        .subscribe(res => {
          const researcher = res.json();
          const currentUser = new User(researcher.researcherID, researcher.email, researcher.firstName, researcher.lastName);
          this.currentUser = currentUser;
          observer.next(this.currentUser);
        });
    });
    return observable;
  }

  public getAuthorizationHeader(): Headers {
    const header = new Headers();
    header.append('Authorization', 'Bearer ' + this.getAccessToken());
    return header;
  }

  public getAuthorizationOptions(): RequestOptions {
    const header = this.getAuthorizationHeader();
    const options = new RequestOptions({ headers: header });
    return options;
  }

  public getAuthorizationOptionsFromHeaders(headers: Headers): RequestOptions {
    const options = new RequestOptions({ headers: headers });
    return options;
  }

  public handleAuthentication(): Observable<boolean> {
    const observable = new Observable(observer => {
      if (this.isAuthenticated()) {
        this.setCurrentUser(localStorage.getItem('user_mail'))
          .subscribe(res => {
            console.log(res);
            this.schedualTokenRefresh();
            observer.next(true);
          });
      } else {
        observer.next(false);
      }
    });
    return observable;
  }

  public schedualTokenRefresh() {
    const now = Date.now();
    const expiresAt = localStorage.getItem('expires_at');
    console.log(+expiresAt);
    const timeBetween = +expiresAt - now;
    console.log('refresh in: ' + timeBetween);
    const that = this;
    setTimeout(function() { that.getNewAccessToken(); }, timeBetween);
  }

  private getNewAccessToken() {
    console.log('get new token');
    const refreshToken = localStorage.getItem('refresh_token');
    this.http.post('https://teunv.eu.auth0.com/oauth/token', {
      grant_type: 'refresh_token',
      client_id: 'qA7vUJsbKYq_e5vCjk-CjqoqfCF24yAN',
      refresh_token: refreshToken
    })
      .subscribe(result => {
        const res = result.json();
        this.setTokens({
          'accessToken':  res.access_token,
          'idToken': res.id_token,
          'expiresIn': res.expires_in
        });
        this.schedualTokenRefresh();
      });
  }

  public resetPassword(email: string): Observable<boolean> {
    const observable = new Observable(observer => {
      this.auth0.changePassword({
        connection: 'Username-Password-Authentication',
        email: email
      }, function (err, resp) {
        if (err) {
          observer.next(false);
        } else {
          observer.next(true);
        }
      });
    });
    return observable;
  }
}

class User {
  constructor(public researcherID: number, public email: string, public firstName: string, public lastName: string) {}
}
