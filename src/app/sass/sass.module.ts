import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared-module';
import { AtRulesModule } from './at-rules/at-rules.module';
import { BasicsModule } from './basics/basics.module';
import { InterpolationModule } from './interpolation/interpolation.module';
import { ModulesModule } from './modules/modules.module';
import { OperatorsModule } from './operators/operators.module';
import { StyleModule } from './style/style.module';
import { SyntaxModule } from './syntax/syntax.module';
import { ValuesModule } from './values/values.module';
import { VariableModule } from './variable/variable.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,

    AtRulesModule,
    BasicsModule,
    InterpolationModule,
    ModulesModule,
    OperatorsModule,
    StyleModule,
    SyntaxModule,
    ValuesModule,
    VariableModule,
  ]
})
export class SassModule { }
