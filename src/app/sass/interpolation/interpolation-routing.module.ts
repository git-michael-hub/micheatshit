import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InterpolationComponent } from "./interpolation/interpolation.component";



const baseUrl: string = 'sass/interpolation';

const routes: Routes = [
    { path: `${baseUrl}/interpolation`, component: InterpolationComponent },
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InterpolationRoutingModule { }