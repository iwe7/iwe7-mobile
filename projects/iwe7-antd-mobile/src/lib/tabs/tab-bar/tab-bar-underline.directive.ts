import {
  Directive,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
  Renderer2,
  ElementRef
} from "@angular/core";

@Directive({
  selector: "[tabBarUnderline]"
})
export class TabBarUnderlineDirective implements OnChanges {
  @HostBinding("class.am-tabs-default-bar-underline")
  _underline: boolean = true;

  @Input() size: number = 0;
  @Input() isTabBarVertical: boolean = false;
  @Input() activeTab: number = 0;
  @Input() tabBarUnderlineStyle: any = {};
  get style() {
    const { isTabBarVertical, size, activeTab, tabBarUnderlineStyle } = this;
    const style = {
      ...(isTabBarVertical ? { height: `${size}%` } : { width: `${size}%` }),
      ...(isTabBarVertical
        ? { top: `${size * activeTab}%` }
        : { left: `${size * activeTab}%` }),
      ...tabBarUnderlineStyle
    };
    return style;
  }
  constructor(public render: Renderer2, public ele: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    this.setStyle();
  }

  setStyle() {
    for (const key in this.style) {
      this.render.setStyle(this.ele.nativeElement, key, this.style[key]);
    }
  }
}
