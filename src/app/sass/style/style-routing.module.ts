import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OverviewComponent } from "./overview/overview.component";
import { ParentSelectorComponent } from "./parent-selector/parent-selector.component";
import { PlaceholderSelectorsComponent } from "./placeholder-selectors/placeholder-selectors.component";
import { PropertyDeclarationsComponent } from "./property-declarations/property-declarations.component";



const baseUrl: string = 'sass/rules';

const routes: Routes = [
    { path: `${baseUrl}/overview`, component: OverviewComponent },
    { path: `${baseUrl}/property-declarations`, component: PropertyDeclarationsComponent },
    { path: `${baseUrl}/parent-selector`, component: ParentSelectorComponent },
    { path: `${baseUrl}/placeholder-selectors`, component: PlaceholderSelectorsComponent },
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StyleRoutingModule { }