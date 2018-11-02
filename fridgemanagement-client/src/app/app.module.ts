import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {DatePipe} from '@angular/common';
import {FoodItemService} from "./shared/service/food-item.service";
import {FridgeService} from "./shared/service/fridge.service";
import {Url} from "./shared/const/url";
import {RouterModule, Routes} from "@angular/router";
import {RestService} from "./shared/service/rest.service";
import {FridgeListModule} from "./modules/fridge-list/fridge-list.module";
import {MatButtonModule, MatToolbarModule} from "@angular/material";
import {PlaygroundModule} from "./modules/playground/playground.module";
import {LoginModule} from "./modules/login/login.module";
import {LoginComponent} from "./modules/login/component/login/login.component";

const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "",
        pathMatch: "full",
        component: LoginComponent
    },
    {
        path: "fridge",
        loadChildren: "./modules/fridge-list/fridge-list.module#FridgeListModule"
    },
    {
        path: "playground",
        loadChildren: "./modules/playground/playground.module#PlaygroundModule"
    },
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: false}
        ),
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        LoginModule,
        FridgeListModule,
        PlaygroundModule,
        MatToolbarModule,
        MatButtonModule
    ],
    providers: [
        DatePipe,
        FridgeService,
        FoodItemService,
        Url,
        RestService
    ],
    bootstrap: [AppComponent],
    entryComponents: []
})
export class AppModule {
}
