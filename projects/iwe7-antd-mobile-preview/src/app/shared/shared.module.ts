import { AntdMobileModule } from "../../../../../projects/iwe7-antd-mobile/src/public_api";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { DemoNameComponent } from "./demo-name/demo-name";
import { DemoComponent } from "./demo/demo";

import { DemoTitleComponent } from "./demo-title/demo-title";
import { DemoContainerComponent } from "./demo-container/demo-container";

export const SharedComponents = [DemoComponent, DemoContainerComponent];
@NgModule({
  declarations: [...SharedComponents, DemoNameComponent, DemoTitleComponent],
  imports: [AntdMobileModule, RouterModule],
  exports: [AntdMobileModule, ...SharedComponents]
})
export class SharedModule {}
