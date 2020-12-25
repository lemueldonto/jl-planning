import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {environment} from "../../environments/environment";
import {User} from "../../models/user.model";
import {StackLayout} from "tns-core-modules/ui/layouts/stack-layout";
import {Post} from "../../models/post.model";
import {UserServices} from "../../services/user.service";
import {AuthService} from "../../services/auth.service";
import {AbsoluteLayout} from "tns-core-modules/ui/layouts/absolute-layout";
import {screen} from "tns-core-modules/platform";

@Component({
  selector: 'ns-subscription-page',
  templateUrl: './subscription-page.component.html',
  styleUrls: ['./subscription-page.component.css']
})
export class SubscriptionPageComponent implements OnInit {

    userExample = environment.imagesUrl+'/userExample.jpeg';
    imageUrl = environment.imagesUrl+'/spot_example.jpeg';
    user: User;
    posts: Post[] = [];

    constructor(public userService: UserServices,private authService:AuthService ) {
        this.user = new User();
        this.user.username = "AK Fashion";
        this.user.domain = "Web designer";
        this.authService.user$.subscribe((user)=>{
            this.user = user?user:new User();
        });
        this.user.coins = 0;}

    ngOnInit(): void {
        this.posts.push(new Post());
        // using pixels and screen scale
        // this way you can get height without knowing it
        //AbsoluteLayout.setTop(this.bottomContainer, (screen.mainScreen.heightDIPs - (Number(this.bottomContainer.getMeasuredHeight()) / screen.mainScreen.scale)));
    }

    onItemTap($event: any) {
    }

    fabTap() {
        this.posts.push(new Post());
        this.posts[this.posts.length-1].image = "voir le post";
        this.posts[this.posts.length-1].user = this.user;
    }
}
