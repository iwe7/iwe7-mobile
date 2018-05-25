import { Directive, Injector, OnInit } from "@angular/core";
import { Iwe7BaseComponent } from "iwe7-base";
@Directive({ selector: "[am-picker-col-mask]" })
export class AmPickerColMaskDirective extends Iwe7BaseComponent
  implements OnInit {
  constructor(injector: Injector) {
    super(injector, "am-picker-col-mask");
  }
  ngOnInit() {}
}
