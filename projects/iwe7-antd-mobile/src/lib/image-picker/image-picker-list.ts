import { Directive, Injector, HostBinding } from "@angular/core";
import { Iwe7BaseDirective } from "iwe7-base";

@Directive({ selector: "[am-image-picker-list]" })
export class AmImagePickerListDirective extends Iwe7BaseDirective {
  @HostBinding("attr.role") role: string = "group";
  constructor(injector: Injector) {
    super(injector, "am-image-picker-list");
  }
}
