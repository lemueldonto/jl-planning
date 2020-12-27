import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/(homeTab:home/default//browseTab:browse/default//profileTab:search/default)",
        pathMatch: "full"
    },

    {
        path: "home",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/components/home/home.module").then((m) => m.HomeModule),
        outlet: "homeTab"
    },
    {
        path: "browse",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/components/browse/browse.module").then((m) => m.BrowseModule),
        outlet: "browseTab"
    },
    {
        path: "profile",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/components/profile/profile.module").then((m) => m.ProfileModule),
        outlet: "profileTab"
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class TabRoutingModule { }
