import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AntdMobileModule } from "../../../projects/iwe7-antd-mobile/src/public_api";
import { ComponentsModule } from "../components/components.module";
import { HttpClientModule } from "@angular/common/http";
import { Iwe7FormsModule } from "projects/iwe7-forms/src/lib/form";
import { Iwe7DirectivesModule } from "projects/iwe7-directives/src/lib/module";
import { DialogModule } from "iwe7-dialog";
import { ScrollingModule } from "iwe7-scrolling";
import {
  Iwe7ButtonComponent,
} from "./button.example";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,
    AntdMobileModule,
    ComponentsModule,
    HttpClientModule,
    Iwe7FormsModule,
    Iwe7DirectivesModule,
    DialogModule,
    ScrollingModule,
    ReactiveFormsModule
  ],
  declarations: [Iwe7ButtonComponent],
  exports: [
    AntdMobileModule,
    ComponentsModule,
    Iwe7DirectivesModule,
    DialogModule,
    ScrollingModule,
    Iwe7ButtonComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
