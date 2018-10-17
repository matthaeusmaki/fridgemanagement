import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Url} from "../const/url";
import {Fridge} from "../model/fridge.model";

@Injectable()
export class FridgeService {

    constructor(private http: HttpClient) {
    }

    loadAll(): Observable<Fridge[]> {
        return this.http.get<Fridge[]>(Url.getFridge());
    }
}
