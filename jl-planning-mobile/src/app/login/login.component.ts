import { Component, OnInit } from '@angular/core';
import {RouterExtensions} from "@nativescript/angular";
import {User} from "../../models/user.model";
import {AuthService} from "../../services/auth.service";
@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user: User = new User();
    loading: boolean = false;
  constructor(private routerExtensions: RouterExtensions, private authService: AuthService) { }

  ngOnInit(): void {
  }
    login(){
      this.loading = true;
      this.authService.login(this.user.email,this.user.password).subscribe(()=>{
          console.log('plus de chargement');this.loading = false});
    }
    navigateToRegister() {
        this.routerExtensions.navigate(["/register"], { clearHistory: true });
    }
}
