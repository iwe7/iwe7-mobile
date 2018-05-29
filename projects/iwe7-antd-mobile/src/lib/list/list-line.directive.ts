import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[listLine]"
})
export class ListLineDirective {
  @Input() listLine: boolean;
  @HostBinding("class.am-list-line") _line: boolean = true;

  @HostBinding("class.am-list-line-multiple")
  get isMultiple() {
    return this.listLine;
  }
  constructor() {}
}
