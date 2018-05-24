import { Injectable, ElementRef } from "@angular/core";
const RouterMap: Map<string, any> = new Map();

@Injectable({
  providedIn: "root"
})
export class Iwe7ReflectService {
  constructor() {}
}

export function RouterDecorator(path: string) {
  return function(target: any) {
    RouterMap.set(path, target);
  };
}

export function getRoutes(): Map<string, any> {
  return RouterMap;
}
