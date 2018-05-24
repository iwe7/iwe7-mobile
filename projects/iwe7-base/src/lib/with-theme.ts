import { BaseWithPrefix } from "./with-prefix";
import {
  Injector,
  SimpleChange,
  Renderer2,
  SimpleChanges,
  OnChanges,
  Input
} from "@angular/core";
export abstract class BaseWithTheme extends BaseWithPrefix implements OnChanges {
  @Input() theme: string = "default";
  constructor(injector: Injector, prefix: string = "") {
    super(injector, prefix);
  }

  ngOnChanges(changes: SimpleChanges) {
    if ("theme" in changes) {
      this.setTheme(changes.theme);
    }
  }

  // 设置主题
  setTheme(change: SimpleChange) {
    // 移除老主题
    if (change.previousValue) {
      this.render.removeClass(
        this.ele.nativeElement,
        `${this.prefixCls}-${change.previousValue}`
      );
    }
    // 添加新主题
    if (change.currentValue) {
      this.render.addClass(
        this.ele.nativeElement,
        `${this.prefixCls}-${change.previousValue}`
      );
    }
  }
}
