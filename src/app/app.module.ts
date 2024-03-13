import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Comp1Component } from './comps/comp1/comp1.component';
import { DiretivasComponent } from './comps/diretivas/diretivas.component';
import { RenderCondicionalComponent } from './comps/render-condicional/render-condicional.component';
import { ListRenderComponent } from './comps/list-render/list-render.component';
import { PipeOperatorsComponent } from './comps/pipe-operators/pipe-operators.component';
import { DataModelComponent } from './comps/data-model/data-model.component';
import { HooksComponent } from './comps/life-cycle-hooks/hooks/hooks.component';
import { NgContentComponent } from './comps/ng-content/ng-content.component';

@NgModule({
  declarations: [ //Todos os componentes, diretivas e pipes que serao usados nesse modulo
    AppComponent,
    Comp1Component,
    DiretivasComponent,
    RenderCondicionalComponent,
    ListRenderComponent,
    PipeOperatorsComponent,
    DataModelComponent,
    HooksComponent,
    NgContentComponent
  ],
  imports: [  //Importa outros "modulos"
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [],  //Tudo aquilo que se quer fornecer (componentes, diretivas e pipes) para outros modulos que importaram este modulo poderao ver (pode-se exportar somente partes espeficas do modulo)

  providers: [],  //Services (injecao de dependencias)

  bootstrap: [  //Componentes de inicializacao
    AppComponent
  ]
})
export class AppModule { }
