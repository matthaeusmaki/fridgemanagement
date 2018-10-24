import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Url} from "../const/url";
import {Observable} from 'rxjs';
import {FoodItem} from "../model/food-item.model";

@Injectable()
export class FoodItemService {

    constructor(private http: HttpClient) {
    }

    loadFoodItemsByFridgeId(id: string): Observable<FoodItem[]> {
        return this.http.get<FoodItem[]>(Url.loadFoodItemsByFridgeId(id));
    }

    saveFoodItem(foodItem: FoodItem): Observable<FoodItem> {
        let result: Observable<FoodItem>;
        if (foodItem.id) {
            result = this.http.put<FoodItem>(Url.FOOD_API, foodItem);
        } else {
            result = this.http.post<FoodItem>(Url.FOOD_API, foodItem);
        }
        return result;
    }

    removeFoodItem(foodItemId: string): Observable<boolean> {
        return this.http.delete<boolean>(Url.deleteFoodItemById(foodItemId), foodItemId);
    }
}
