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
    [`[class.am-button-primary]`]: "isPrimary",
    [`[class.am-button-warning]`]: "isWarning",
    [`[class.am-button-ghost]`]: "isGhost",
    [`[class.am-button-small]`]: "isSmall",
    [`[class.am-button-large]`]: "isLarge",
    [`[class.am-button-disabled]`]: "disabled",
    [`[class.am-button-loading]`]: "loading",
    [`[class.am-button-inline]`]: "inline",
    [`[class.am-button-block]`]: "!inline",
    [`[class.am-button-icon]`]: "buttonIcon",
    ["(click)"]: "handleClick($event)"
  },
  template: `<svg class="am-button-icon" amIcon="loading" *ngIf="loading"></svg><svg class="am-button-icon" [amIcon]="icon" *ngIf="!loading && icon"></svg><ng-content></ng-content>`
})
export class AmButtonComponent extends AmButtonRef
  implements OnInit, AmButtonInputsInterface {
  get isPrimary() {
    return this.type === "primary";
  }
  get isWarning() {
    return this.type === "warning";
  }
  get isGhost() {
    return this.type === "ghost";
  }
  get isSmall(): boolean {
    return this.size === "small";
  }
  get isLarge(): boolean {
    return this.size === "large";
  }
  get buttonIcon() {
    return this.loading ? "loading" : this.icon;
  }
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
