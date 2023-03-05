import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared-module';
import { OverviewComponent } from './overview/overview.component';
import { ColorComponent } from './color/color.component';
import { ListComponent } from './list/list.component';
import { MapComponent } from './map/map.component';
import { MathComponent } from './math/math.component';
import { MetaComponent } from './meta/meta.component';
import { SelectorComponent } from './selector/selector.component';
import { StringComponent } from './string/string.component';
import { ModulesRoutingModule } from './modules-routing.module';



@NgModule({
  declarations: [
    OverviewComponent,
    ColorComponent,
    ListComponent,
    MapComponent,
    MathComponent,
    MetaComponent,
    SelectorComponent,
    StringComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }
