import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComparisonComponent } from "./comparison/comparison.component";
import { ConfigComponent } from "./config/config.component";
import { CreatingComponent } from "./creating/creating.component";
import { DebuggingComponent } from "./debugging/debugging.component";
import { MergingComponent } from "./merging/merging.component";
import { PatchingComponent } from "./patching/patching.component";
import { SnapshottingComponent } from "./snapshotting/snapshotting.component";
import { UpdatingComponent } from "./updating/updating.component";

const baseUrl: string = 'git/reference';

const routes: Routes = [
    { path: `${baseUrl}/config`, component: ConfigComponent },
    { path: `${baseUrl}/creating`, component: CreatingComponent },
    { path: `${baseUrl}/snapshotting`, component: SnapshottingComponent },
    { path: `${baseUrl}/merging`, component: MergingComponent },
    { path: `${baseUrl}/updating`, component: UpdatingComponent },
    { path: `${baseUrl}/comparison`, component: ComparisonComponent },
    { path: `${baseUrl}/patching`, component: PatchingComponent },
    { path: `${baseUrl}/debugging`, component: DebuggingComponent },
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReferenceRoutingModule { }