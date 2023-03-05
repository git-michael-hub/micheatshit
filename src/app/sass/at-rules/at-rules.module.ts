import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared-module';
import { OverviewComponent } from './overview/overview.component';
import { UseComponent } from './use/use.component';
import { ForwardComponent } from './forward/forward.component';
import { ImportComponent } from './import/import.component';
import { MixinIncludeComponent } from './mixin-include/mixin-include.component';
import { FunctionComponent } from './function/function.component';
import { ExtendComponent } from './extend/extend.component';
import { ErrorComponent } from './error/error.component';
import { WarnComponent } from './warn/warn.component';
import { DebugComponent } from './debug/debug.component';
import { AtRootComponent } from './at-root/at-root.component';
import { FlowControlComponent } from './flow-control/flow-control.component';
import { FlowCssComponent } from './flow-css/flow-css.component';
import { AtRulesRoutingModule } from './at-rules.routing.module';



@NgModule({
  declarations: [
    OverviewComponent,
    UseComponent,
    ForwardComponent,
    ImportComponent,
    MixinIncludeComponent,
    FunctionComponent,
    ExtendComponent,
    ErrorComponent,
    WarnComponent,
    DebugComponent,
    AtRootComponent,
    FlowControlComponent,
    FlowCssComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AtRulesRoutingModule

  ]
})
export class AtRulesModule { }
