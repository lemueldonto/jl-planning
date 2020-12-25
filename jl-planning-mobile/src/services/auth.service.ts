import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {User} from '../models/user.model';
import {StateService} from './state.service';

import {
    getBoolean,
    setBoolean,
    getNumber,
    setNumber,
    getString,
    setString,
    hasKey,
    remove,
    clear
} from "tns-core-modules/application-settings";
import {otherData} from "../mocks/otherData.mock";
import {catchError, tap} from "rxjs/operators";
import {HandleError, HttpHandleError} from "./http-handle-error.service";
import {RouterExtensions} from "@nativescript/angular";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private handleError: HandleError;
  isAuth$ = new BehaviorSubject<boolean>(false);
  token: string;
  userId: string;
  user: User;
  user$ = new BehaviorSubject<User>(null);

  constructor(private router: RouterExtensions,
              private http: HttpClient,
              private state: StateService,
              private httpHandleError: HttpHandleError) {
      this.handleError = this.httpHandleError.createHandleError('AuthService');
    if (this.getToken()) {
      this.isAuth$.next(true);
      this.getCurrentUserInformation();
    }
  }
    private setUser(authData: { token: string, userId: string }){
      console.log('authentification réussie');
    this.token = authData.token;
    this.setToken(authData.token);
    this.userId = authData.userId;
    this.setUserId(authData.userId);
    this.isAuth$.next(true);
    this.router.navigate(['/']);
    this.getCurrentUserInformation();
}
  createNewUser(user: User) {
      user.email = user.email.split(' ')[0];
      return this.http.post(
        environment.url + '/auth/signup',
        user).pipe(tap((authData: { token: string, userId: string })=>{
            this.setUser(authData);}
      ),
          catchError(this.handleError('signup', [])));
  }

  login(email: string, password: string) {
      email = email? email.split(' ')[0]:'';
      return this.http.post(
        environment.url + '/auth/login',
        { email, password }).pipe(tap((authData: { token: string, userId: string })=>{
            this.setUser(authData);
              }), catchError(this.handleError('login', []),)
      );
  }
  logout() {
    this.isAuth$.next(false);
    this.userId = null;
    this.token = null;
    remove(otherData.localStorage.token);
    remove(otherData.localStorage.userId);
    this.state.setUser();
  }
  private setToken(token: string): void {
      setString(otherData.localStorage.token, token);
  }
  getToken(): string {
    return getString(otherData.localStorage.token);
  }
  isAuthenticated(): boolean {
// get the token
    const token: string = this.getToken();
    if (token) {
      return true;
    }
    return false;
  }
  private setUserId(userId: string) {
      setString(otherData.localStorage.userId, userId+'');
  }
  getUserId(){
    return getString(otherData.localStorage.userId);
  }
  private getCurrentUserInformation() {

    this.http.get(environment.url + '/auth/' + this.getUserId()).subscribe((user: User) => {
      this.user = user;
      this.user$.next(this.user);
    });
  }
}

