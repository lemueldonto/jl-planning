import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { StateService } from './state.service';
import {AuthService} from './auth.service';
import {RouterExtensions} from "@nativescript/angular";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService,
              private state: StateService,
              private router: RouterExtensions) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return Observable.create(
      (observer) => {
        this.auth.isAuth$.subscribe(
          (auth) => {
            if (!auth) {
                    this.router.navigate(['/login']);
            }/* else {
              this.auth.user$.subscribe((user) => {
                if (user != null){
                  if (!user.administrator && !user.employee && route.toString().includes('master')) {observer.next(false); }
                  else {
                  }
                }
              });
            }*/
            observer.next(true);
          }
        );
      }
    );
  }
}
