export class Url {

    public static readonly baseUrl: string = "//localhost:8080";

    public static getFridge() {
        return Url.baseUrl + "/fridge";
    }

    public static loadFoodItemsByFridgeId(id: string) {
        return `${Url.baseUrl}/food?id=${id}`;
    }
}
