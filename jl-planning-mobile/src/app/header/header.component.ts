import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'ns-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    imageUrl = environment.imagesUrl+'/spot_example.jpeg';
  constructor() { }

  ngOnInit(): void {
  }

}
