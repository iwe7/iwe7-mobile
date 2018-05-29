import { Directive, Injector } from "@angular/core";
import { Iwe7BaseDirective } from "iwe7-base";

@Directive({ selector: "[am-slider-mark]" })
export class AmSliderMarkDirective extends Iwe7BaseDirective {
  constructor(injector: Injector) {
    super(injector, "am-slider-mark");
  }
}
