import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Comp1Component } from "./comps/comp1/comp1.component";
import { ListRenderComponent } from "./comps/list-render/list-render.component";
import { DataModelComponent } from "./comps/data-model/data-model.component";
import { HooksPageComponent } from "./comps/life-cycle-hooks/hooks-page/hooks-page.component";

import { ObservablesModule } from "./observables/observables.module"

const routes: Routes = [
    {path: '', component: Comp1Component},
    {path: 'list', component: ListRenderComponent},
    {path: 'two-way-data-biding', component: DataModelComponent},
    {path: 'hooks', component: HooksPageComponent},
    {path: 'observables', loadChildren: () => ObservablesModule}, // loadChildren no lugar da propriedade component permite carregar os módulos de forma assíncrona, o que é útil para aplicativos grandes, pois reduz o tempo de carregamento inicial (lazy loading)
    {path: '**', redirectTo:''}
]
// Decorator que inclui as rotas na classe AppRoutingModule
@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}