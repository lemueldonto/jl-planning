import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { User } from "~/app/_models/user";
import { UserService } from "~/app/_services/user.service";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
        selector: "Register",
        templateUrl: "./register.component.html",
        styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
    isLoggingIn = true;
    user: User;
    processing = false;
    @ViewChild("password", {static: false}) password: ElementRef;
    @ViewChild("confirmPassword", {static: false}) confirmPassword: ElementRef;

    constructor(private page: Page, private userService: UserService, private routerExtensions: RouterExtensions) {
        this.page.actionBarHidden = true;
        this.user = new User();
        this.user.email = "";
        this.user.password = "";
    }


    submit() {
        if (!this.user.email || !this.user.password) {
            this.alert("Veuillez fournir toutes les informations demandées.");

            return;
        }

        this.processing = true;

        this.register();
    }

    navigateToLogin() {
        this.routerExtensions.navigate(["/login"], { clearHistory: true });
    }

    register() {}

    focusPassword() {
        this.password.nativeElement.focus();
    }
    focusConfirmPassword() {
        if (!this.isLoggingIn) {
            this.confirmPassword.nativeElement.focus();
        }
    }

    alert(message: string) {
        return alert({
            title: "JL - PLANNING",
            okButtonText: "OK",
            message
        });
    }

}
