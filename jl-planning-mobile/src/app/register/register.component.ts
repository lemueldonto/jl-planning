import { Component, OnInit } from '@angular/core';
import {RouterExtensions} from "@nativescript/angular";
import {User} from "../../models/user.model";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'ns-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    user: User = new User();
    loading: boolean = false;
  constructor(private routerExtensions: RouterExtensions, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

    navigateToLogin() {
        this.routerExtensions.navigate(["/login"], { clearHistory: true });
    }

    navigateToSubscribe() {
      console.log(this.user);
      if (!isNaN(Number(this.user.email))){
          this.user.phoneNumber = +this.user.email;
          this.user.email = '';
      }
      this.loading = true;
      this.authService.createNewUser(this.user).subscribe(()=>this.loading = false);
        // this.routerExtensions.navigate(["/subscribe"], { clearHistory: true });
    }

}
