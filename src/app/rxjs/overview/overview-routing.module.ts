import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Subscription } from "rxjs";
import { IntroductionComponent } from "./introduction/introduction.component";
import { ObservablesComponent } from "./observables/observables.component";
import { ObserverComponent } from "./observer/observer.component";
import { OperatorsComponent } from "./operators/operators.component";
import { SchedulerComponent } from "./scheduler/scheduler.component";
import { SubjectsComponent } from "./subjects/subjects.component";
import { SubscriptionComponent } from "./subscription/subscription.component";

const baseUrl: string = 'rxjs/overview';

const routes: Routes = [
    { path: `${baseUrl}/introduction`, component: IntroductionComponent },
    { path: `${baseUrl}/observables`, component: ObservablesComponent },
    { path: `${baseUrl}/observer`, component: ObserverComponent },
    { path: `${baseUrl}/operators`, component: OperatorsComponent },
    { path: `${baseUrl}/subjects`, component: SubjectsComponent },
    { path: `${baseUrl}/scheduler`, component: SchedulerComponent },
    { path: `${baseUrl}/subscription`, component: SubscriptionComponent },
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OverviewRoutingModule { }