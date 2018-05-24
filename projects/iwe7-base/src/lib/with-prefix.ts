import { BaseWithIcss } from "./with-icss";
import { Injector, Renderer2, Input } from "@angular/core";
export class BaseWithPrefix extends BaseWithIcss {
  prefixCls: string = "";
  public render: Renderer2;
  constructor(injector: Injector, prefix: string = "") {
    super(injector);
    this.render = this.injector.get(Renderer2);
    this.prefixCls = prefix;
    if (this.prefixCls !== "") {
      this.render.addClass(this.ele.nativeElement, this.prefixCls);
    }
  }
}
