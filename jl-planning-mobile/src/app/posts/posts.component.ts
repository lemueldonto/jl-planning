import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Post} from "../../models/post.model";
import {User} from "../../models/user.model";
import { registerElement } from '@nativescript/angular/element-registry';
import { AbsoluteLayout } from 'tns-core-modules/ui/layouts/absolute-layout';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
// you need access to screen properties
import { screen } from "tns-core-modules/platform";
import {environment} from "../../environments/environment";
import {AuthService} from "../../services/auth.service";
import {UserServices} from "../../services/user.service";
import {RadSideDrawerComponent} from "nativescript-ui-sidedrawer/angular";
import {RouterExtensions} from "@nativescript/angular";
// import { RadSideDrawer } from 'tns-core-modules/ui/switch/sidedrawer';
/*registerElement(
    'Fab',
    () => require('@nstudio/nativescript-floatingactionbutton').Fab
);*/
@Component({
  selector: 'ns-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
    @ViewChild(RadSideDrawerComponent) drawerComponent: RadSideDrawerComponent;
    userExample = environment.imagesUrl+'/userExample.jpeg';
    imageUrl = environment.imagesUrl+'/spot_example.jpeg';
    user: User;
    @ViewChild("addButtonContainer") addButtonContainer: ElementRef;
    @ViewChild("userPost") userppE: ElementRef;
    bottomContainer: StackLayout;
    userPost: StackLayout;
    posts: Post[] = [];


  constructor(private router: RouterExtensions, public userService: UserServices,private authService:AuthService ) {
      this.user = new User();
      this.user.username = "AK Fashion";
      this.user.domain = "Web designer";
      this.authService.user$.subscribe((user)=>{
          this.user = user?user:new User();
      });
      this.user.coins = 0;
      this.userService.subsribedPosts$.subscribe((posts)=>this.posts = posts?posts:[]);
      // this.userService.getSubscribesPosts();
  }

  ngOnInit(): void {
      this.bottomContainer = <StackLayout>this.addButtonContainer.nativeElement;
      this.userPost = <StackLayout>this.userppE.nativeElement;

      // using DIPs values only
      AbsoluteLayout.setTop(this.bottomContainer, (screen.mainScreen.heightDIPs - Number(this.bottomContainer.height))-95);
      AbsoluteLayout.setLeft(this.bottomContainer, (screen.mainScreen.widthDIPs - Number(this.bottomContainer.width)));
      AbsoluteLayout.setLeft(this.userPost, (screen.mainScreen.widthDIPs/2 - Number(this.bottomContainer.width)/2 + 11));


      this.drawerComponent.drawerOpen.subscribe(()=>console.log('ouvert'));
      this.drawerComponent.drawerClosed.subscribe(()=>console.log('fermé'));

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

    openDrawer(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }

    addPost() {
        this.router.navigateByUrl('/postAdd');
    }
}
