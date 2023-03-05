import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CodeExampleModule } from "./custom-elements/code/code-example.module";
import { CodeModule } from "./custom-elements/code/code.module";
import { MaterialModule } from "./material-module";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        FlexLayoutModule,
        CodeModule,
        CodeExampleModule,
    ],
    exports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        FlexLayoutModule,
        CodeModule,
        CodeExampleModule,
    ]
})
export class SharedModule { }