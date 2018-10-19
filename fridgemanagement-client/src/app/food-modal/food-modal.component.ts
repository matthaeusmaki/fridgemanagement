import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FoodItemService} from "../shared/service/food-item.service";
import {FoodItem} from "../shared/model/food-item.model";
import {FridgeService} from "../shared/service/fridge.service";
import {Fridge} from "../shared/model/fridge.model";

@Component({
    selector: 'fm-food-modal',
    templateUrl: './food-modal.component.html',
    styleUrls: ['./food-modal.component.less']
})
export class FoodModalComponent {

    fridgeList: Fridge[];

    constructor(private dialogRef: MatDialogRef<FoodModalComponent>,
                private foodService: FoodItemService,
                private fridgeService: FridgeService,
                @Inject(MAT_DIALOG_DATA) public data: FoodItem) {
        this.loadFridgeData();
    }

    loadFridgeData(): void {
        this.fridgeService.loadAll().subscribe(result => {
            this.fridgeList = result;
        });
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    onSave(): void {
        console.log('save');
        this.foodService.saveFoodItem(this.data)
            .subscribe(result => {
                this.dialogRef.close(result);
            }, error => {
                console.log("Ein Fehler ist aufgetreten " + error);
            })
    }

}
