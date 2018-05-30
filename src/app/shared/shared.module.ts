import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AntdMobileModule } from "../../../projects/iwe7-antd-mobile/src/public_api";
import { ComponentsModule } from "../components/components.module";
import { HttpClientModule } from "@angular/common/http";
import { DialogModule } from "iwe7-dialog";
import { ScrollingModule } from "iwe7-scrolling";
import {
  Iwe7ButtonComponent,
} from "./button.example";
import { ReactiveFormsModule } from "@angular/forms";
import { Iwe7JdIndexModule } from '../../../projects/iwe7-jd-index/src/public_api';
@NgModule({
  imports: [
    CommonModule,
    AntdMobileModule,
    ComponentsModule,
    HttpClientModule,
    DialogModule,
    ScrollingModule,
    ReactiveFormsModule,
    Iwe7JdIndexModule
  ],
  declarations: [Iwe7ButtonComponent],
  exports: [
    AntdMobileModule,
    ComponentsModule,
    DialogModule,
    ScrollingModule,
    Iwe7ButtonComponent,
    ReactiveFormsModule,
    Iwe7JdIndexModule
  ]
})
export class SharedModule { }
