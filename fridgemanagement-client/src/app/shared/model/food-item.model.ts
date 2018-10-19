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
        this.id = data.id || undefined;
        this.name = data.name || "";
        this.barcodeId = data.barcodeId || "";
        this.openDate = data.openDate || null;
        this.expirationDate = data.expirationDate || new Date();
        this.fridgeId = data.fridgeId || "";
        this.startDate = data.startDate || new Date();
    }

}
