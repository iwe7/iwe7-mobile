import { Directive, Injector } from "@angular/core";
import { Iwe7BaseDirective } from "iwe7-base";

@Directive({ selector: "[am-image-picker-item]" })
export class AmImagePickerItemDirective extends Iwe7BaseDirective {
  constructor(injector: Injector) {
    super(injector, "am-image-picker-item");
  }
}
