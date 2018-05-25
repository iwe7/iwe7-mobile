import { Directive, Injector, OnInit, HostBinding } from "@angular/core";
@Directive({ selector: "[am-picker-col-mask]" })
export class AmPickerColMaskDirective implements OnInit {
  @HostBinding("class.am-picker-col-mask") _content: boolean = true;
  constructor(injector: Injector) {}
  ngOnInit() {}
}
