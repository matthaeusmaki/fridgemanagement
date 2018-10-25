import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Url} from "../const/url";
import {Observable} from 'rxjs';
import {FoodItem} from "../model/food-item.model";

@Injectable()
export class FoodItemService {

    constructor(private http: HttpClient, private url: Url) {
    }

    loadFoodItemsByFridgeId(id: string): Observable<FoodItem[]> {
        return this.http.get<FoodItem[]>(this.url.loadFoodItemsByFridgeId(id));
    }

    saveFoodItem(foodItem: FoodItem): Observable<FoodItem> {
        let result: Observable<FoodItem>;
        if (foodItem.id) {
            result = this.http.put<FoodItem>(this.url.FOOD_API, foodItem);
        } else {
            result = this.http.post<FoodItem>(this.url.FOOD_API, foodItem);
        }
        return result;
    }

    removeFoodItem(foodItemId: string): Observable<boolean> {
        return this.http.delete<boolean>(this.url.deleteFoodItemById(foodItemId));
    }
}
