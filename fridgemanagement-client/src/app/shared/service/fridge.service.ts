import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Url} from "../const/url";
import {Fridge} from "../model/fridge.model";
import {HttpHeaders} from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class FridgeService {

    constructor(private http: HttpClient, private url: Url) {
    }

    loadAll(): Observable<Fridge[]> {
        return this.http.get<Fridge[]>(this.url.FRIDGE_API);
    }

    saveFridge(fridge: Fridge): Observable<Fridge> {
        let result: Observable<Fridge>;
        if (fridge.id) {
            result = this.http.put<Fridge>(this.url.FRIDGE_API, fridge, httpOptions);
        } else {
            result = this.http.post<Fridge>(this.url.FRIDGE_API, fridge, httpOptions);
        }
        return result;
    }

    deleteFridge(fridgeToDeleteId: string, newFridgeId: string): Observable<boolean> {
        return this.http.delete<boolean>(this.url.deleteFridgeById(fridgeToDeleteId, newFridgeId));
    }
}
