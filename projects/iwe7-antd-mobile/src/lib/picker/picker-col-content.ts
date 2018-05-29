import { Directive, Injector, HostBinding } from "@angular/core";
@Directive({ selector: "[am-picker-col-content]" })
export class AmPickerColContentDirective {
  @HostBinding("class.am-picker-col-content") _content: boolean = true;
  constructor(injector: Injector) {}
}
