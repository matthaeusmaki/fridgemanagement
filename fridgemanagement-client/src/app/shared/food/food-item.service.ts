import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Url} from "../const/url";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodItemService {

  constructor(private http: HttpClient) {}

  loadByFridgeId(id: string): Observable<any> {
      return this.http.get(Url.getFoodByFridgeId(id));
  }
}
