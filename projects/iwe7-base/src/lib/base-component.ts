import { Injector } from "@angular/core";
import { BaseWithClass } from "./with-class";
export abstract class Iwe7BaseComponent extends BaseWithClass {
  constructor(injector: Injector, prefixCls: string) {
    super(injector, prefixCls);
  }
}
