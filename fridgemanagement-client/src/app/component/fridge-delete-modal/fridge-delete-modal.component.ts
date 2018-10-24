import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Fridge} from "../../shared/model/fridge.model";
import {FridgeService} from "../../shared/service/fridge.service";
import {FoodItemService} from "../../shared/service/food-item.service";
import {FoodItem} from "../../shared/model/food-item.model";

@Component({
    selector: 'fm-fridge-delete-modal',
    templateUrl: './fridge-delete-modal.component.html',
    styleUrls: ['./fridge-delete-modal.component.less']
})
export class FridgeDeleteModalComponent {

    selectedFridgeId: string;
    fridgeList: Fridge[] = [];
    foodItemList: FoodItem[] = [];

    constructor(private dialogRef: MatDialogRef<FridgeDeleteModalComponent>,
                @Inject(MAT_DIALOG_DATA) public data: Fridge,
                private fridgeService: FridgeService,
                private foodService: FoodItemService) {
        fridgeService.loadAll()
            .subscribe(value => {
                this.fridgeList = value;
                let fridgeToDelete = this.fridgeList.find(fridge => fridge.id === data.id);
                this.fridgeList.splice(this.fridgeList.indexOf(fridgeToDelete, 0), 1);
            });
        foodService.loadFoodItemsByFridgeId(data.id)
            .subscribe(value => {
                if (value && value.length > 0) {
                    this.foodItemList = value;
                    this.selectedFridgeId = this.fridgeList[0].id;
                }
            });
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    onDelete(): void {
        if (this.selectedFridgeId || !this.selectedFridgeId && this.foodItemList.length <= 0) {
            this.fridgeService.deleteFridge(this.data.id, this.selectedFridgeId)
                .subscribe(value => {
                    if (value) {
                        this.dialogRef.close(true);
                    }
                });
        }
    }

}
