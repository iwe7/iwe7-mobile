import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[listArrow]"
})
export class ListArrowDirective {
  @Input() listArrow: string;
  @HostBinding("class.am-list-arrow") _arrow: boolean = true;
  @HostBinding("class.am-list-arrow-horizontal")
  get isHorizontal() {
    return this.listArrow === "horizontal";
  }
  @HostBinding("class.am-list-arrow-up")
  get up() {
    return this.listArrow === "up";
  }
  @HostBinding("class.am-list-arrow-down")
  get down() {
    return this.listArrow === "down";
  }
  @HostBinding("class.am-list-arrow-empty")
  get empty() {
    return this.listArrow === "empty";
  }
  constructor() {}
}
