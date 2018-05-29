import {
  Directive,
  HostBinding,
  Input,
  Renderer2,
  ElementRef,
  OnInit
} from "@angular/core";

@Directive({
  selector: "[gridText]",
  host: {
    [`class.am-grid-text`]: "true"
  }
})
export class AmGridTextDirective {
  constructor() {}
}
