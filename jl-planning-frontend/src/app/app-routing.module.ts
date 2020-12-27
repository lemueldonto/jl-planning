import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginComponent } from "~/app/components/login/login.component";
import { RegisterComponent } from "~/app/components/register/register.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/login",
        pathMatch: "full"
    },

    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "tab",
        loadChildren: "./components/tab/tab.module#TabModule"
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
