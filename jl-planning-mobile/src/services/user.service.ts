import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable, of, Subject} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {Router} from "@angular/router";
import {RequestFunctionsService} from "./request-functions.service";
import {HandleError} from "./http-handle-error.service";
import {AuthService} from "./auth.service";
import {PostServices} from "./post.service";
import {Post} from "../models/post.model";
@Injectable({
  providedIn: 'root'
})
export class UserServices {
    public numberSeen: number = 0;
    public lastPostDelay: number = 0;
    public coin: number = 0;
    private subsribedPosts: Post[] = [];
    public subsribedPosts$ = new Subject<Post[]>();
  constructor(private authService: AuthService, private postServices: PostServices) {
      this.authService.user$.subscribe((user)=>  this.coin= user && user.coins? user.coins:0);
}
  public userUrl = environment.url + '/user';
  // evol: Evolution;


    getCoin(){
         return 0;
    }
    getLastPostNumberSeen(){
        return 0;
    }
    getLastPostDelay(){
        return '0 minute';
    }
    getNumberOfPost(){
        return 0;
    }

    getSubscribesPosts() {
        if(this.authService.isAuthenticated())
        this.postServices.getPostsOfUsersSubscribeTo(this.authService.getUserId()).subscribe(tap((subscribedPost: Post[]) => {
            if (subscribedPost) {
                this.subsribedPosts = subscribedPost;
                this.emitSubscribedPost();
            }
        }));;
    }

    private emitSubscribedPost() {
        this.subsribedPosts$.next(this.subsribedPosts);
    }
}
