import { Subject, Observable } from "rxjs";
import { takeUntil } from "rxjs/operators";
export interface OnDestroy {
  readonly destroyed$?: Observable<boolean>;
  ngOnDestroy(): void;
}
function isFunction(value) {
  return typeof value === "function";
}
export function TakeUntilDestroy(destroyMethodName = "ngOnDestroy") {
  return function<T extends { new (...args: any[]): {} }>(constructor: T) {
    const originalDestroy = constructor.prototype[destroyMethodName];
    if (!isFunction(originalDestroy)) {
      console.warn(
        `${constructor.name} should implements ${destroyMethodName}`
      );
    }
    return class extends constructor {
      _takeUntilDestroy$: Subject<boolean> = new Subject();
      get destroyed$() {
        this._takeUntilDestroy$ = this._takeUntilDestroy$ || new Subject();
        return this._takeUntilDestroy$.asObservable();
      }
      [destroyMethodName]() {
        isFunction(originalDestroy) && originalDestroy.apply(this, arguments);
        this._takeUntilDestroy$.next(true);
        this._takeUntilDestroy$.complete();
      }
    };
  };
}

export const untilDestroyed = that => <T>(source: Observable<T>) => {
  if (!("destroyed$" in that)) {
    console.warn(`'destroyed$' not exist`);
    return source;
  }
  return source.pipe(takeUntil<T>(that.destroyed$));
};
