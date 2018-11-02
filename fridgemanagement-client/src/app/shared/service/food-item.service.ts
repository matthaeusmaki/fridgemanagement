import {Injectable} from '@angular/core';
import {Url} from "../const/url";
import {Observable} from 'rxjs';
import {FoodItem} from "../model/food-item.model";
import {RestService} from "./rest.service";

@Injectable()
export class FoodItemService {

    constructor(private rest: RestService, private url: Url) {
    }

    /**
     * Get all FoodItems from requested Fridge
     * @param id The id of the requested Fridge
     */
    public loadFoodItemsByFridgeId(id: string): Observable<FoodItem[]> {
        return this.rest.get(this.url.loadFoodItemsByFridgeId(id));
    }

    /**
     * Save a FoodItem
     * @param foodItem The FoodItem to save
     */
    public saveFoodItem(foodItem: FoodItem): Observable<FoodItem> {
        let result: Observable<FoodItem>;
        if (foodItem.id) {
            result = this.rest.put(this.url.FOOD_API, foodItem);
        } else {
            result = this.rest.post(this.url.FOOD_API, foodItem);
        }
        return result;
    }

    /**
     * Removing an FoodItem with requested id
     * @param foodItemId The id of the FoodItem to remove
     */
    public removeFoodItem(foodItemId: string): Observable<boolean> {
        return this.rest.delete(this.url.deleteFoodItemById(foodItemId));
    }
}
