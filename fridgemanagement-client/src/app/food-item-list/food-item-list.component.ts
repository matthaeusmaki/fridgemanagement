import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';
import {FoodItemService} from "../shared/food/food-item.service";

@Component({
    selector: 'fm-item-list',
    templateUrl: './food-item-list.component.html',
    styleUrls: ['./food-item-list.component.less']
})
export class FoodItemListComponent implements OnInit {

    @Input() fridgeId: string;

    foodItems: any[]= [];

    constructor(private foodService: FoodItemService) {
    }

    ngOnInit() {
        this.loadData();
    }

    private loadData() {
        this.foodService.loadByFridgeId(this.fridgeId).subscribe(data => {
            this.foodItems = data;
        });
    }
}
