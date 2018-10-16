import {Component, Input, OnInit} from '@angular/core';
import {FoodItemService} from "../shared/service/food-item.service";
import {DatePipe} from '@angular/common';
import {FoodItem} from "../shared/type/food.item";

@Component({
    selector: 'fm-item-list',
    templateUrl: './food-item-list.component.html',
    styleUrls: ['./food-item-list.component.less']
})
export class FoodItemListComponent implements OnInit {

    @Input() fridgeId: string;
    foodItems: FoodItem[] = [];

    constructor(private foodService: FoodItemService, private datePipe: DatePipe) {
    }

    ngOnInit() {
        this.loadData();
    }

    private loadData() {
        this.foodService.loadFoodItemsByFridgeId(this.fridgeId).subscribe(data => {
            this.foodItems = data;
        });
    }

    protected getOpenClosedMessage(date: string): string {
        if (date) {
            return `geöffnet am ${this.datePipe.transform(date, "dd.MM.yyyy")}`;
        } else {
            return "geschlossen";
        }
    }

    protected getRemainingPercent(item: FoodItem): number {
        let startRemainging = this.calculateDays(new Date(item.startDate), new Date(item.expirationDate));
        let nowRemaining = this.calculateDays(new Date(), new Date(item.expirationDate));
        return Math.ceil(100 - nowRemaining / startRemainging * 100);
    }

    private calculateDays(startDate: Date, endDate: Date) {
        let diff = startDate.getTime() - endDate.getTime();
        if (diff >= 0) {
            return 0;
        }
        return Math.ceil(Math.abs(diff) / (1000 * 3600 * 24));
    }
}
