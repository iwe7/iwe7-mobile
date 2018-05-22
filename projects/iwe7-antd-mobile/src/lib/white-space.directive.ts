import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[whiteSpace],white-space"
})
export class WhiteSpaceDirective {
  @Input() whiteSpace: string;
  @HostBinding("class.am-whitespace") _whitespace: boolean = true;

  @HostBinding("class.am-whitespace-xs")
  get isXs() {
    return this.whiteSpace === "xs";
  }

  @HostBinding("class.am-whitespace-sm")
  get sm() {
    return this.whiteSpace === "sm";
  }

  @HostBinding("class.am-whitespace-md")
  get md() {
    return this.whiteSpace === "md";
  }

  @HostBinding("class.am-whitespace-lg")
  get lg() {
    return this.whiteSpace === "lg";
  }

  @HostBinding("class.am-whitespace-xl")
  get xl() {
    return this.whiteSpace === "xl";
  }
  constructor() {}
}
