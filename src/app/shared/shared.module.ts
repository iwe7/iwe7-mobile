import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AntdMobileModule } from "../../../projects/iwe7-antd-mobile/src/public_api";
import { ComponentsModule } from "../components/components.module";
import { HttpClientModule } from "@angular/common/http";
import { Iwe7FormsModule } from "projects/iwe7-forms/src/lib/form";
import { Iwe7DirectivesModule } from "projects/iwe7-directives/src/lib/module";
@NgModule({
  imports: [
    CommonModule,
    AntdMobileModule,
    ComponentsModule,
    HttpClientModule,
    Iwe7FormsModule,
    Iwe7DirectivesModule
  ],
  declarations: [],
  exports: [AntdMobileModule, ComponentsModule, Iwe7DirectivesModule]
})
export class SharedModule {}
