import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
export type HandleError =
    <T> (operation?: string, result?: T) => (error: HttpErrorResponse)
        => Observable<T>;

@Injectable({
  providedIn: 'root'
})
export class HttpHandleError {

  constructor() { }
  createHandleError = (serviceName = '') => <T>
    (operation = 'operation', result = {} as T) =>
        this.handleError(serviceName, operation, result)

    handleError<T> (serviceName = '', operation =
        'operation', result = {} as T) {
        return (response: HttpErrorResponse):
            Observable<T> => {
            console.error(response);
            const message = (response.error
                instanceof HttpErrorResponse) ?
                response.error.message :
                `server returned code ${response.status}
                    with body "${response.error.error}"`;
            console.log(response.status,401,response.status==401,response.status===401);
            if(response.status==401)alert('Un problème est survenu lors de l\'authentification\nVeuillez rééssayer!');
            // alert(message);
            return of( result );
        };
    }

}
