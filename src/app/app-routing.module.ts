import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Comp1Component } from "./comps/comp1/comp1.component";
import { ListRenderComponent } from "./comps/list-render/list-render.component";
import { DataModelComponent } from "./comps/data-model/data-model.component";

const routes: Routes = [
    {path: '', component: Comp1Component},
    {path: 'list', component: ListRenderComponent},
    {path: 'two-way-data-biding', component: DataModelComponent},
    {path: '**', redirectTo:''}
]
// Decorator que inclui as rotas na classe AppRoutingModule
@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}