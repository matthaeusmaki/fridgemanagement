import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Url} from "../const/url";
import {Fridge} from "../model/fridge.model";
import {RestService} from "./rest.service";

@Injectable()
export class FridgeService {

    constructor(private url: Url, private rest: RestService) {
    }

    /**
     * Get all Fridges
     */
    public loadAll(): Observable<Fridge[]> {
        return this.rest.get(this.url.FRIDGE_API);
    }

    /**
     * Save a Fridge
     * @param fridge The Fridge to save
     */
    public saveFridge(fridge: Fridge): Observable<Fridge> {
        let result: Observable<Fridge>;
        if (fridge.id) {
            result = this.rest.put(this.url.FRIDGE_API, fridge);
        } else {
            result = this.rest.post(this.url.FRIDGE_API, fridge);
        }
        return result;
    }

    /**
     * Remove a Fridge with the requested id. And moving its FoodItems to the Fridge with other id.
     * @param fridgeToDeleteId Fridge to remove
     * @param newFridgeId Moving FoodItems to this Fridge
     */
    public deleteFridge(fridgeToDeleteId: string, newFridgeId: string): Observable<boolean> {
        return this.rest.delete(this.url.deleteFridgeById(fridgeToDeleteId, newFridgeId));
    }
}
