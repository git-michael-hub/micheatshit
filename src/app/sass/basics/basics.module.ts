import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstallationComponent } from './installation/installation.component';
import { PreprocessingComponent } from './preprocessing/preprocessing.component';
import { VariablesComponent } from './variables/variables.component';
import { NestingComponent } from './nesting/nesting.component';
import { PartialsComponent } from './partials/partials.component';
import { ModulesComponent } from './modules/modules.component';
import { MixinsComponent } from './mixins/mixins.component';
import { InheritanceComponent } from './inheritance/inheritance.component';
import { OperatorsComponent } from './operators/operators.component';
import { SharedModule } from 'src/app/shared-module';
import { BasicsRoutingModule } from './basics-routing.module';



@NgModule({
  declarations: [
    InstallationComponent,
    PreprocessingComponent,
    VariablesComponent,
    NestingComponent,
    PartialsComponent,
    ModulesComponent,
    MixinsComponent,
    InheritanceComponent,
    OperatorsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BasicsRoutingModule,
  ]
})
export class BasicsModule { }
