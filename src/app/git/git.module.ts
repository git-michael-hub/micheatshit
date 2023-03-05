import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared-module';
import { GitRoutingModule } from './git-routing.module';
import { OverviewModule } from './overview/overview.module';
import { ReferenceModule } from './reference/reference.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    GitRoutingModule,
    
    OverviewModule,
    ReferenceModule,
  ]
})
export class GitModule { }
