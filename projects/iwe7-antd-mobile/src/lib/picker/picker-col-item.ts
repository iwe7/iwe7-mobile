import { Directive, Injector, HostBinding, Input } from "@angular/core";
import { Iwe7BaseComponent } from "iwe7-base";
import { toBoolean } from "iwe7-util";

@Directive({ selector: "[am-picker-col-item]" })
export class AmPickerColItemDirective extends Iwe7BaseComponent {
  _checked: boolean = false;
  @HostBinding("class.am-picker-col-item-selected")
  @Input()
  set checked(val: boolean) {
    this._checked = toBoolean(val);
  }
  get checked() {
    return this._checked;
  }
  constructor(injector: Injector) {
    super(injector, "am-picker-col-item");
  }
}
