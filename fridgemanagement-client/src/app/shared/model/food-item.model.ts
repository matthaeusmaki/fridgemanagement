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

    //id: string, name: string, barcodeId: string, openDate: Date, expirationDate: Date, fridgeId: string, startDate: Date
    constructor(data: FoodItem) {
        this.id = data.id;
        this.name = data.name;
        this.barcodeId = data.barcodeId;
        this.openDate = data.openDate;
        this.expirationDate = data.expirationDate;
        this.fridgeId = data.fridgeId;
        this.startDate = data.startDate;
    }

    public getRemainingPercent(): number {
        if (!this.remainingPercent) {
            let startRemainging = FoodItem.calculateDays(new Date(this.startDate), new Date(this.expirationDate));
            this.remainingDays = FoodItem.calculateDays(new Date(), new Date(this.expirationDate));
            this.remainingPercent = Math.ceil(100 - this.remainingDays / startRemainging * 100);
        }
        return this.remainingPercent;
    }

    private static calculateDays(startDate: Date, endDate: Date) {
        let diff = startDate.getTime() - endDate.getTime();
        if (diff >= 0) {
            return 0;
        }
        return Math.ceil(Math.abs(diff) / (1000 * 3600 * 24));
    }

}
