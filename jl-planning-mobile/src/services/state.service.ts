import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import {NSRouterLink, RouterExtensions} from "@nativescript/angular";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class StateService {
    constructor(private router: RouterExtensions) {
    }
  private part = 1;
  public part$ = new BehaviorSubject<number>(this.part);
  public mode$ = new BehaviorSubject<string>('');
  public setUser(){
    this.part = 2;
    this.emitPart();
  }
  public setMaster(){
    this.part = 1;
    this.emitPart();
  }
  public setPart(part: number){
      if(part>0&&part<4 && part!=this.part){
          this.part = part;
          switch (part) {
              case 3:
                  this.router.navigateByUrl('/accountPage', {
                      animated: true,
                      transition: {
                          name: "slideLeft",
                          duration: 200,
                          curve: "easeIn"
                      }
                  });
                  break;
              case 2:
                  this.router.navigateByUrl('/subscriptionPage', {
                      animated: true,
                      transition: {
                          name: "slideLeft",
                          duration: 200,
                          curve: "easeIn"
                      }
                  });
                  break;
              case 1:
              default:
                  this.router.navigateByUrl('/post', {
                      animated: true,
                      transition: {
                          name: "slideLeft",
                          duration: 200,
                          curve: "easeIn"
                      }
                  });
                  break;
          }
          this.emitPart();
      }
  }
  private emitPart(){
    this.part$.next(this.part);
  }
}
