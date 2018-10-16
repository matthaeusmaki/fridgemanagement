import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import {
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {FoodItemListComponent} from './food-item-list/food-item-list.component';
import {FridgeListComponent} from './fridge-list/fridge-list.component';

@NgModule({
    declarations: [
        AppComponent,
        FoodItemListComponent,
        FridgeListComponent,
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
        MatProgressBarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
