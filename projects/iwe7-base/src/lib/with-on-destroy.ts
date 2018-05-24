import { OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
export abstract class BaseWithOnDestroy implements OnDestroy {
  destroyed$: Subject<boolean> = new Subject();
  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
