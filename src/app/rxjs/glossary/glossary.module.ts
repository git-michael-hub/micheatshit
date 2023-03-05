import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MajorEntitiesComponent } from './major-entities/major-entities.component';
import { MinorEntitiesComponent } from './minor-entities/minor-entities.component';
import { ActionsComponent } from './actions/actions.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { OtherComponent } from './other/other.component';
import { SharedModule } from 'src/app/shared-module';
import { GlossaryRoutingModule } from './glossary-routing.module';



@NgModule({
  declarations: [
    MajorEntitiesComponent,
    MinorEntitiesComponent,
    ActionsComponent,
    ConceptsComponent,
    OtherComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GlossaryRoutingModule
  ]
})
export class GlossaryModule { }
