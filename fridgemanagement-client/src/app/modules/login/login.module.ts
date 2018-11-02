import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "./component/login/login.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LoginComponent
    ],
    entryComponents: [
        LoginComponent
    ]
})
export class LoginModule {
}
