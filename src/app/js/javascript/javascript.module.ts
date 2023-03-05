import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundamentalsComponent } from './fundamentals/fundamentals.component';
import { CodeQualityComponent } from './code-quality/code-quality.component';
import { ObjectsComponent } from './objects/objects.component';
import { DataTypesComponent } from './data-types/data-types.component';
import { AdvancedFunctionsComponent } from './advanced-functions/advanced-functions.component';
import { ObjectPropertiesComponent } from './object-properties/object-properties.component';
import { PrototypesInheritanceComponent } from './prototypes-inheritance/prototypes-inheritance.component';
import { ClassesComponent } from './classes/classes.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { PromisesAsyncAwaitComponent } from './promises-async-await/promises-async-await.component';
import { GeneratorsComponent } from './generators/generators.component';
import { ModulesComponent } from './modules/modules.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { JavascriptRoutingModule } from './javascript-routing.module';
import { SharedModule } from 'src/app/shared-module';



@NgModule({
  declarations: [
    FundamentalsComponent,
    CodeQualityComponent,
    ObjectsComponent,
    DataTypesComponent,
    AdvancedFunctionsComponent,
    ObjectPropertiesComponent,
    PrototypesInheritanceComponent,
    ClassesComponent,
    ErrorHandlingComponent,
    PromisesAsyncAwaitComponent,
    GeneratorsComponent,
    ModulesComponent,
    MiscellaneousComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    JavascriptRoutingModule
  ]
})
export class JavascriptModule { }
