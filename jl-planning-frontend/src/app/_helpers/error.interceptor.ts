import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/internal/operators";
import { AuthenticationService } from "~/app/_services/authentication.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((err) => {
            if (err.status === 401) {
                this.authenticationService.logout();
                location.reload(true);
            }

            const error = err.error.message || err.statusText;

            return throwError(error);
        }));
    }
}
