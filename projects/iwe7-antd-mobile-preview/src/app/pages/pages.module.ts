import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SharedModule } from "../shared/shared.module";
import { AppButtonPageComponent } from "./button/button";
import { AppIndexPageComponent } from "./index/index";
import { AppIconPageComponent } from "./icon/icon";

export const routes: Routes = [
  {
    path: "",
    component: AppIndexPageComponent
  },
  {
    path: "icon",
    component: AppIconPageComponent
  },
  {
    path: "button",
    component: AppButtonPageComponent
  }
];
export const PagesComponents = [
  AppButtonPageComponent,
  AppIndexPageComponent,
  AppIconPageComponent
];
@NgModule({
  declarations: [...PagesComponents],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesModule {}
