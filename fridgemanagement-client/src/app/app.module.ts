import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import {AppComponent} from './app.component';
import {ItemListComponent} from './item-list/item-list/item-list.component';
import {FridgeListComponent} from './fridge-list/fridge-list.component';

@NgModule({
    declarations: [
        AppComponent,
        ItemListComponent,
        FridgeListComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
