import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: "[listBody]"
})
export class ListBodyDirective {
  @HostBinding("class.am-list-body") _body: boolean = true;
  constructor() {}
}
