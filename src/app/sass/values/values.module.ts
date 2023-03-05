import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared-module';
import { OverviewComponent } from './overview/overview.component';
import { NumbersComponent } from './numbers/numbers.component';
import { StringsComponent } from './strings/strings.component';
import { ColorsComponent } from './colors/colors.component';
import { ListsComponent } from './lists/lists.component';
import { MapsComponent } from './maps/maps.component';
import { TrueFalseComponent } from './true-false/true-false.component';
import { NullComponent } from './null/null.component';
import { FunctionsComponent } from './functions/functions.component';
import { ValuesRoutingModule } from './values-routing.module';



@NgModule({
  declarations: [
    OverviewComponent,
    NumbersComponent,
    StringsComponent,
    ColorsComponent,
    ListsComponent,
    MapsComponent,
    TrueFalseComponent,
    NullComponent,
    FunctionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ValuesRoutingModule 
  ]
})
export class ValuesModule { }
