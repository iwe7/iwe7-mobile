import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class Iwe7ReflectService {
  constructor() {}
}
import { makePropDecorator } from "iwe7-util";
export interface HostBinding {
  hostPropertyName?: string;
}
export interface HostBindingDecorator {
  (hostPropertyName?: string): any;
  new (hostPropertyName?: string): any;
}
export const HostBinding: HostBindingDecorator = makePropDecorator(
  "HostBinding",
  (hostPropertyName?: string) => ({ hostPropertyName })
);
