import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FridgeService} from "../shared/service/fridge.service";
import {Fridge} from "../shared/model/fridge.model";

@Component({
    selector: 'fm-fridge-modal',
    templateUrl: './fridge-modal.component.html',
    styleUrls: ['./fridge-modal.component.less']
})
export class FridgeModalComponent {

    constructor(public dialogRef: MatDialogRef<FridgeModalComponent>,
                private fridgeService: FridgeService,
                @Inject(MAT_DIALOG_DATA) public data: Fridge) {
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    onSave(): void {
        this.fridgeService.saveFridge(this.data)
            .subscribe(result => {
                this.dialogRef.close(result);
            }, error => {
                console.log("Ein Fehler ist aufgetreten: " + error);
            });
    }

}
