import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import {
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatRippleModule,
    MatSelectModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {FoodItemListComponent} from './component/food-item-list/food-item-list.component';
import {FridgeListComponent} from './component/fridge-list/fridge-list.component';
import {DatePipe} from '@angular/common';
import {FoodItemService} from "./shared/service/food-item.service";
import {FridgeService} from "./shared/service/fridge.service";
import {FridgeEditModalComponent} from './component/fridge-edit-modal/fridge-edit-modal.component';
import {FormsModule} from '@angular/forms';
import {FoodEditModalComponent} from './component/food-edit-modal/food-edit-modal.component';
import {ConfirmModalComponent} from './shared/component/confirm-modal/confirm-modal.component';
import {FridgeDeleteModalComponent} from './component/fridge-delete-modal/fridge-delete-modal.component';
import {Url} from "./shared/const/url";
import {RouterModule, Routes} from "@angular/router";
import {PlaygroundComponent} from './component/playground/playground.component';

const appRoutes: Routes = [
    {path: "", component: FridgeListComponent},
    {path: "playground", component: PlaygroundComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        FoodItemListComponent,
        FridgeListComponent,
        FridgeEditModalComponent,
        FoodEditModalComponent,
        ConfirmModalComponent,
        FridgeDeleteModalComponent,
        PlaygroundComponent,
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true}
        ),
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatListModule,
        MatToolbarModule,
        MatExpansionModule,
        MatCardModule,
        MatIconModule,
        MatProgressBarModule,
        MatTooltipModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatRippleModule
    ],
    providers: [
        DatePipe,
        FridgeService,
        FoodItemService,
        Url
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        FridgeEditModalComponent,
        FoodEditModalComponent,
        ConfirmModalComponent,
        FridgeDeleteModalComponent
    ]
})
export class AppModule {
}
