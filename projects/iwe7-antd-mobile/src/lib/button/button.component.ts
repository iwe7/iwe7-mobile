import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  ViewEncapsulation,
  Directive,
  ElementRef,
  OnChanges
} from "@angular/core";
export const prefixCls: string = "am-button";
import classnames from "classnames";
import { fromEvent, merge, of } from "rxjs";
import { switchMap, takeUntil, tap } from "rxjs/operators";
import { onTouchStart, onTouchCancel, onTouchEnd } from "iwe7-util";
@Directive({
  selector: "[am-button]"
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() type: "primary" | "warning" | "ghost" = "primary";

  @HostBinding("class.am-button")
  get amButton() {
    return true;
  }

  @HostBinding("class.am-button-primary")
  get buttonPrimary() {
    return this.type === "primary";
  }

  @HostBinding("class.am-button-warning")
  get buttonWarning() {
    return this.type === "warning";
  }

  @HostBinding("class.am-button-ghost")
  get buttonGhost() {
    return this.type === "ghost";
  }

  @Input() size: "large" | "small" = "large";

  @HostBinding("class.am-button-small")
  get buttonSmall() {
    return this.size === "small";
  }

  @HostBinding("class.am-button-large")
  get buttonLarge() {
    return this.size === "large";
  }

  @HostBinding("class.am-button-disabled")
  get buttonDisabled() {
    return !!this.disabled;
  }
  @Input() disabled: boolean = false;

  @HostBinding("class.am-button-loading")
  @Input()
  loading: boolean = false;

  @HostBinding("class.am-button-inline")
  @Input()
  inline: boolean = false;

  @Input() icon: string;
  @HostBinding("class.am-button-icon")
  get buttonIcon() {
    return this.loading ? "loading" : this.icon;
  }

  @Input() activeStyle: any = {};
  @Input() activeClassName: string = "am-button";

  @HostBinding("class.am-button-active")
  @Input()
  active: boolean = false;

  @Output() clickStream: EventEmitter<any> = new EventEmitter();
  @HostBinding("style.width.%") width: number = 100;

  get _activeClassName() {
    return (
      this.activeClassName ||
      (this.activeStyle ? `${prefixCls}-active` : undefined)
    );
  }

  constructor(public ele: ElementRef) {}

  ngOnChanges() {}

  ngOnInit() {
    const ele = this.ele.nativeElement;
    onTouchStart(ele)
      .pipe(
        tap((res: any) => {
          res.stopPropagation();
          res.preventDefault();
          this.active = true;
        }),
        switchMap(res =>
          of(res).pipe(takeUntil(merge(onTouchEnd(ele), onTouchCancel(ele))))
        )
      )
      .subscribe(res => {
        this.doClick(res);
      });
  }

  doClick(e: any) {
    if (!this.disabled) {
      this.clickStream.emit(e);
      setTimeout(() => {
        this.active = false;
      }, 300);
    }
  }
}
