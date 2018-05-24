import { Directive, Injector, HostBinding } from "@angular/core";
import { Iwe7BaseDirective } from "iwe7-base";

@Directive({ selector: "[am-image-picker-item-remove]" })
export class AmImagePickerItemRemoveDirective extends Iwe7BaseDirective {
  @HostBinding("attr.role") role: string = "button";
  constructor(injector: Injector) {
    super(injector, "am-image-picker-item-remove");
  }
}
