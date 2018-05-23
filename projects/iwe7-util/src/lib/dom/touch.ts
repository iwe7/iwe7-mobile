import { fromEvent, Observable } from "rxjs";
import { DomElement } from "./interface";
export function onTouchStart(ele: DomElement): Observable<TouchEvent> {
  return fromEvent(ele, "touchstart") as Observable<TouchEvent>;
}
export function onTouchEnd(ele: DomElement): Observable<TouchEvent> {
  return fromEvent(ele, "touchend") as Observable<TouchEvent>;
}
export function onTouchCancel(ele: DomElement): Observable<TouchEvent> {
  return fromEvent(ele, "touchcancel") as Observable<TouchEvent>;
}
export function onTouchMove(ele: DomElement): Observable<TouchEvent> {
  return fromEvent(ele, "touchmove") as Observable<TouchEvent>;
}
