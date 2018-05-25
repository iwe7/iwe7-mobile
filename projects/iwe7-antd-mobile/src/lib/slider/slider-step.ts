import { Directive, Injector } from "@angular/core";
import { Iwe7BaseDirective } from "iwe7-base";

@Directive({ selector: "[am-slider-step]" })
export class AmSliderStepDirective extends Iwe7BaseDirective {
  constructor(injector: Injector) {
    super(injector, "am-slider-step");
  }
}
