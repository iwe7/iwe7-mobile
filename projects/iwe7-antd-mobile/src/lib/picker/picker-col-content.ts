import { Directive, Injector } from "@angular/core";
import { Iwe7BaseComponent } from "iwe7-base";

@Directive({ selector: "[am-picker-col-content]" })
export class AmPickerColContentDirective extends Iwe7BaseComponent {
  constructor(injector: Injector) {
    super(injector, "am-picker-col-content");
  }
}
