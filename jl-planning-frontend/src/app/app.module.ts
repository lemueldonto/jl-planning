import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "~/app/_helpers/jwt.interceptor";
import { ErrorInterceptor } from "~/app/_helpers/error.interceptor";
import { LoginComponent } from "~/app/components/login/login.component";
import { TabComponent } from "~/app/components/tab/tab.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpClientModule } from "@nativescript/angular/http-client";
import { RegisterComponent } from "~/app/components/register/register.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        TabComponent,
        RegisterComponent
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
