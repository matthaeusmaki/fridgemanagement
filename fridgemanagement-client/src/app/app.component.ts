import {Component} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'fm-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    title = 'fridgemanagement-client';

    constructor(private matIconRegistry: MatIconRegistry,
                private domSanitizer: DomSanitizer) {
        this.matIconRegistry.addSvgIcon("box_closed", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/box_closed.svg"));
        this.matIconRegistry.addSvgIcon("box_open", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/box_open.svg"));
    }
}
