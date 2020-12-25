import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {NativeScriptFormsModule, NativeScriptModule} from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SplashComponent } from './splash/splash.component';
import { LoadComponent } from './load/load.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HideActionBarDirective } from './hide-action-bar.directive';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { PostInListComponent } from './posts/post-in-list/post-in-list.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { HeaderComponent } from './header/header.component';

import { HttpHandleError } from '../services/http-handle-error.service';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {HttpInterceptorService} from "../services/http-interceptor.service";
import { FooterComponent } from './footer/footer.component';
import {AuthGuard} from "../services/auth-guard.service";
import { AccountPageComponent } from './account-page/account-page.component';
import { SubscriptionPageComponent } from './subscription-page/subscription-page.component';
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { AsideComponent } from './aside/aside.component';
import { PostAddComponent } from './posts/post-add/post-add.component';
import { UserComponent } from './user/user.component';
import { UserPpComponent } from './user/user-pp/user-pp.component';
import {SocketIOModule} from "nativescript-socketio/angular";
import {environment} from "../environments/environment";


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        HttpClientModule,
        NativeScriptFormsModule,
        NativeScriptUISideDrawerModule,
        SocketIOModule.forRoot(environment.socketUrl,{})
    ],
    declarations: [
        AppComponent,
        SplashComponent,
        LoadComponent,
        LoginComponent,
        RegisterComponent,
        HideActionBarDirective,
        PostsComponent,
        PostComponent,
        PostInListComponent,
        SubscribeComponent,
        HeaderComponent,
        FooterComponent,
        AccountPageComponent,
        SubscriptionPageComponent,
        AsideComponent,
        PostAddComponent,
        UserComponent,
        UserPpComponent,
    ],
    providers: [
        HttpHandleError,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpInterceptorService ,
            multi: true
        },

        AuthGuard,
        HttpClient
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
