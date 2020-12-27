import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "~/app/_helpers/jwt.interceptor";
import { ErrorInterceptor } from "~/app/_helpers/error.interceptor";
import { TabComponent } from "~/app/components/tab/tab.component";
import { AppRoutingModule } from "~/app/app-routing.module";

@NgModule({
    bootstrap: [
        TabComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        TabComponent
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TabModule { }
