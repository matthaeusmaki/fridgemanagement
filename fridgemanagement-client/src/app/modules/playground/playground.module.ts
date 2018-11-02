import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlaygroundComponent} from "./component/playground/playground.component";
import {PlaygroundRoutingModule} from "./playground-routing.module";

@NgModule({
    imports: [
        CommonModule,
        PlaygroundRoutingModule
    ],
    declarations: [
        PlaygroundComponent
    ],
    entryComponents: [
        PlaygroundComponent
    ]
})
export class PlaygroundModule {
}
