import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "~/app/_models/user";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/internal/operators";
import { environment } from "~/environments/environment";
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


@Injectable({providedIn: "root"})
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    private currentUser: Observable<User>;


    constructor(private http: HttpClient) {
        if (hasKey("currentUser")) {
            this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(getString("currentUser")));
            this.currentUser = this.currentUserSubject.asObservable();
        } else {
            this.currentUserSubject = new BehaviorSubject<User>(null);
            this.currentUser = this.currentUserSubject.asObservable();
        }
    }

    get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        const user: User = {
            firstName: "", id: 0, lastName: "",
            username,
            email: username,
            password
        };

        return this.http.post<any>("http://127.0.0.1:8000/api/token/", {username, password})
            .pipe(map((token) => {
                setString("token", JSON.stringify(token));
                setString("currentUser", JSON.stringify(user));
                console.log(token);
                this.currentUserSubject.next(user);

                return token;
            }));
    }

    logout() {
        remove("currentUser");
        this.currentUserSubject.next(null);
    }

}
