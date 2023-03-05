import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BranchesComponent } from "./branches/branches.component";
import { CherryPickingComponent } from "./cherry-picking/cherry-picking.component";
import { CommitMistakesComponent } from "./commit-mistakes/commit-mistakes.component";
import { ConfigureToolingComponent } from "./configure-tooling/configure-tooling.component";
import { CreateRepositoriesComponent } from "./create-repositories/create-repositories.component";
import { ForgotBranchComponent } from "./forgot-branch/forgot-branch.component";
import { GlossaryComponent } from "./glossary/glossary.component";
import { InstallationComponent } from "./installation/installation.component";
import { MakeChangesComponent } from "./make-changes/make-changes.component";
import { MergeConflictsComponent } from "./merge-conflicts/merge-conflicts.component";
import { MergeStrategiesComponent } from "./merge-strategies/merge-strategies.component";
import { RedoCommitsComponent } from "./redo-commits/redo-commits.component";
import { SshComponent } from "./ssh/ssh.component";
import { StashComponent } from "./stash/stash.component";
import { SynchronizeChangesComponent } from "./synchronize-changes/synchronize-changes.component";

const baseUrl: string = 'git/overview';

const routes: Routes = [
    { path: `${baseUrl}/installation`, component: InstallationComponent },
    { path: `${baseUrl}/create-repositories`, component: CreateRepositoriesComponent },
    { path: `${baseUrl}/configure-tooling`, component: ConfigureToolingComponent },
    { path: `${baseUrl}/branches`, component: BranchesComponent },
    { path: `${baseUrl}/synchronize-changes`, component: SynchronizeChangesComponent },
    { path: `${baseUrl}/make-changes`, component: MakeChangesComponent },
    { path: `${baseUrl}/redo-commits`, component: RedoCommitsComponent },
    { path: `${baseUrl}/merge-conflicts`, component: MergeConflictsComponent },
    { path: `${baseUrl}/commit-mistakes`, component: CommitMistakesComponent },
    { path: `${baseUrl}/forgot-branch`, component: ForgotBranchComponent },
    { path: `${baseUrl}/merge-strategies`, component: MergeStrategiesComponent },
    { path: `${baseUrl}/cherry-picking`, component: CherryPickingComponent },
    { path: `${baseUrl}/stash`, component: StashComponent },
    { path: `${baseUrl}/glossary`, component: GlossaryComponent },
    { path: `${baseUrl}/ssh`, component: SshComponent },
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OverviewRoutingModule { }