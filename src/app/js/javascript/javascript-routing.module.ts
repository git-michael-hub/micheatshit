import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdvancedFunctionsComponent } from "./advanced-functions/advanced-functions.component";
import { ClassesComponent } from "./classes/classes.component";
import { CodeQualityComponent } from "./code-quality/code-quality.component";
import { DataTypesComponent } from "./data-types/data-types.component";
import { ErrorHandlingComponent } from "./error-handling/error-handling.component";
import { FundamentalsComponent } from "./fundamentals/fundamentals.component";
import { GeneratorsComponent } from "./generators/generators.component";
import { MiscellaneousComponent } from "./miscellaneous/miscellaneous.component";
import { ModulesComponent } from "./modules/modules.component";
import { ObjectPropertiesComponent } from "./object-properties/object-properties.component";
import { ObjectsComponent } from "./objects/objects.component";
import { PromisesAsyncAwaitComponent } from "./promises-async-await/promises-async-await.component";
import { PrototypesInheritanceComponent } from "./prototypes-inheritance/prototypes-inheritance.component";

const baseUrl: string = 'js/javascript';

const routes: Routes = [
    { path: `${baseUrl}/fundamentals`, component: FundamentalsComponent },
    { path: `${baseUrl}/code-quality`, component: CodeQualityComponent },
    { path: `${baseUrl}/objects`, component: ObjectsComponent },
    { path: `${baseUrl}/data-types`, component: DataTypesComponent },
    { path: `${baseUrl}/advanced-functions`, component: AdvancedFunctionsComponent },
    { path: `${baseUrl}/object-properties`, component: ObjectPropertiesComponent },
    { path: `${baseUrl}/prototypes-inheritance`, component: PrototypesInheritanceComponent },
    { path: `${baseUrl}/classes`, component: ClassesComponent },
    { path: `${baseUrl}/error-handling`, component: ErrorHandlingComponent },
    { path: `${baseUrl}/promises-async-await`, component: PromisesAsyncAwaitComponent },
    { path: `${baseUrl}/generators`, component: GeneratorsComponent },
    { path: `${baseUrl}/modules`, component: ModulesComponent },
    { path: `${baseUrl}/miscellaneous`, component: MiscellaneousComponent },
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JavascriptRoutingModule { }