import { Subject, Observable } from "rxjs";
import { takeUntil } from "rxjs/operators";
function isFunction(value) {
  return typeof value === "function";
}
export function TakeUntilDestroy(destroyMethodName = "ngOnDestroy") {
  return function<T extends { new (...args: any[]): {} }>(constructor: T) {
    const originalDestroy = constructor.prototype[destroyMethodName];
    return class extends constructor {
      _takeUntilDestroy$: Subject<boolean> = new Subject();
      get destroyed$() {
        this._takeUntilDestroy$ = this._takeUntilDestroy$ || new Subject();
        return this._takeUntilDestroy$;
      }
      [destroyMethodName]() {
        isFunction(originalDestroy) && originalDestroy.apply(this, arguments);
        this.destroyed$.next(true);
        this.destroyed$.complete();
      }
    };
  };
}

export const untilDestroyed = that => <T>(source: Observable<T>) => {
  return source.pipe(takeUntil<T>(that.destroyed$));
};
