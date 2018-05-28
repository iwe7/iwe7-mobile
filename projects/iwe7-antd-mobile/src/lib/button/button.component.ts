import {
  Component,
  OnInit,
  Directive,
  Injector,
  Optional,
  SkipSelf
} from "@angular/core";

import {
  AmButtonInputsInterface,
  AmButtonType,
  AmButtonSize,
  AmButtonInputsDefault,
  AmButtonAbstrace,
  AmButtonRef
} from "./button.interface";

@Component({
  selector: "a[am-button],button[am-button],[am-button]",
  host: {
    [`[class.am-button]`]: "'true'",
    [`[class.am-button-primary]`]: 'type === "primary"',
    [`[class.am-button-warning]`]: 'type === "warning"',
    [`[class.am-button-ghost]`]: 'type === "ghost"',
    [`[class.am-button-small]`]: 'size === "small"',
    [`[class.am-button-large]`]: 'size === "large"',
    [`[class.am-button-disabled]`]: "disabled",
    [`[class.am-button-loading]`]: "loading",
    [`[class.am-button-inline]`]: "inline",
    [`[class.am-button-block]`]: "!inline",
    [`[class.am-button-icon]`]: 'loading ? "loading" : this.icon',
    ["(click)"]: "handleClick($event)"
  },
  template: `<svg class="am-button-icon" amIcon="loading" *ngIf="loading"></svg><svg class="am-button-icon" [amIcon]="icon" *ngIf="!loading && icon"></svg><ng-content></ng-content>`
})
export class AmButtonComponent extends AmButtonRef
  implements OnInit, AmButtonInputsInterface {
  constructor(
    injector: Injector,
    @Optional()
    @SkipSelf()
    parent: AmButtonComponent
  ) {
    super(injector, parent);
  }
  ngOnInit() {
    this.bindingEvent();
  }
}
