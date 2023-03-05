import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared-module';
import { JavascriptModule } from './javascript/javascript.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    
    JavascriptModule,
  ]
})
export class JsModule { }
