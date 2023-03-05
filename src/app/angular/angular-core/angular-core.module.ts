import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { AngularCoreRoutingModule } from './angular-core-routing.module';
import { TemplatesComponent } from './templates/templates.component';
import { DirectivesComponent } from './directives/directives.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { SharedModule } from 'src/app/shared-module';



@NgModule({
  declarations: [
    ComponentsComponent,
    TemplatesComponent,
    DirectivesComponent,
    DependencyInjectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AngularCoreRoutingModule,
  ]
})
export class AngularCoreModule { }
