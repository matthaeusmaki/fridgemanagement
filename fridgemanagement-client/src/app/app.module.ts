import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {FridgeListComponent} from './modules/fridge-list/component/fridge-list/fridge-list.component';
import {DatePipe} from '@angular/common';
import {FoodItemService} from "./shared/service/food-item.service";
import {FridgeService} from "./shared/service/fridge.service";
import {ConfirmModalComponent} from './shared/component/confirm-modal/confirm-modal.component';
import {Url} from "./shared/const/url";
import {RouterModule, Routes} from "@angular/router";
import {PlaygroundComponent} from './modules/playground/component/playground/playground.component';
import {RestService} from "./shared/service/rest.service";
import {LoginComponent} from './modules/login/component/login/login.component';
import {FridgeListModule} from "./modules/fridge-list/fridge-list.module";
import {MatToolbarModule} from "@angular/material";

const appRoutes: Routes = [
    {path: "", component: FridgeListComponent},
    {path: "playground", component: PlaygroundComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        ConfirmModalComponent,
        PlaygroundComponent,
        LoginComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true}
        ),
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FridgeListModule,
        MatToolbarModule,
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
