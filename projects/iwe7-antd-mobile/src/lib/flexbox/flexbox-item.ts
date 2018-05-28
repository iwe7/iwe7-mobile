import { Directive, Injector } from "@angular/core";
import { Iwe7BaseDirective } from "iwe7-base";

@Directive({ selector: "[am-flexbox-item],[flexItem]" })
export class AmFlexboxItemDirective extends Iwe7BaseDirective {
  constructor(injector: Injector) {
    super(injector, "am-flexbox-item");
  }
}
