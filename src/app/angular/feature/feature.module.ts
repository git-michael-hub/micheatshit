import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { FormsComponent } from './forms/forms.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { TestingComponent } from './testing/testing.component';
import { AnimationsComponent } from './animations/animations.component';
import { RoutingNavigationComponent } from './routing-navigation/routing-navigation.component';
import { SharedModule } from 'src/app/shared-module';



@NgModule({
  declarations: [
    RoutingNavigationComponent,
    FormsComponent,
    HttpClientComponent,
    TestingComponent,
    AnimationsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FeatureRoutingModule,
  ]
})
export class FeatureModule { }
