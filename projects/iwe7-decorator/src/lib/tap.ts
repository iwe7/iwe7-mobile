import {
  DomElement,
  onTouchCancel,
  onTouchEnd,
  onTouchMove,
  onTouchStart
} from "iwe7-util";
import { of, merge, interval } from "rxjs";
import {
  switchMap,
  takeUntil,
  delay,
  map,
  filter,
  takeWhile
} from "rxjs/operators";
import { getPlatform, Injector, ElementRef } from "@angular/core";

declare var Reflect: any;

export const OnTap = (ele: string) => (
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) => {
  console.log(Reflect);
};
