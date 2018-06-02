import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({ selector: '[jdSearchTheme]' })
export class JdSearchThemeDirective {
  @Input()
  set jdSearchTheme(val: string) {
    this.render.addClass(this.ele.nativeElement, `theme-${val}`);
  }
  constructor(public ele: ElementRef, public render: Renderer2) { }
}
