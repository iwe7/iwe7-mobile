import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SharedModule } from "../shared/shared.module";
import { AppButtonPageComponent } from "./button/button";
import { AppIndexPageComponent } from "./index/index";
import { AppIconPageComponent } from "./icon/icon";
import { AppFlexPageComponent } from "./flex/flex";

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
  },
  {
    path: "flex",
    component: AppFlexPageComponent
  }
];
export const PagesComponents = [
  AppButtonPageComponent,
  AppIndexPageComponent,
  AppIconPageComponent,
  AppFlexPageComponent
];
@NgModule({
  declarations: [...PagesComponents],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesModule {}
