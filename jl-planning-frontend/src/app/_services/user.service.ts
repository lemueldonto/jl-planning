import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "~/app/_models/user";
import { config } from "rxjs";

@Injectable({providedIn: "root"})
export class UserService {
    constructor(private http: HttpClient) {}

    getAll() {
        return this.http.get<Array<User>>("url");
    }

    register(user: User) {
        return this.http.post("url", user);
    }

    login(user: User) {

    }

    delete(id: number){
        return this.http.delete("url");
    }
}
