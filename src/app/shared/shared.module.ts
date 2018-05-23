import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AntdMobileModule } from "../../../projects/iwe7-antd-mobile/src/public_api";
@NgModule({
  imports: [CommonModule, AntdMobileModule],
  declarations: [],
  exports: [AntdMobileModule]
})
export class SharedModule {}
