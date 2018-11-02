import {Component, Input, OnInit} from '@angular/core';
import {FoodItemService} from "../../../../shared/service/food-item.service";
import {DatePipe} from '@angular/common';
import {FoodItem} from "../../../../shared/model/food-item.model";
import {MatDialog, MatIconRegistry} from "@angular/material";
import {FoodEditModalComponent} from "../food-edit-modal/food-edit-modal.component";
import {ConfirmModalComponent} from "../../../../shared/component/confirm-modal/confirm-modal.component";
import {DomSanitizer} from "@angular/platform-browser";

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
                private dialog: MatDialog,
                private matIconRegistry: MatIconRegistry,
                private domSanitizer: DomSanitizer) {
        this.matIconRegistry.addSvgIcon("box_closed", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/box_closed.svg"));
        this.matIconRegistry.addSvgIcon("box_open", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/box_open.svg"));
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
            return "noch ungeöffnet";
        }
    }

    public getRemainingPercent(food: FoodItem): number {
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

    public openFoodItemModal(selectedFoodItem?: FoodItem) {
        let foodItem = new FoodItem(selectedFoodItem);
        foodItem.fridgeId = this.fridgeId;
        const dialogRef = this.dialog.open(FoodEditModalComponent, {
            width: "500px",
            data: foodItem
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

    public onRemoveItem(selectedItem: FoodItem): void {
        const dialogRef = this.dialog.open(ConfirmModalComponent, {
            width: "500px",
            data: {name: selectedItem.name}
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.foodService.removeFoodItem(selectedItem.id).subscribe(value => {
                    if (value) {
                        this.foodItems.splice(this.foodItems.indexOf(selectedItem));
                    }
                });
            }
        })
    }
}
