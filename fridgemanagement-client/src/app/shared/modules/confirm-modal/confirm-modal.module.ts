import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmModalComponent} from "./component/confirm-modal.component";
import {MatButtonModule, MatDialogModule} from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatDialogModule
    ],
    declarations: [
        ConfirmModalComponent
    ]
})
export class ConfirmModalModule {
}
