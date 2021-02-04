import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { User } from "~/app/_models/user";
import { UserService } from "~/app/_services/user.service";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page/page";
import { AuthenticationService } from "~/app/_services/authentication.service";

@Component({
        selector: "Login",
        templateUrl: "./login.component.html",
        styleUrls: ["./login.component.css"]
})
export class LoginComponent {
    isLoggingIn = true;
    user: User;
    processing = false;
    @ViewChild("password", {static: false}) password: ElementRef;
    @ViewChild("confirmPassword", {static: false}) confirmPassword: ElementRef;

    constructor(private page: Page, private userService: UserService, private routerExtensions: RouterExtensions,
                private authenticationService: AuthenticationService) {
        this.page.actionBarHidden = true;
        this.user = new User();
        this.user.email = "";
        this.user.password = "";
    }

    submit() {
        /* if (!this.user.email || !this.user.password) {
            this.alert("Veuillez fournir une adresse e-mail et un mot de passe.");

            return;
        }*/
        this.login();
        this.navigateToHome();
    }

    login() {
        this.authenticationService.login(this.user.email, this.user.password).subscribe((res) => {
            this.alert(" Connexion avec success");
        });
    }

    focusPassword() {
        this.password.nativeElement.focus();
    }
    focusConfirmPassword() {
        if (!this.isLoggingIn) {
            this.confirmPassword.nativeElement.focus();
        }
    }

    navigateToRegister() {
        this.routerExtensions.navigate(["/register"], { clearHistory: true });
    }

    navigateToHome() {
        this.routerExtensions.navigate(["/tab"], { clearHistory: true });
    }

    alert(message: string) {
        return alert({
            title: "JL - PLANNING",
            okButtonText: "OK",
            message
        });
    }

    forgotPassword() {
        console.log("OUBLIE");
    }
}
