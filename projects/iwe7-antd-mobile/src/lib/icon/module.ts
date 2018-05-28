import { NgModule, Injector } from "@angular/core";

import { AmIconComponent, AmIconDirective } from "./icon";
import { Iwe7BaseModule } from "iwe7-base";
@NgModule({
  exports: [AmIconComponent, AmIconDirective],
  declarations: [AmIconComponent, AmIconDirective]
})
export class AmIconModule {}
