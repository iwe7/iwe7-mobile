import { Directive, Injector, Input, HostBinding } from "@angular/core";
import { Iwe7BaseDirective } from "iwe7-base";

@Directive({ selector: "[am-search-clear]" })
export class AmSearchClearDirective extends Iwe7BaseDirective {
  @HostBinding("class.am-search-clear-show")
  @Input("am-search-clear")
  show: boolean = true;

  constructor(injector: Injector) {
    super(injector, "am-search-clear");
  }
}
