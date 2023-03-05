import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared-module';
import { VariableComponent } from './variable/variable.component';
import { VariableRoutingModule } from './variable-routing.module';



@NgModule({
  declarations: [
    VariableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VariableRoutingModule
  ]
})
export class VariableModule { }
