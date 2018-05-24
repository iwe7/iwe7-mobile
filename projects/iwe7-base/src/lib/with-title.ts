import { Injector } from "@angular/core";
import { BaseWithClass } from "./with-class";
import { Iwe7TitleService } from "./iwe7-title.service";
import { takeUntil } from "rxjs/operators";
export class BaseWithTitle extends BaseWithClass {
  public title: Iwe7TitleService;
  constructor(injector: Injector, prefixCls: string) {
    super(injector, prefixCls);
    this.title = this.injector.get(Iwe7TitleService);

    this.title
      .listener()
      .pipe(takeUntil(this.destroyed$))
      .subscribe();
  }
}
