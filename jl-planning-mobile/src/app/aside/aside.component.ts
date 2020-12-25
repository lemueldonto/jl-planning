import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/user.model";

@Component({
  selector: 'ns-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
    user: User = new User();
  constructor(private authService: AuthService) {
      this.authService.user$.subscribe((user)=>this.user=user?user:this.user);
  }
  ngOnInit(): void {
  }
    logout(){
      console.log(confirm('êtes vous sûr de vouloir vous déconnecter?'));
     /* if(confirm('êtes vous sûr de vouloir vous déconnecter?')){
          this.authService.logout();
      }*/
    }
}
