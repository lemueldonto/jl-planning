import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Location} from '@angular/common';
import {StackLayout} from "tns-core-modules/ui/layouts/stack-layout";
import {AbsoluteLayout} from "tns-core-modules/ui/layouts/absolute-layout";
import {screen} from "tns-core-modules/platform";
@Component({
  selector: 'ns-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {
    height:number;
    @ViewChild("statusFooter") statusFooter: ElementRef;
    statusFooterLayout: StackLayout;
  constructor(private location: Location) { }
  ngOnInit(): void {
      this.statusFooterLayout = <StackLayout>this.statusFooter.nativeElement;
      AbsoluteLayout.setTop(this.statusFooterLayout, (screen.mainScreen.heightDIPs - Number(this.statusFooterLayout.height))-80);
      AbsoluteLayout.setLeft(this.statusFooterLayout, (screen.mainScreen.widthDIPs - Number(this.statusFooterLayout.width)));

  }

    returnNavigation() {
        this.location.back();
    }

    defineNewTop() {
        console.log('dessus');
    }

    resetTop() {
        console.log('retour');
    }
}
