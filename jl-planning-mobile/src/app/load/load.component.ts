import { Component, OnInit } from '@angular/core';
import {RouterExtensions} from "@nativescript/angular";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'ns-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions,private authService: AuthService) { }

    ngOnInit(): void {
        setTimeout(() => {
            this.routerExtensions.navigate([this.authService.isAuthenticated()?"/post":"/login"], { clearHistory: true });
        }, 2000);
    }

}
