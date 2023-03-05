import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BooleanComponent } from "./boolean/boolean.component";
import { EqualityComponent } from "./equality/equality.component";
import { NumericComponent } from "./numeric/numeric.component";
import { OverviewComponent } from "./overview/overview.component";
import { RelationalComponent } from "./relational/relational.component";
import { StringComponent } from "./string/string.component";


const baseUrl: string = 'sass/operators';

const routes: Routes = [
    { path: `${baseUrl}/overview`, component: OverviewComponent },
    { path: `${baseUrl}/equality`, component: EqualityComponent },
    { path: `${baseUrl}/relational`, component: RelationalComponent },
    { path: `${baseUrl}/numeric`, component: NumericComponent },
    { path: `${baseUrl}/string`, component: StringComponent },
    { path: `${baseUrl}/boolean`, component: BooleanComponent },
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OperatorsRoutingModule { }