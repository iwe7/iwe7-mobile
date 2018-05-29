import { Directive, Injector, Input, HostBinding } from "@angular/core";
import { Iwe7BaseDirective } from "iwe7-base";

@Directive({ selector: "[am-search-cancel]" })
export class AmSearchCancelDirective extends Iwe7BaseDirective {
  @HostBinding("class.am-search-cancel-show")
  @Input("am-search-cancel")
  show: boolean = true;

  @HostBinding("style.margin-right")
  get marginRight() {
    return this.show ? "0px" : "-40px";
  }

  constructor(injector: Injector) {
    super(injector, "am-search-cancel");
  }
}
