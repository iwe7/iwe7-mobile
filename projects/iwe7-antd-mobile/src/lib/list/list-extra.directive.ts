import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: "[listExtra]"
})
export class ListExtraDirective {
  @HostBinding("class.am-list-extra") _extra: boolean = true;
  constructor() {}
}
