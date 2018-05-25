import { Directive, Injector, HostBinding } from "@angular/core";
import { Iwe7BaseComponent } from "iwe7-base";

@Directive({ selector: "[am-picker-col-indicator]" })
export class AmPickerColIndicatorDirective extends Iwe7BaseComponent {
  constructor(injector: Injector) {
    super(injector, "am-picker-col-indicator");
  }
}
