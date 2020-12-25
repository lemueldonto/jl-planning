import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import {SplashComponent} from "./splash/splash.component";
import {LoadComponent} from "./load/load.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {SubscribeComponent} from "./subscribe/subscribe.component";
import {PostsComponent} from "./posts/posts.component";
import {AuthGuard} from "../services/auth-guard.service";
import {AccountPageComponent} from "./account-page/account-page.component";
import {SubscriptionPageComponent} from "./subscription-page/subscription-page.component";
import {PostAddComponent} from "./posts/post-add/post-add.component";


const routes: Routes = [
    { path: "", redirectTo: "/post", pathMatch: "full" },
    { path: "splash", component: SplashComponent},
    { path: "load", component: LoadComponent},
    { path: "login", component: LoginComponent},
    { path: "register", component: RegisterComponent},
    { path: "subscribe", component: SubscribeComponent},
    { path: "post", component: PostsComponent , canActivate: [AuthGuard]},
    { path: "postAdd", component: PostAddComponent , canActivate: [AuthGuard]},
    { path: "accountPage", component: AccountPageComponent, canActivate: [AuthGuard]},
    { path: "subscriptionPage", component: SubscriptionPageComponent, canActivate: [AuthGuard]}

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
