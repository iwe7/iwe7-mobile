import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[wingBlank],wing-blank"
})
export class WingBlankDirective {
  @Input() wingBlank: string;
  @HostBinding("class.am-wingblank") _blank: boolean = true;
  @HostBinding("class.am-wingblank-lg")
  get isLg() {
    return this.wingBlank === "lg";
  }
  @HostBinding("class.am-wingblank-md")
  get isMd() {
    return this.wingBlank === "md";
  }
  @HostBinding("class.am-wingblank-sm")
  get isSm() {
    return this.wingBlank === "sm";
  }
  constructor() {}
}
