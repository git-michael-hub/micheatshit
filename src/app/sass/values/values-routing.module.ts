import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ColorsComponent } from "./colors/colors.component";
import { FunctionsComponent } from "./functions/functions.component";
import { ListsComponent } from "./lists/lists.component";
import { MapsComponent } from "./maps/maps.component";
import { NullComponent } from "./null/null.component";
import { NumbersComponent } from "./numbers/numbers.component";
import { OverviewComponent } from "./overview/overview.component";
import { StringsComponent } from "./strings/strings.component";
import { TrueFalseComponent } from "./true-false/true-false.component";

const baseUrl: string = 'sass/values';

const routes: Routes = [
    { path: `${baseUrl}/overview`, component: OverviewComponent },
    { path: `${baseUrl}/numbers`, component: NumbersComponent },
    { path: `${baseUrl}/strings`, component: StringsComponent },
    { path: `${baseUrl}/colors`, component: ColorsComponent },
    { path: `${baseUrl}/lists`, component: ListsComponent },
    { path: `${baseUrl}/maps`, component: MapsComponent },
    { path: `${baseUrl}/true-false`, component: TrueFalseComponent },
    { path: `${baseUrl}/null`, component: NullComponent },
    { path: `${baseUrl}/functions`, component: FunctionsComponent },
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ValuesRoutingModule { }