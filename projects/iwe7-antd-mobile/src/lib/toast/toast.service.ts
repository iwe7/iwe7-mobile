import {
  Injectable,
  TemplateRef,
  Type,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  ComponentRef,
  ViewContainerRef
} from "@angular/core";
import { AmToastComponent } from "./toast";
import { Observable, fromEvent, of } from "rxjs";
import { switchMap, tap } from "rxjs/operators";

import { Iwe7Types } from "iwe7-base";

import { Dialog } from 'iwe7-dialog';
export interface AmToastInterface {
  content?: Iwe7Types;
  duration?: number;
  onClose?: Function;
  mask?: boolean;
  icon?: Iwe7Types;
}
@Injectable({
  providedIn: "root"
})
export class AmToastService {
  constructor(public dialog: Dialog) { }
  success(cfg: AmToastInterface): Observable<AmToastService> {
    cfg["icon"] = {
      type: "icon",
      data: "success"
    };
    return this.createToast(cfg);
  }
  fail(cfg: AmToastInterface): Observable<AmToastService> {
    cfg["icon"] = {
      type: "icon",
      data: "fail"
    };
    return this.createToast(cfg);
  }
  info(cfg: AmToastInterface): Observable<AmToastService> {
    return this.createToast(cfg);
  }
  loading(cfg: AmToastInterface): Observable<AmToastService> {
    cfg["icon"] = {
      type: "icon",
      data: "loading"
    };
    return this.createToast(cfg);
  }
  offline(cfg: AmToastInterface): Observable<AmToastService> {
    cfg["icon"] = {
      type: "icon",
      data: "dislike"
    };
    return this.createToast(cfg);
  }
  hide(toast: HTMLElement): void {
    document.body.removeChild(toast);
  }
  createToast(cfg: AmToastInterface): Observable<AmToastService> {
    const toast = document.createElement("am-toast");
    for (const key in cfg) {
      toast[key] = cfg[key];
    }
    document.body.appendChild(toast);
    return fromEvent(toast, "hide").pipe(
      switchMap((res: any) => {
        return of(this).pipe(
          tap(res => {
            document.body.removeChild(toast);
          })
        );
      })
    );
  }
}
