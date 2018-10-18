import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import {
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {FoodItemListComponent} from './food-item-list/food-item-list.component';
import {FridgeListComponent} from './fridge-list/fridge-list.component';
import {DatePipe} from '@angular/common';
import {FoodItemService} from "./shared/service/food-item.service";
import {FridgeService} from "./shared/service/fridge.service";
import {FridgeModal} from './fridge-modal/fridge.modal.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        FoodItemListComponent,
        FridgeListComponent,
        FridgeModal,
    ],
    imports: [
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
        FormsModule
    ],
    providers: [
        DatePipe,
        FridgeService,
        FoodItemService
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        FridgeModal
    ]
})
export class AppModule {
}
