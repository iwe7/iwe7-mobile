import { Injectable, Optional, SkipSelf } from "@angular/core";
import { AmModalRef } from "./model/am-modal-ref";
import { Subject, Subscription } from "rxjs";

interface RegisteredMeta {
  modalRef: AmModalRef;
  afterOpenSubscription: Subscription;
  afterCloseSubscription: Subscription;
}

@Injectable({
  providedIn: 'root'
})
export class AmModalControlService {
  parentService: AmModalControlService;
  // after all close
  get afterAllClose(): Subject<void> {
    return this.parentService
      ? this.parentService.afterAllClose
      : this.rootAfterAllClose;
  }
  rootAfterAllClose: Subject<void> = this.parentService
    ? null
    : new Subject<void>();
  // open modals
  get openModals(): AmModalRef[] {
    return this.parentService
      ? this.parentService.openModals
      : this.rootOpenModals;
  }
  rootOpenModals: AmModalRef[] = this.parentService ? null : [];
  // registered meta map
  get registeredMetaMap(): Map<AmModalRef, RegisteredMeta> {
    return this.parentService
      ? this.parentService.registeredMetaMap
      : this.rootRegisteredMetaMap;
  }
  rootRegisteredMetaMap: Map<AmModalRef, RegisteredMeta> = this.parentService
    ? null
    : new Map();

  registerModal(modalRef: AmModalRef): void {
    if (!this.hasRegistered(modalRef)) {
      const afterOpenSubscription = modalRef.afterOpen.subscribe(() =>
        this.openModals.push(modalRef)
      );
      const afterCloseSubscription = modalRef.afterClose.subscribe(() =>
        this.removeOpenModal(modalRef)
      );
      this.registeredMetaMap.set(modalRef, {
        modalRef,
        afterOpenSubscription,
        afterCloseSubscription
      });
    }
  }
  hasRegistered(modalRef: AmModalRef): boolean {
    return this.registeredMetaMap.has(modalRef);
  }
  closeAll(): void {
    let i = this.openModals.length;
    while (i--) {
      this.openModals[i].close();
    }
  }
  removeOpenModal(modalRef: AmModalRef): void {
    const index = this.openModals.indexOf(modalRef);
    if (index > -1) {
      this.openModals.splice(index, 1);
      if (!this.openModals.length) {
        this.afterAllClose.next();
      }
    }
  }
}
