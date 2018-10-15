import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FridgeService {

    constructor(private http: HttpClient) {
    }

    loadAll(): Observable<any> {
        return this.http.get("//localhost:8080/fridge");//this.url.getFridge)
    }
}
