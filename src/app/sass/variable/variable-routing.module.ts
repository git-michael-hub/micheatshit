import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VariablesComponent } from "../basics/variables/variables.component";
import { VariableComponent } from "./variable/variable.component";


const baseUrl: string = 'sass/variable';

const routes: Routes = [
    { path: `${baseUrl}/variable`, component: VariableComponent },
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VariableRoutingModule { }