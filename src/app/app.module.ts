import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularModule } from './angular/angular.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared-module';
import { RxjsModule } from './rxjs/rxjs.module';
import { GitModule } from './git/git.module';
import { JsModule } from './js/js.module';
import { SassModule } from './sass/sass.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    AppRoutingModule,
    AngularModule,
    RxjsModule,
    GitModule,
    JsModule,
    SassModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
