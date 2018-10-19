import {Component, Input, OnInit} from '@angular/core';
import {FoodItemService} from "../shared/service/food-item.service";
import {DatePipe} from '@angular/common';
import {FoodItem} from "../shared/model/food-item.model";
import {MatDialog} from "@angular/material";
import {FoodModalComponent} from "../food-modal/food-modal.component";

@Component({
    selector: 'fm-item-list',
    templateUrl: './food-item-list.component.html',
    styleUrls: ['./food-item-list.component.less']
})
export class FoodItemListComponent implements OnInit {

    @Input() fridgeId: string;
    foodItems: FoodItem[] = [];

    constructor(private foodService: FoodItemService,
                private datePipe: DatePipe,
                private dialog: MatDialog) {
    }

    ngOnInit() {
        this.loadData();
    }

    private loadData() {
        this.foodService.loadFoodItemsByFridgeId(this.fridgeId)
            .subscribe(data => {
                data.forEach(d => this.foodItems.push(new FoodItem(d)));
            });
    }

    protected getOpenClosedMessage(date: string): string {
        if (date) {
            return `geöffnet am ${this.datePipe.transform(date, "dd.MM.yyyy")}`;
        } else {
            return "geschlossen";
        }
    }

    protected getRemainingPercent(food: FoodItem): number {
        if (!food.remainingPercent) {
            let startRemainging = FoodItemListComponent.calculateDays(new Date(food.startDate), new Date(food.expirationDate));
            food.remainingDays = FoodItemListComponent.calculateDays(new Date(), new Date(food.expirationDate));
            food.remainingPercent = Math.ceil(100 - food.remainingDays / startRemainging * 100);
        }
        return food.remainingPercent;
    }

    private static calculateDays(startDate: Date, endDate: Date) {
        let diff = startDate.getTime() - endDate.getTime();
        if (diff >= 0) {
            return 0;
        }
        return Math.ceil(Math.abs(diff) / (1000 * 3600 * 24));
    }

    protected openFoodItemModal(selectedFoodItem?: FoodItem) {
        const dialogRef = this.dialog.open(FoodModalComponent, {
            width: "500px",
            data: new FoodItem(selectedFoodItem)
        });

        dialogRef.afterClosed()
            .subscribe(result => {
                if (result) {
                    let food = this.foodItems.find(f => f.id === result.id);
                    if (food) {
                        this.foodItems[this.foodItems.indexOf(food)] = result;
                    } else {
                        this.foodItems.push(result);
                    }
                }
            })
    }
}
