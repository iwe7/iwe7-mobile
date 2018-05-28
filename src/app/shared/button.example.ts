import {
  Injectable,
  EventEmitter,
  Component,
  HostListener,
  Input,
  Optional,
  Output,
  OnInit,
  ElementRef,
  OnDestroy,
  SkipSelf,
  Self
} from "@angular/core";
import { fromEvent, Subject } from "rxjs";
import { takeUntil, tap } from "rxjs/operators";

// 定义@Input()属性
export interface ButtonInputsInterface {
  title: string;
}
// 定义@Outputs()属性
export interface ButtonOutputsInterface {
  clickStream: EventEmitter<MouseEvent>;
}

// 默认值 可以通过angular的provide替换，可用于多模板等场景
@Injectable({
  providedIn: "root"
})
export class ButtonDefaultProps implements ButtonInputsInterface {
  title = "点我啊";
}

// 组件接口 不实现任何逻辑
export abstract class ButtonAbstract {
  abstract onClick(e: MouseEvent): void;
  abstract bindEvent(e: string): void;
  abstract destroy(): void;
}

// 没有template 类抽离 只包含业务逻辑实现
export class ButtonRef extends ButtonAbstract
  implements ButtonInputsInterface, ButtonOutputsInterface {
  title: string;
  // outputs
  clickStream: EventEmitter<MouseEvent>;
  private destroyed: Subject<any> = new Subject();

  constructor(
    public _default: ButtonDefaultProps,
    public ele: ElementRef,
    public parent: ButtonRef
  ) {
    super();
    // 默认值赋值
    Object.assign(this, this._default);
    console.log(this.parent);
  }

  onClick(e: MouseEvent) {
    this.clickStream.emit(e);
  }
  bindEvent(event: string) {
    return fromEvent(this.ele.nativeElement, event).pipe(
      tap((evt: MouseEvent) => {
        // 如果btn在一个btn里面，那么阻止事件上传
        if (this.hasParent()) {
          evt.stopPropagation();
        }
      }),
      takeUntil(this.destroyed)
    );
  }
  destroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
  hasParent() {
    return this.parent instanceof ButtonAbstract;
  }
}
// angular组件，只包含组件生命周期及属性装饰，也就是只有angular特性相关内容
@Component({
  selector: "iwe7-button",
  template: `{{title}}<ng-content></ng-content>`
})
export class Iwe7ButtonComponent extends ButtonRef
  implements OnInit, OnDestroy {
  @Input() title: string;
  @Output() clickStream: EventEmitter<MouseEvent> = new EventEmitter();
  constructor(
    @Optional() _default: ButtonDefaultProps,
    ele: ElementRef,
    // 是否是btn下包含btn
    @Optional()
    @SkipSelf()
    parentBtn: Iwe7ButtonComponent
  ) {
    super(_default, ele, parentBtn);
  }

  ngOnInit() {
    this.bindEvent("click").subscribe((res: MouseEvent) => {
      this.onClick(res);
    });
  }

  ngOnDestroy() {
    this.destroy();
  }
}
