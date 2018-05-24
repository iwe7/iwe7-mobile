import { Injectable, ReflectiveInjector } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TestService {
  constructor() {}
}

const injector = ReflectiveInjector.resolveAndCreate([TestService]);

console.log(injector);
