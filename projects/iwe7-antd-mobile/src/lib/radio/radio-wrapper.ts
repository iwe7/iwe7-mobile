import {
  Component,
  OnInit,
  Injector,
  HostBinding,
  ViewEncapsulation,
  Input,
  Directive
} from "@angular/core";
import { Iwe7BaseComponent } from "iwe7-base";

@Directive({
  selector: "[am-radio-wrapper]"
})
export class AmRadioWrapperComponent extends Iwe7BaseComponent
  implements OnInit {
  constructor(injector: Injector) {
    super(injector, "am-radio-wrapper");
  }
  ngOnInit() {}
}
