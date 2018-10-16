import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Url} from "../const/url";
import {Fridge} from "../type/fridge";

@Injectable({
    providedIn: 'root'
})
export class FridgeService {

    constructor(private http: HttpClient) {
    }

    loadAll(): Observable<Fridge[]> {
        return this.http.get<Fridge[]>(Url.getFridge());
    }
}
