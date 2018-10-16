import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Url} from "../const/url";
import {Observable} from 'rxjs';
import {FoodItem} from "../type/food.item";

@Injectable({
    providedIn: 'root'
})
export class FoodItemService {

    constructor(private http: HttpClient) {
    }

    loadFoodItemsByFridgeId(id: string): Observable<FoodItem[]> {
        return this.http.get<FoodItem[]>(Url.loadFoodItemsByFridgeId(id));
    }
}
