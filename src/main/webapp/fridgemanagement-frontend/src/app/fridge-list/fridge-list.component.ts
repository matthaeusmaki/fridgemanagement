import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'fm-fridge-list',
    templateUrl: './fridge-list.component.html',
    styleUrls: ['./fridge-list.component.less']
})
export class FridgeListComponent implements OnInit {

    test;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.loadData();
    }

    private loadData() {
        let fridgesUrl = 'localhost:8080/fridges';
        this.test = this.http.get(fridgesUrl);
    }

}
