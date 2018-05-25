import { Directive, Injector, HostBinding, Input } from "@angular/core";
import { toBoolean } from "iwe7-util";

@Directive({ selector: "[am-picker-col-item]" })
export class AmPickerColItemDirective {
  _checked: boolean = false;
  @HostBinding("class.am-picker-col-item-selected")
  @Input()
  set checked(val: boolean) {
    this._checked = toBoolean(val);
  }
  get checked() {
    return this._checked;
  }

  @HostBinding("class.am-picker-col-item") _item: boolean = true;

  constructor(injector: Injector) {}
}
