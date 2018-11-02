import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FridgeEditModalComponent} from "./component/fridge-edit-modal/fridge-edit-modal.component";
import {FoodEditModalComponent} from "./component/food-edit-modal/food-edit-modal.component";
import {ConfirmModalComponent} from "../../shared/component/confirm-modal/confirm-modal.component";
import {FridgeDeleteModalComponent} from "./component/fridge-delete-modal/fridge-delete-modal.component";
import {FoodItemListComponent} from "./component/food-item-list/food-item-list.component";
import {FridgeListComponent} from "./component/fridge-list/fridge-list.component";
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
    MatTooltipModule
} from "@angular/material";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatListModule,
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
    declarations: [
        FoodItemListComponent,
        FridgeListComponent,
        FridgeEditModalComponent,
        FoodEditModalComponent,
        FridgeDeleteModalComponent
    ],
    entryComponents: [
        FridgeEditModalComponent,
        FoodEditModalComponent,
        ConfirmModalComponent,
        FridgeDeleteModalComponent
    ]
})
export class FridgeListModule {
}
