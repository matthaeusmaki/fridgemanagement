import {Component, OnInit} from '@angular/core';
import {FridgeService} from "../shared/service/fridge.service";
import {Fridge} from "../shared/model/fridge.model";

@Component({
    selector: 'fm-fridge-list',
    templateUrl: './fridge-list.component.html',
    styleUrls: ['./fridge-list.component.less']
})
export class FridgeListComponent implements OnInit {

    fridgeList: Fridge[] = [];

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
