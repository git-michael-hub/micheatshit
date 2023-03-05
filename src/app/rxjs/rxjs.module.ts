import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared-module';
import { RxjsRoutingModule } from './rxjs-routing.module';
import { OverviewModule } from './overview/overview.module';
import { ReferenceModule } from './reference/reference.module';
import { GlossaryModule } from './glossary/glossary.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RxjsRoutingModule,

    OverviewModule,
    GlossaryModule,
    ReferenceModule,
  ]
})
export class RxjsModule { }
