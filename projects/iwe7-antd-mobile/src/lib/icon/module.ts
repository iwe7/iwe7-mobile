import { NgModule, Injector } from "@angular/core";

import { AmIconComponent } from "./icon.component";
import { Iwe7BaseModule } from "iwe7-base";
@NgModule({
  exports: [AmIconComponent],
  declarations: [AmIconComponent],
  entryComponents: [AmIconComponent]
})
export class AmIconModule extends Iwe7BaseModule {
  constructor(injector: Injector) {
    super(injector);
    this.registerElement("am-icon", AmIconComponent, this.injector);
  }
}
