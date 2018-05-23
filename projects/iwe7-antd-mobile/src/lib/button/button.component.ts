import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  ViewEncapsulation,
  Directive,
  ElementRef
} from "@angular/core";
export const prefixCls: string = "am-button";
import classnames from "classnames";
import { fromEvent } from "rxjs";
@Directive({
  selector: "[am-button]"
})
export class ButtonComponent implements OnInit {
  @Input() type: "primary" | "warning" | "ghost";
  @Input() size: "large" | "small" = "large";
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() inline: boolean = false;
  @Input() style: any;
  @Input() activeStyle: any = {};
  @Input() activeClassName: string = "am-button";
  @Input() icon: string;
  @Input() role: string;
  @Input() className: string;
  @Input() prefixCls: string = "am-button";

  @HostBinding("class.am-button-active")
  @Input()
  active: boolean = false;

  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @HostBinding("style.width.%") width: number = 100;
  @HostBinding("class") wrapCls: any;
  iconCls: any;

  get _activeClassName() {
    return (
      this.activeClassName ||
      (this.activeStyle ? `${prefixCls}-active` : undefined)
    );
  }

  constructor(public ele: ElementRef) {}

  ngOnInit() {
    const ele = this.ele.nativeElement;
    fromEvent(ele, "touchstart").subscribe(res => {
      this.active = true;
    });
    fromEvent(document, "touchcancel").subscribe(res => {
      this.active = false;
    });
    fromEvent(document, "touchend").subscribe(res => {
      this.active = false;
    });
    this.render();
  }

  render() {
    const {
      className,
      prefixCls,
      type,
      size,
      inline,
      disabled,
      icon,
      loading,
      activeStyle,
      activeClassName,
      active
    } = this;

    const iconType: any = loading ? "loading" : icon;
    this.wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-primary`]: type === "primary",
      [`${prefixCls}-ghost`]: type === "ghost",
      [`${prefixCls}-warning`]: type === "warning",
      [`${prefixCls}-small`]: size === "small",
      [`${prefixCls}-inline`]: inline,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-icon`]: !!iconType
    });
  }

  doClick(e: any) {
    this.onClick.emit(e);
    this.active = true;
    this.render();
    setTimeout(() => {
      this.active = false;
      this.render();
    }, 300);
  }
}
