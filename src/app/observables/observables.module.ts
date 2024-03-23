import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservablesRoutingModule } from "./observables-routing.module";

import { ObservablesPageComponent } from './observables-page/observables-page.component';



@NgModule({
  declarations: [
    ObservablesPageComponent
  ],
  imports: [
    CommonModule,
    ObservablesRoutingModule
  ]
})
export class ObservablesModule { }
