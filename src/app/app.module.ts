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

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    DiretivasComponent,
    RenderCondicionalComponent,
    ListRenderComponent,
    PipeOperatorsComponent,
    DataModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
