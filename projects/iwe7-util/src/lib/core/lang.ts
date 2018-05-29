import { Observable } from "rxjs";
export function isPromise(obj: any): obj is Promise<any> {
  return !!obj && typeof obj.then === "function";
}
export function isObservable(
  obj: any | Observable<any>
): obj is Observable<any> {
  return !!obj && typeof obj.subscribe === "function";
}
