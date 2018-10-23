import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDatepickerInputEvent, MatDialogRef} from "@angular/material";
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

    changeStartDate(event: MatDatepickerInputEvent<Date>) {
        this.changeDateEvent("startDate", event);
    }

    changeOpenDate(event: MatDatepickerInputEvent<Date>) {
        this.changeDateEvent("openDate", event);
    }

    changeExpirationDate(event: MatDatepickerInputEvent<Date>) {
        this.changeDateEvent("expirationDate", event);
    }

    changeDateEvent(prop: string, event: MatDatepickerInputEvent<Date>) {
        let updatedDate = new Date();
        updatedDate.setFullYear(event.value.getUTCFullYear(), event.value.getMonth(), event.value.getDate());
        this.data[prop] =  updatedDate;
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
