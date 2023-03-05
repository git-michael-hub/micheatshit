import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared-module';
import { SyntaxRoutingModule } from './syntax-routing.module';
import { CommentsComponent } from './comments/comments.component';
import { SpecialFunctionComponent } from './special-function/special-function.component';
import { StructureComponent } from './structure/structure.component';
import { ParsingComponent } from './parsing/parsing.component';
import { OverviewComponent } from './overview/overview.component';



@NgModule({
  declarations: [
    CommentsComponent,
    SpecialFunctionComponent,
    StructureComponent,
    ParsingComponent,
    OverviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SyntaxRoutingModule
  ]
})
export class SyntaxModule { }
