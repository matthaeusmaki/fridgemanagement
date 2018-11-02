import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';

const headers = new HttpHeaders(
    {
        'Content-Type': 'application/json',
        'Authorization': 'Basic' + btoa('admin:admin')
    }
);

@Injectable()
export class RestService {

    constructor(private http: HttpClient) {
    }

    /**
     * Calling GET request to requested url and returns an Observable
     * @param url Requested url for GET
     */
    public get(url: string): Observable<any> {
        return this.http.get(url);
    }

    /**
     * Calling POST request to requested url and returns an Observable
     * @param url Requested url for POST
     * @param payload The data to save
     */
    public post(url: string, payload: any): Observable<any> {
        return this.http.post(url, payload, {headers});
    }

    /**
     * Calling PUT request to requested url and returns an Observable
     * @param url Requested url for PUT
     * @param payload The data to save
     */
    public put(url: string, payload: any): Observable<any> {
        return this.http.put(url, payload, {headers});
    }

    /**
     * Calling DELETE request to requested url and returns an Observable
     * @param url Requested url for DELETE
     */
    public delete(url: string): Observable<any> {
        return this.http.delete(url);
    }
}
