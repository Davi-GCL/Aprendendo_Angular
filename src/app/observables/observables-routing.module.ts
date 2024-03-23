import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ObservablesPageComponent } from "./observables-page/observables-page.component";

const routes: Routes = [
    {path:"", component: ObservablesPageComponent}
]

//Decorator da classe ObservablesRoutingModule:
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ObservablesRoutingModule{};