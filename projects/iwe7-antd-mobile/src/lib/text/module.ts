import { NgModule, Injector } from "@angular/core";

import { AmTextComponent } from "./text";
import { Iwe7BaseModule } from "iwe7-base";
@NgModule({
  declarations: [AmTextComponent],
  entryComponents: [AmTextComponent]
})
export class AmTextModule extends Iwe7BaseModule {
  constructor(injector: Injector) {
    super(injector);
    this.registerElement("am-text", AmTextComponent, this.injector);
  }
}
