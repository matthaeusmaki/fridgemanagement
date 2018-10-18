export class Url {

    static readonly API: string = "//localhost:8080";
    static readonly FRIDGE_API: string = Url.API + "/fridge";
    static readonly FOOD_API: string = Url.API + "/food";

    static loadFoodItemsByFridgeId(id: string) {
        return `${Url.FOOD_API}?id=${id}`;
    }
}
