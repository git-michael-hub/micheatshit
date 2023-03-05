import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ModulesComponent } from "../basics/modules/modules.component";
import { ColorComponent } from "./color/color.component";
import { ListComponent } from "./list/list.component";
import { MapComponent } from "./map/map.component";
import { MathComponent } from "./math/math.component";
import { MetaComponent } from "./meta/meta.component";
import { OverviewComponent } from "./overview/overview.component";
import { SelectorComponent } from "./selector/selector.component";
import { StringComponent } from "./string/string.component";



const baseUrl: string = 'sass/built-in';

const routes: Routes = [
    { path: `${baseUrl}/overview`, component: OverviewComponent },
    { path: `${baseUrl}/color`, component: ColorComponent },
    { path: `${baseUrl}/list`, component: ListComponent },
    { path: `${baseUrl}/map`, component: MapComponent },
    { path: `${baseUrl}/math`, component: MathComponent },
    { path: `${baseUrl}/meta`, component: MetaComponent },
    { path: `${baseUrl}/selector`, component: SelectorComponent },
    { path: `${baseUrl}/string`, component: StringComponent },
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModulesRoutingModule { }