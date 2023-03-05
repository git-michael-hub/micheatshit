import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction/introduction.component';
import { ObservablesComponent } from './observables/observables.component';
import { ObserverComponent } from './observer/observer.component';
import { OperatorsComponent } from './operators/operators.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { SharedModule } from 'src/app/shared-module';
import { OverviewRoutingModule } from './overview-routing.module';
import { SubscriptionComponent } from './subscription/subscription.component';



@NgModule({
  declarations: [
    IntroductionComponent,
    ObservablesComponent,
    ObserverComponent,
    OperatorsComponent,
    SubjectsComponent,
    SchedulerComponent,
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OverviewRoutingModule,
  ]
})
export class OverviewModule { }
