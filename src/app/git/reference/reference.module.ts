import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferenceRoutingModule } from './reference-routing';
import { SharedModule } from 'src/app/shared-module';
import { ConfigComponent } from './config/config.component';
import { CreatingComponent } from './creating/creating.component';
import { SnapshottingComponent } from './snapshotting/snapshotting.component';
import { MergingComponent } from './merging/merging.component';
import { UpdatingComponent } from './updating/updating.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { PatchingComponent } from './patching/patching.component';
import { DebuggingComponent } from './debugging/debugging.component';



@NgModule({
  declarations: [
    ConfigComponent,
    CreatingComponent,
    SnapshottingComponent,
    MergingComponent,
    UpdatingComponent,
    ComparisonComponent,
    PatchingComponent,
    DebuggingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReferenceRoutingModule
  ]
})
export class ReferenceModule { }
