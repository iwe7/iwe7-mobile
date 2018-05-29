import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: "[listContent]"
})
export class ListContentDirective {
  @HostBinding("class.am-list-content") _content: boolean = true;
  constructor() {}
}
