import {
  Injectable,
  Output,
  EventEmitter,
  Input,
  Injector,
  ElementRef,
  TemplateRef,
  ɵComponentType as ComponentType,
  Renderer2
} from "@angular/core";
import { coerceBooleanProperty } from "@angular/cdk/coercion";
import { onTouchStart, onTouchCancel, onTouchEnd } from "iwe7-util";

import { fromEvent, merge, of } from "rxjs";
import { switchMap, takeUntil, tap, takeWhile } from "rxjs/operators";

export type AmButtonType = "primary" | "warning" | "ghost" | undefined;
export type AmButtonSize = "large" | "small";
export type AmButtonIcon = string | TemplateRef<any> | ComponentType<any>;

import { KeyValueInterface } from "iwe7-base";
import { Iwe7CoreComponent } from 'iwe7-core';
export interface AmButtonInputsInterface {
  // 按钮类型，可选值为primary/ghost/warning或者不设
  type?: AmButtonType;
  // 按钮大小，可选值为large、small
  size?: AmButtonSize;
  // 点击反馈的自定义样式 (设为 false 时表示禁止点击反馈)
  activeStyle?: KeyValueInterface | false;
  // 点击反馈的自定义类名
  activeClassName?: string;
  // 设置禁用
  disabled?: boolean;
  // 自定义样式
  style?: KeyValueInterface;
  // 是否设置为行内按钮
  inline?: boolean;
  // 设置按钮载入状态
  loading?: boolean;
  // 可以是 Icon 组件里内置的某个 icon 的 type 值，也可以是任意合法的 AngularElement (注意: loading设置后此项设置失效)
  icon?: AmButtonIcon;
  // class前缀
  prefixCls?: string;
  // 样式类名
  className?: string;
  // 点击按钮的点击回调函数
  onClick?: EventEmitter<any>;
  // TouchableHighlight onPressIn
  onPressIn?: EventEmitter<any>;
  // TouchableHighlight onPressOut
  onPressOut?: EventEmitter<any>;
  // TouchableHighlight onShowUnderlay
  onShowUnderlay?: EventEmitter<any>;
  // TouchableHighlight onHideUnderlay
  onHideUnderlay?: EventEmitter<any>;
}

@Injectable({
  providedIn: "root"
})
export class AmButtonInputsDefault implements AmButtonInputsInterface {
  size?: AmButtonSize = "large";
  prefixCls?: string = "am-button";
  disabled?: boolean = false;
  inline?: boolean = false;
  loading?: boolean = false;
  activeClassName?: string = "am-button-active";
}

export abstract class AmButtonAbstrace {
  abstract bindingEvent(): void;
  abstract handleClick(e: Event): void;
}

export abstract class AmButtonRef extends Iwe7CoreComponent
  implements AmButtonAbstrace {
  // 按钮类型，可选值为primary/ghost/warning或者不设
  @Input() type?: AmButtonType;
  // 按钮大小，可选值为large、small
  @Input() size?: AmButtonSize;
  // 点击反馈的自定义样式 (设为 false 时表示禁止点击反馈)
  @Input() activeStyle?: KeyValueInterface | false;
  // 点击反馈的自定义类名
  @Input() activeClassName?: string;
  // 设置禁用
  private _disabled?: boolean;
  @Input()
  set disabled(val: any) {
    this._disabled = coerceBooleanProperty(val);
  }
  get disabled() {
    return this._disabled;
  }
  // 自定义样式
  @Input() style?: KeyValueInterface;
  // 是否设置为行内按钮
  private _inline?: boolean;
  @Input()
  set inline(val: any) {
    this._inline = coerceBooleanProperty(val);
  }
  get inline() {
    return this._inline;
  }
  // 设置按钮载入状态
  private _loading: boolean = false;
  @Input()
  set loading(val: any) {
    this._loading = coerceBooleanProperty(val);
  }
  get loading() {
    return this._loading;
  }
  // 可以是 Icon 组件里内置的某个 icon 的 type 值，也可以是任意合法的 AngularElement (注意: loading设置后此项设置失效)
  @Input() icon?: AmButtonIcon;
  // class前缀
  @Input() prefixCls?: string;
  // 样式类名
  @Input() className?: string;

  // 点击按钮的点击回调函数
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  // TouchableHighlight onPressIn
  @Output() onPressIn: EventEmitter<any> = new EventEmitter();
  // TouchableHighlight onPressOut
  @Output() onPressOut: EventEmitter<any> = new EventEmitter();
  // TouchableHighlight onShowUnderlay
  @Output() onShowUnderlay: EventEmitter<any> = new EventEmitter();
  // TouchableHighlight onHideUnderlay
  @Output() onHideUnderlay: EventEmitter<any> = new EventEmitter();

  public ele: ElementRef;
  private _default: AmButtonInputsDefault;
  public active: boolean;
  render: Renderer2;
  constructor(public injector: Injector, private parent: any) {
    super(injector);
    this.render = this.injector.get(Renderer2);
    this._default = this.injector.get(AmButtonInputsDefault);
    this.ele = this.injector.get(ElementRef);
    Object.assign(this, this._default);
  }

  bindingEvent() {
    const ele = this.ele.nativeElement;
    this.bindPressIn(ele).subscribe();
    this.bindPressOut(ele).subscribe();
    this.bindClick(ele).subscribe();
  }

  handleClick(res: Event): void {
    if (!this.disabled) {
      this.onClick.emit(res);
    }
  }

  private getActiveClassName() {
    return this.activeStyle ? undefined : this.activeClassName;
  }

  private bindPressIn(ele: any) {
    return onTouchStart(ele).pipe(
      tap((res: Event) => {
        if (this.parent) {
          res.preventDefault();
          res.stopPropagation();
        }
      }),
      takeWhile(res => !this.disabled),
      takeUntil(this.getCyc('ngOnDestroy', true)),
      tap(res => {
        this.onPressIn.emit(res);
      }),
      takeWhile(res => this.activeStyle !== false),
      tap(res => {
        this.setActive(ele);
      })
    );
  }

  private bindPressOut(ele: any) {
    return merge(onTouchEnd(ele), onTouchCancel(ele)).pipe(
      tap((res: Event) => {
        if (this.parent) {
          res.preventDefault();
          res.stopPropagation();
        }
      }),
      takeWhile(res => !this.disabled),
      takeUntil(this.getCyc('ngOnDestroy', true)),
      tap(res => {
        this.onPressOut.emit(res);
      }),
      takeWhile(res => this.activeStyle !== false),
      tap(res => {
        this.setUnActive(ele);
      })
    );
  }

  private bindClick(ele: any) {
    return onTouchStart(ele).pipe(
      tap((res: Event) => {
        if (this.parent) {
          res.preventDefault();
          res.stopPropagation();
        }
      }),
      takeWhile(res => !this.disabled),
      switchMap(res =>
        of(res).pipe(takeUntil(merge(onTouchEnd(ele), onTouchCancel(ele))))
      ),
      tap(res => {
        this.onClick.emit(res);
      })
    );
  }

  private setActive(ele: any) {
    this.active = true;
    this.render.addClass(ele, this.getActiveClassName());
  }

  private setUnActive(ele: any) {
    this.active = false;
    this.render.removeClass(ele, this.getActiveClassName());
  }
}
