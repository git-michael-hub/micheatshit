import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared-module';
import { OverviewComponent } from './overview/overview.component';
import { PropertyDeclarationsComponent } from './property-declarations/property-declarations.component';
import { ParentSelectorComponent } from './parent-selector/parent-selector.component';
import { PlaceholderSelectorsComponent } from './placeholder-selectors/placeholder-selectors.component';
import { StyleRoutingModule } from './style-routing.module';



@NgModule({
  declarations: [
    OverviewComponent,
    PropertyDeclarationsComponent,
    ParentSelectorComponent,
    PlaceholderSelectorsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StyleRoutingModule
  ]
})
export class StyleModule { }
