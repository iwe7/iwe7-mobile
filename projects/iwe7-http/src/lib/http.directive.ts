import { Directive, Input, OnInit, Injector } from "@angular/core";
import { HttpBaseDirective } from "./http-base";
@Directive({
  selector: "[http]"
})
export class HttpDirective extends HttpBaseDirective {
  constructor(injector: Injector) {
    super(injector);
  }
}

@Directive({
  selector: "[get]"
})
export class GetDirective extends HttpBaseDirective {
  constructor(injector: Injector) {
    super(injector);
    this.httpMethod = "get";
  }
}

@Directive({
  selector: "[post]"
})
export class PostDirective extends HttpBaseDirective {
  constructor(injector: Injector) {
    super(injector);
    this.httpMethod = "post";
  }
}

@Directive({
  selector: "[webGet]"
})
export class WebGetDirective extends HttpBaseDirective {
  constructor(injector: Injector) {
    super(injector);
    this.httpMethod = "get";
    this.httpIsApp = false;
  }
}

@Directive({
  selector: "[webPost]"
})
export class WebPostDirective extends HttpBaseDirective {
  constructor(injector: Injector) {
    super(injector);
    this.httpMethod = "post";
    this.httpIsApp = false;
  }
}

@Directive({
  selector: "[appGet]"
})
export class AppGetDirective extends HttpBaseDirective {
  constructor(injector: Injector) {
    super(injector);
    this.httpMethod = "get";
    this.httpIsApp = true;
  }
}

@Directive({
  selector: "[appPost]"
})
export class AppPostDirective extends HttpBaseDirective {
  constructor(injector: Injector) {
    super(injector);
    this.httpMethod = "post";
    this.httpIsApp = true;
  }
}

export const HTTPDIRECTIVES = [
  HttpDirective,
  GetDirective,
  PostDirective,
  AppGetDirective,
  AppPostDirective,
  WebPostDirective,
  WebGetDirective
];
