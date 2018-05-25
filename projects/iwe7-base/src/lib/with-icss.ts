import { BaseWithLocation } from "./with-location";
import { Iwe7IcssService } from "iwe7-icss";
import { Injector, Input, ElementRef } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import * as _ from "lodash";

export abstract class BaseWithIcss extends BaseWithLocation {
  public ele: ElementRef;
  public icss: Iwe7IcssService;
  // style样式
  private _styleObj: { [key: string]: any };
  public style$: BehaviorSubject<{ [key: string]: any }> = new BehaviorSubject(
    this._styleObj
  );

  @Input()
  set styleObj(val: { [key: string]: any }) {
    this._styleObj = _.defaultsDeep(val, this._styleObj);
    this.style$.next(this._styleObj);
  }
  get styleObj(): { [key: string]: any } {
    return this._styleObj;
  }

  constructor(injector: Injector) {
    super(injector);
    this._styleObj = {};
    this.ele = this.injector.get(ElementRef);
    this.icss = this.injector.get(Iwe7IcssService);
    this.icss
      .init(this.style$.pipe(takeUntil(this.destroyed$)), this.ele)
      .subscribe(res => {});
  }
}
