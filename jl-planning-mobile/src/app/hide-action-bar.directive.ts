import {Directive, OnInit} from '@angular/core';
import { Page } from "tns-core-modules/ui/page";
@Directive({
  selector: '[nsHideActionBar]'
})
export class HideActionBarDirective implements OnInit{

  constructor(private page: Page) {
  }

    ngOnInit(): void {
      if(this.page)
        this.page.actionBarHidden = true;
    }

}
