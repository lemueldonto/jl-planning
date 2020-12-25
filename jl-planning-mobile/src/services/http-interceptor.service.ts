import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHeaders, HttpInterceptor, HttpHandler,
    HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
// App import
import { AuthService } from './auth.service';

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
import {environment} from "../environments/environment";
import {otherData} from "../mocks/otherData.mock";
@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(public auth: AuthService, private router: Router ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        console.log('interceptor running');
// Get the token from auth service.
        const authToken = getString(otherData.localStorage.token);

        if (authToken) {
// Clone the request to add the new header.
            const authReq = req.clone(
                { headers:
                        req.headers.set('Authorization', this.getAutorisation())}
            );
            console.log('interceptor running with new headers');
// send the newly created request
            return next.handle(authReq).pipe(
                tap((event: HttpEvent<any>) => {
                    if (event instanceof
                        HttpResponse) {
// Response wiht HttpResponse type
                            console.log('TAP function',
                            event);
                    }
                }, (err: any) => {
                    console.log(err);
                    if (err instanceof
                        HttpErrorResponse) {
                        if (err.status === 401) {
                            // localStorage.removeItem('token');
                            this.router.navigate(['/']);
                        }
                    }
                })
            );
        } else {
            console.log('interceptor without changes');
            return next.handle(req);
        }
    }

    getAutorisation(){
        return 'Bearer ' + getString(otherData.localStorage.token) +
            ' ' +
            getString(otherData.localStorage.userId);
    }
}
