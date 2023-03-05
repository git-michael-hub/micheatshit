import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared-module';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { InterpolationRoutingModule } from './interpolation-routing.module';



@NgModule({
  declarations: [
    InterpolationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InterpolationRoutingModule
  ]
})
export class InterpolationModule { }
