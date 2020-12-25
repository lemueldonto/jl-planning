import { Component, OnInit } from '@angular/core';
import {RouterExtensions} from "@nativescript/angular";

@Component({
  selector: 'ns-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) {
  }

  ngOnInit(): void {
      setTimeout(() => {
          this.routerExtensions.navigate(["/load"], { clearHistory: true });
      }, 1000);
  }


}
