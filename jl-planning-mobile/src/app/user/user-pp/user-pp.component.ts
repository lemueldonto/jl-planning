import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {User} from "../../../models/user.model";

@Component({
  selector: 'ns-user-pp',
  templateUrl: './user-pp.component.html',
  styleUrls: ['./user-pp.component.css']
})
export class UserPpComponent implements OnInit {
    private user: User = new User();

  constructor(private authService: AuthService) {
      this.authService.user$.subscribe((user)=>this.user=user?user:this.user);
  }

  ngOnInit(): void {

  }

}
