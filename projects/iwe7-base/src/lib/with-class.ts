import { BaseWithTheme } from "./with-theme";
import { Injector, OnChanges, SimpleChanges, Input } from "@angular/core";
import * as _ from "lodash";
export class BaseWithClass extends BaseWithTheme implements OnChanges {
  // class样式
  private _classObj: { [key: string]: boolean } = {};
  @Input()
  get classObj(): { [key: string]: boolean } {
    return this._classObj;
  }
  set classObj(val: { [key: string]: boolean }) {
    this._classObj = _.defaultsDeep(val, this._classObj);
  }

  constructor(injector: Injector, prefix: string) {
    super(injector, prefix);
  }

  ngOnChanges(changes: SimpleChanges) {
    if ("classObj" in changes) {
      this._setClass();
    }
    super.ngOnChanges(changes);
  }

  // 设置class样式
  private _setClass() {
    _.forEach(this.classObj, (value, key) => {
      if (value) {
        this.render.addClass(
          this.ele.nativeElement,
          `${this.prefixCls}-${key}`
        );
      } else {
        this.render.removeClass(
          this.ele.nativeElement,
          `${this.prefixCls}-${key}`
        );
      }
    });
  }

  classnames(classObj: any): string {
    let classnames = "";
    _.forEach(classObj, (value, key) => {
      if (value) {
        classnames += `${this.prefixCls}-${key}`;
      }
    });
    return classnames;
  }
}
