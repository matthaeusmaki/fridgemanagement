import {Component, OnInit} from '@angular/core';
import {FridgeService} from "../shared/fridge/fridge.service";

@Component({
    selector: 'fm-fridge-list',
    templateUrl: './fridge-list.component.html',
    styleUrls: ['./fridge-list.component.less']
})
export class FridgeListComponent implements OnInit {

    fridgeList: any[] = [];

    constructor(private fridgeService: FridgeService) {
    }

    ngOnInit() {
        this.loadData();
    }

    private loadData() {
        this.fridgeService.loadAll().subscribe(data => {
            this.fridgeList = data;
        })
    }

}
