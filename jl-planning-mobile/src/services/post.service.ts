import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Subject} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {Post} from "../models/post.model";
import {HandleError, HttpHandleError} from "./http-handle-error.service";
import {RequestFunctionsService} from "./request-functions.service";
import {StateService} from "./state.service";
import {User} from "../models/user.model";
import {SocketIO} from "nativescript-socketio";

@Injectable({
  providedIn: 'root'
})
export class PostServices {

    private handleError: HandleError;
    public post$ = new Subject<Post[]>();
  private post: Post[] = [];
  constructor(private http: HttpClient, private authService: AuthService,
              private requestFunctionsService: RequestFunctionsService,
              private httpHandleError: HttpHandleError
  //,private socketIO: SocketIO
  ) {

      this.handleError = this.httpHandleError.createHandleError('PostsService');
  }
  public postUrl = environment.url + '/post';
  // evol: Evolution;


  addPost(post: Post, image?: File) {
     this.http.post(environment.url + '/post/' + post._id,
          this.requestFunctionsService.imageRequestObject('post',post,post.user.username,image)).pipe(
              tap(()=>{

              }),
          catchError(this.handleError('addPost', []))
      ).subscribe(
          tap((post: Post) => {
              console.log('Récupération reussie');
          }));
  }
  getPostById(id: number){
    const url = this.postUrl + '/' + id.toString();
    return this.http.get<Post>(url).pipe(
      catchError(this.handleError('getPostById', []))
    ).subscribe(/*tap((quiz) => {
        console.log('Récupération reussie');
    })*/);
  }
  getPost() {
    this.http.get(environment.url + '/post').pipe(
        catchError(this.handleError('getPost', []))
    ).subscribe(tap((post: Post[]) => {
        if (post) {
            this.post = post;
            this.emitPosts();
        }
    }));
  }
  getPostsOfUsersSubscribeTo(_id: string) {
    return this.http.get(environment.url +'/'+ _id + '/post').pipe(
        catchError(this.handleError('getPost', []))
    );
  }

  deletePost(post: Post) {
    return this.http.delete<Post>(this.postUrl + '/' + post._id).pipe(
        catchError(this.handleError('deletePost', []))
    ).subscribe(/*tap(((prof: Post) => {
        console.log('Suppression  de ' + prof.user.username + 'reussie');
        this.getPost()}))*/);
  }
  updatePost(post: Post, image: File){
      this.http.put(environment.url + '/post/' + post._id,
          this.requestFunctionsService.imageRequestObject('post',post,post.user.username,image)).pipe(
                 catchError(this.handleError('updatePost', []))
  ).subscribe(tap((post:Post) => {
          return post;
      }   ));
  }
  public emitPosts() {
    this.post$.next(this.post);
  }
}
