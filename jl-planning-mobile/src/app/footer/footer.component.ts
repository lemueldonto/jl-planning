import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {StateService} from "../../services/state.service";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";


@Component({
  selector: 'ns-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    singleResUrl = environment.fontsUrl + '/single.';
    peopleResUrl = environment.fontsUrl + '/people.';
    part: number;
  constructor(private stateService: StateService, private location: Location) {

      this.location.onUrlChange((url, state) => {
          switch (url) {
              case '/post':this.part = 1; break;
              case '/accountPage':this.part = 3; break;
              case '/subscriptionPage':this.part = 2; break;
          }
      });
  }

  ngOnInit(): void {
      this.stateService.part$.subscribe((part)=>{
          this.part = part;
      });
  }
  setPart(part:number){
     this.stateService.setPart(part);
  }
}
