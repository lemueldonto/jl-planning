import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../models/post.model";
import {User} from "../../../models/user.model";

@Component({
  selector: 'ns-post-in-list',
  templateUrl: './post-in-list.component.html',
  styleUrls: ['./post-in-list.component.css']
})
export class PostInListComponent implements OnInit {
    @Input() post: Post;
    @Input() canBeSubscribe: boolean = false;
  constructor() {
      console.log(this.post);
  }

  ngOnInit(): void {
  }
  getPostImage(){
      return this.post.image;
  }
  getAuthorName(){
      return this.post.user.username;
  }
  getAuthorTitle(){
      return this.post.user.domain;
  }

    seeProfil() {

    }

    subscribe() {

    }
}
