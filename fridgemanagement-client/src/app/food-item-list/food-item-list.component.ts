import {Component, Input, OnInit} from '@angular/core';
import {FoodItemService} from "../shared/service/food-item.service";
import {DatePipe} from '@angular/common';
import {FoodItem} from "../shared/model/food-item.model";

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
}
