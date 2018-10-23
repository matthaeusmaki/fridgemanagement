export class FoodItem {

    id: string;
    name: string;
    barcodeId: string;
    openDate: Date;
    expirationDate: Date;
    fridgeId: string;
    startDate: Date;

    remainingPercent: number;
    remainingDays: number;

    constructor(data?: FoodItem) {
        this.id = data ? data.id || undefined : undefined;
        this.name = data ? data.name || "" : "";
        this.barcodeId = data ? data.barcodeId || "" : "";
        this.openDate = data ? data.openDate || null : null;
        this.expirationDate = data ? data.expirationDate || new Date() : new Date();
        this.fridgeId = data ? data.fridgeId || "" : "";
        this.startDate = data ? data.startDate || new Date() : new Date();
    }

}
