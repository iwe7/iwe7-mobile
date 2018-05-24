import { BaseWithOnDestroy } from "./with-on-destroy";
import { Injector } from "@angular/core";
import { Location } from "@angular/common";
import { Subject, Observable } from "rxjs";
import { takeUntil } from "rxjs/operators";
export abstract class BaseWithLocation extends BaseWithOnDestroy {
  public location: Location;
  private _location$: Subject<any> = new Subject();
  get locationChange(): Observable<any> {
    return this._location$.pipe(takeUntil(this.destroyed$));
  }
  constructor(public injector: Injector) {
    super();
    this.location = this.injector.get(Location);
    this.location.subscribe(res => {
      this._location$.next(res);
    });
  }

  back() {
    this.location.back();
  }
}
