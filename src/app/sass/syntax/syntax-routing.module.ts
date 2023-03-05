import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommentsComponent } from "./comments/comments.component";
import { OverviewComponent } from "./overview/overview.component";
import { ParsingComponent } from "./parsing/parsing.component";
import { SpecialFunctionComponent } from "./special-function/special-function.component";
import { StructureComponent } from "./structure/structure.component";


const baseUrl: string = 'sass/syntax';

const routes: Routes = [
    { path: `${baseUrl}/overview`, component: OverviewComponent },
    { path: `${baseUrl}/parsing`, component: ParsingComponent },
    { path: `${baseUrl}/structure`, component: StructureComponent },
    { path: `${baseUrl}/comments`, component: CommentsComponent },
    { path: `${baseUrl}/special-function`, component: SpecialFunctionComponent },
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SyntaxRoutingModule { }