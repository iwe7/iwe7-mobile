import { ComponentRef, Type } from "@angular/core";
import { Observable } from "rxjs";
export abstract class AmModalRef<T = any, R = any> {
  abstract afterOpen: Observable<void>;
  abstract afterClose: Observable<R>;
  abstract open(): void;
  abstract close(result?: R): void;
  abstract destroy(result?: R): void;
  abstract triggerOk(): void;
  abstract triggerCancel(): void;
  abstract getContentComponent(): T;
  abstract getElement(): HTMLElement;
  abstract getInstance(): any;
}
