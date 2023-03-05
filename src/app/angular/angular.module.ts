import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularRoutingModule } from './angular-routing.module';
import { SharedModule } from '../shared-module';
import { BestPracticesModule } from './best-practices/best-practices.module';
import { AngularCoreModule } from './angular-core/angular-core.module';
import { FeatureModule } from './feature/feature.module';
import { ReferenceModule } from './reference/reference.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    AngularRoutingModule,

    ReferenceModule,
    FeatureModule,
    BestPracticesModule,
    AngularCoreModule,
  ]
})
export class AngularModule { }
