import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppLoadingComponent } from "./app-loading.component";

@NgModule({
  declarations: [
    AppLoadingComponent
  ],
  exports: [
    AppLoadingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppLoadingModule { }