import {PlatformLocation} from "@angular/common";
import {Injectable, isDevMode} from "@angular/core";

@Injectable()
export class Url {

    private origin: string = (this.platformLocation as any).location.origin;
    private pathname: string = (this.platformLocation as any).location.pathname;

    readonly PORT: string;
    readonly PROTOCOL: string;
    readonly API: string;
    readonly FRIDGE_API: string;
    readonly FOOD_API: string;

    constructor(private platformLocation: PlatformLocation) {
        this.PROTOCOL = "http://";
        this.PORT = "8080";
        this.API = (isDevMode() ? this.PROTOCOL + "localhost:" + this.PORT + "/" : this.origin + this.pathname);
        this.FRIDGE_API = this.API + "fridge";
        this.FOOD_API = this.API + "food";
    }

    loadFoodItemsByFridgeId(id: string) {
        return `${this.FOOD_API}?id=${id}`;
    }

    deleteFoodItemById(id: string) {
        return `${this.FOOD_API}?id=${id}`;
    }

    deleteFridgeById(id: string, newFridgeId: string) {
        return `${this.FRIDGE_API}?id=${id}&newId=${newFridgeId}`
    }
}
