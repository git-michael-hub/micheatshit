import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InheritanceComponent } from "./inheritance/inheritance.component";
import { InstallationComponent } from "./installation/installation.component";
import { MixinsComponent } from "./mixins/mixins.component";
import { ModulesComponent } from "./modules/modules.component";
import { NestingComponent } from "./nesting/nesting.component";
import { OperatorsComponent } from "./operators/operators.component";
import { PartialsComponent } from "./partials/partials.component";
import { PreprocessingComponent } from "./preprocessing/preprocessing.component";
import { VariablesComponent } from "./variables/variables.component";

const baseUrl: string = 'sass/basics';

const routes: Routes = [
    { path: `${baseUrl}/installation`, component: InstallationComponent },
    { path: `${baseUrl}/preprocessing`, component: PreprocessingComponent },
    { path: `${baseUrl}/variables`, component: VariablesComponent },
    { path: `${baseUrl}/nesting`, component: NestingComponent },
    { path: `${baseUrl}/partials`, component: PartialsComponent },
    { path: `${baseUrl}/modules`, component: ModulesComponent },
    { path: `${baseUrl}/mixins`, component: MixinsComponent },
    { path: `${baseUrl}/inheritance`, component: InheritanceComponent },
    { path: `${baseUrl}/operators`, component: OperatorsComponent }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BasicsRoutingModule { }