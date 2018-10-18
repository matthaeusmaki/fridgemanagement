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

    constructor(private http: HttpClient) {
    }

    loadAll(): Observable<Fridge[]> {
        return this.http.get<Fridge[]>(Url.FRIDGE_API);
    }

    createFridge(fridge: Fridge): Observable<Fridge> {
        return this.http.post<Fridge>(Url.FRIDGE_API, fridge, httpOptions);
    }
}
