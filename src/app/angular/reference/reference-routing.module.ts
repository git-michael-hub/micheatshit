import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CheatSheetComponent } from "./cheat-sheet/cheat-sheet.component";
import { ConceptualComponent } from "./conceptual/conceptual.component";
import { GlossaryComponent } from "./glossary/glossary.component";

const baseUrl: string = 'angular/reference';

const routes: Routes = [
    { path: `${baseUrl}/conceptual`, component: ConceptualComponent },
    { path: `${baseUrl}/glossary`, component: GlossaryComponent },
    { path: `${baseUrl}/cheat-sheet`, component: CheatSheetComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferenceRoutingModule { }