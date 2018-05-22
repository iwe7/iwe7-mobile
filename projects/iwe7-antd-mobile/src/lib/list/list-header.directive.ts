import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: "[listHeader]"
})
export class ListHeaderDirective {
  @HostBinding("class.am-list-header") _header: boolean = true;
  constructor() {}
}
