import { Directive, Injector, HostBinding } from "@angular/core";
@Directive({ selector: "[am-picker-col-indicator]" })
export class AmPickerColIndicatorDirective {
  @HostBinding("class.am-picker-col-indicator") _content: boolean = true;
  constructor(injector: Injector) {}
}
