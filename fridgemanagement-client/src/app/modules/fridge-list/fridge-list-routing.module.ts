import {FridgeListComponent} from "./component/fridge-list/fridge-list.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const routes: Routes = [
    {
        path: "fridge",
        component: FridgeListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FridgeListRoutingModule {

}
