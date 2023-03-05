import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Subscription } from "rxjs";
import { ActionsComponent } from "./actions/actions.component";
import { ConceptsComponent } from "./concepts/concepts.component";
import { MajorEntitiesComponent } from "./major-entities/major-entities.component";
import { MinorEntitiesComponent } from "./minor-entities/minor-entities.component";
import { OtherComponent } from "./other/other.component";

const baseUrl: string = 'rxjs/glossary';

const routes: Routes = [
    { path: `${baseUrl}/major-entities`, component: MajorEntitiesComponent },
    { path: `${baseUrl}/minor-entities`, component: MinorEntitiesComponent },
    { path: `${baseUrl}/actions`, component: ActionsComponent },
    { path: `${baseUrl}/concepts`, component: ConceptsComponent },
    { path: `${baseUrl}/other`, component: OtherComponent },
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GlossaryRoutingModule { }