import { Injectable } from "@angular/core";
import {
  Dialog,
  DialogRef,
  DialogPosition
} from "../../../../iwe7-dialog/src/public_api";
import { AmModalComponent } from "./am-modal.component";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AmModalService {
  constructor(public _dialog: Dialog) {}

  open(cfg?: any): Observable<DialogRef<any>> {
    // cfg.panelClass = 'am-modal-wrap';
    return this._dialog.openFromComponent(AmModalComponent, cfg).pipe(
      map(dialogRef => {
        dialogRef.afterOpen().subscribe(res => {
          const instance = dialogRef.componentInstance;
          for (const key in cfg) {
            instance[key] = cfg[key];
          }
        });
        dialogRef.updatePosition();
        return dialogRef;
      })
    );
  }

  popupUp(cfg: any) {
    cfg.popup = true;
    cfg.transparent = !cfg.popup;
    cfg.animationType = "slide-up";
    this.open(cfg);
  }

  popupDown(cfg: any) {
    cfg.popup = true;
    cfg.transparent = !cfg.popup;
    cfg.animationType = "slide-down";
    this.open(cfg);
  }

  dialog(cfg: any = {}) {
    cfg.popup = false;
    cfg.transparent = !cfg.popup;
    this.open(cfg);
  }

  getConfig(options: any) {
    return options;
  }
}
