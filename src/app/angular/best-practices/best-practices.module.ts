import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestPracticesRoutingModule } from './best-practices-routing.module';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { LazyLoadingFeatureModulesComponent } from './lazy-loading-feature-modules/lazy-loading-feature-modules.component';
import { InjectionTokensComponent } from './injection-tokens/injection-tokens.component';
import { SharedModule } from 'src/app/shared-module';



@NgModule({
  declarations: [
    PropertyBindingComponent,
    LazyLoadingFeatureModulesComponent,
    InjectionTokensComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BestPracticesRoutingModule,
  ]
})
export class BestPracticesModule { }
