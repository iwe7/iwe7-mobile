import { Directive, HostBinding, Input } from "@angular/core";

@Directive({ selector: "[amToastNotice]" })
export class AmToastNoticeDirective {
  @HostBinding("class.am-toast-notice") _notice: boolean = true;
  @HostBinding("class.am-toast-notice-closable")
  @Input()
  closable: boolean = false;
  constructor() {}
}
