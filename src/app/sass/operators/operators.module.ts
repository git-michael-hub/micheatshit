import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared-module';
import { OverviewComponent } from './overview/overview.component';
import { EqualityComponent } from './equality/equality.component';
import { RelationalComponent } from './relational/relational.component';
import { NumericComponent } from './numeric/numeric.component';
import { StringComponent } from './string/string.component';
import { BooleanComponent } from './boolean/boolean.component';
import { OperatorsRoutingModule } from './operators-routing.module';



@NgModule({
  declarations: [
    OverviewComponent,
    EqualityComponent,
    RelationalComponent,
    NumericComponent,
    StringComponent,
    BooleanComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OperatorsRoutingModule 
  ]
})
export class OperatorsModule { }
