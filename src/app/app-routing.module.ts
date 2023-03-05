import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'angular', redirectTo: '/angular/reference/cheat-sheet', pathMatch: 'full' },
  { path: 'rxjs', redirectTo: '/rxjs/overview/introduction', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
