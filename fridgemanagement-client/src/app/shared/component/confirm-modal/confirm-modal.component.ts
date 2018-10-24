import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
    selector: 'fm-confirm-modal',
    templateUrl: './confirm-modal.component.html',
    styleUrls: ['./confirm-modal.component.less']
})
export class ConfirmModalComponent {

    constructor(private dialogRef: MatDialogRef<ConfirmModalComponent>,
                @Inject(MAT_DIALOG_DATA) public data: string) {
    }

    onCancel(): void {
        this.dialogRef.close(false);
    }

    onConfirm(): void {
        this.dialogRef.close(true);
    }
}
