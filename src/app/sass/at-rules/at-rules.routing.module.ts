import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AtRootComponent } from "./at-root/at-root.component";
import { DebugComponent } from "./debug/debug.component";
import { ErrorComponent } from "./error/error.component";
import { ExtendComponent } from "./extend/extend.component";
import { FlowControlComponent } from "./flow-control/flow-control.component";
import { FlowCssComponent } from "./flow-css/flow-css.component";
import { ForwardComponent } from "./forward/forward.component";
import { FunctionComponent } from "./function/function.component";
import { ImportComponent } from "./import/import.component";
import { MixinIncludeComponent } from "./mixin-include/mixin-include.component";
import { OverviewComponent } from "./overview/overview.component";
import { UseComponent } from "./use/use.component";
import { WarnComponent } from "./warn/warn.component";


const baseUrl: string = 'sass/at-rules';

const routes: Routes = [
    { path: `${baseUrl}/overview`, component: OverviewComponent },
    { path: `${baseUrl}/use`, component: UseComponent },
    { path: `${baseUrl}/forward`, component: ForwardComponent },
    { path: `${baseUrl}/import`, component: ImportComponent },
    { path: `${baseUrl}/mixin-include`, component: MixinIncludeComponent },
    { path: `${baseUrl}/function`, component: FunctionComponent },
    { path: `${baseUrl}/extend`, component: ExtendComponent },
    { path: `${baseUrl}/error`, component: ErrorComponent },
    { path: `${baseUrl}/warn`, component: WarnComponent },
    { path: `${baseUrl}/debug`, component: DebugComponent },
    { path: `${baseUrl}/at-root`, component: AtRootComponent },
    { path: `${baseUrl}/flow-control`, component: FlowControlComponent },
    { path: `${baseUrl}/from-css`, component: FlowCssComponent },
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AtRulesRoutingModule { }