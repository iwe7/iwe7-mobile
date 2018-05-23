import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AntdMobileModule } from "../../../projects/iwe7-antd-mobile/src/public_api";
import { ComponentsModule } from "../components/components.module";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  imports: [CommonModule, AntdMobileModule, ComponentsModule, HttpClientModule],
  declarations: [],
  exports: [AntdMobileModule, ComponentsModule]
})
export class SharedModule {}
