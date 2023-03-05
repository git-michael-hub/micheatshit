import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConceptualComponent } from './conceptual/conceptual.component';
import { ReferenceRoutingModule } from './reference-routing.module';
import { GlossaryComponent } from './glossary/glossary.component';
import { CheatSheetComponent } from './cheat-sheet/cheat-sheet.component';
import { MaterialModule } from 'src/app/material-module';
import { CodeModule } from 'src/app/custom-elements/code/code.module';
import { CodeExampleModule } from 'src/app/custom-elements/code/code-example.module';
import { SharedModule } from 'src/app/shared-module';



@NgModule({
  declarations: [
    ConceptualComponent,
    GlossaryComponent,
    CheatSheetComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReferenceRoutingModule,
  ]
})
export class ReferenceModule { }
