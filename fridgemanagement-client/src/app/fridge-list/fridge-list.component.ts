import {Component, OnInit} from '@angular/core';
import {FridgeService} from "../shared/service/fridge.service";
import {Fridge} from "../shared/model/fridge.model";
import {MatDialog} from '@angular/material';
import {FridgeModal} from "../fridge-modal/fridge.modal.component";

@Component({
    selector: 'fm-fridge-list',
    templateUrl: './fridge-list.component.html',
    styleUrls: ['./fridge-list.component.less']
})
export class FridgeListComponent implements OnInit {

    fridgeList: Fridge[] = [];

    constructor(private fridgeService: FridgeService,
                private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.loadData();
    }

    private loadData(): void {
        this.fridgeService.loadAll().subscribe(data => {
            this.fridgeList = data;
        })
    }

    protected openFridgeModal(selectedFridge?: Fridge): void {
        const dialogRef = this.dialog.open(FridgeModal, {
            width: "250px",
            data: selectedFridge || new Fridge()
        });

        dialogRef.afterClosed().subscribe(result => {
            this.loadData();
        });
    }
}
