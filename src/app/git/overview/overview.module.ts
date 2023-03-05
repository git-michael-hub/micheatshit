import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewRoutingModule } from './overview-routing';
import { InstallationComponent } from './installation/installation.component';
import { CreateRepositoriesComponent } from './create-repositories/create-repositories.component';
import { ConfigureToolingComponent } from './configure-tooling/configure-tooling.component';
import { BranchesComponent } from './branches/branches.component';
import { SynchronizeChangesComponent } from './synchronize-changes/synchronize-changes.component';
import { MakeChangesComponent } from './make-changes/make-changes.component';
import { RedoCommitsComponent } from './redo-commits/redo-commits.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { SharedModule } from 'src/app/shared-module';
import { SshComponent } from './ssh/ssh.component';
import { MergeConflictsComponent } from './merge-conflicts/merge-conflicts.component';
import { CommitMistakesComponent } from './commit-mistakes/commit-mistakes.component';
import { ForgotBranchComponent } from './forgot-branch/forgot-branch.component';
import { MergeStrategiesComponent } from './merge-strategies/merge-strategies.component';
import { CherryPickingComponent } from './cherry-picking/cherry-picking.component';
import { StashComponent } from './stash/stash.component';



@NgModule({
  declarations: [
    InstallationComponent,
    CreateRepositoriesComponent,
    ConfigureToolingComponent,
    BranchesComponent,
    SynchronizeChangesComponent,
    MakeChangesComponent,
    RedoCommitsComponent,
    GlossaryComponent,
    SshComponent,
    MergeConflictsComponent,
    CommitMistakesComponent,
    ForgotBranchComponent,
    MergeStrategiesComponent,
    CherryPickingComponent,
    StashComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OverviewRoutingModule,
  ]
})
export class OverviewModule { }
