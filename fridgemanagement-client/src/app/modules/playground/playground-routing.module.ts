import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PlaygroundComponent} from "./component/playground/playground.component";

const routes: Routes = [
    {
        path: "playground",
        component: PlaygroundComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlaygroundRoutingModule {

}
