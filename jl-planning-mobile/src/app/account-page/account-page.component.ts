import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {environment} from "../../environments/environment";
import {User} from "../../models/user.model";
import {StackLayout} from "tns-core-modules/ui/layouts/stack-layout";
import {Post} from "../../models/post.model";
import {AuthService} from "../../services/auth.service";
import {AbsoluteLayout} from "tns-core-modules/ui/layouts/absolute-layout";
import {screen} from "tns-core-modules/platform";
import {UserServices} from "../../services/user.service";
import {RouterExtensions} from "@nativescript/angular";

@Component({
  selector: 'ns-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {

    imageUrl = environment.imagesUrl+'/spot_example.jpeg';
    userBackUrl = environment.imagesUrl+'/userbackexemple.jpeg';
    userExample = environment.imagesUrl+'/userExample.jpeg';
    user: User;
    posts: Post[] = [];
    constructor(private router: RouterExtensions,public userService: UserServices,private authService:AuthService) {
        this.user = new User();
        this.user.username = "AK Fashion";
        this.user.domain = "Web designer";
        this.authService.user$.subscribe((user)=>{
            this.user = user?user:new User();
        });
        this.user.coins = 0;}

    ngOnInit(): void {

    }

    onItemTap($event: any) {
    }

    fabTap() {
        console.log(this.posts.length);
        this.posts.push(new Post());
        this.posts[this.posts.length-1].image = "voir le post";
        this.posts[this.posts.length-1].user = this.user;
    }

    addPost() {
        this.router.navigateByUrl('/postAdd');
    }
}
