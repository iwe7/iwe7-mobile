import { Injector, OnInit } from "@angular/core";
import { BaseWithClass } from "./with-class";
import { onTap, onTouchEnd } from "iwe7-util";
import { switchMap, takeUntil } from "rxjs/operators";
import { merge } from "rxjs";

export abstract class Iwe7BaseDirective extends BaseWithClass
  implements OnInit {
  constructor(injector: Injector, prefixCls: string) {
    super(injector, prefixCls);
    const ele = this.ele.nativeElement;
    onTap(ele)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(res => {});
    onTouchEnd(ele)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(res => {});
  }

  ngOnInit() {}
}
