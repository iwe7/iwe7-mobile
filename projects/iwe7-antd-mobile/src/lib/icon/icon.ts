import {
  Component,
  OnInit,
  HostBinding,
  Input,
  Renderer2,
  ElementRef,
  Directive,
  ViewChild
} from "@angular/core";
import { DomSanitizer, SafeValue } from "@angular/platform-browser";
export class AmIconRef implements OnInit {
  _icon: string;
  @Input()
  set type(val: string) {
    this.amIcon = val;
  }
  @Input()
  set amIcon(val: string) {
    if (val) {
      this._icon = val;
      if (this._icon.indexOf(".svg") > -1) {
      } else {
        this.render.addClass(this.ele.nativeElement, `am-icon-${val}`);
      }
    }
  }
  get amIcon() {
    return this._icon;
  }

  @HostBinding("style.background")
  get background(): SafeValue {
    if (this._icon) {
      if (this._icon.indexOf(".svg") > -1) {
        return this.bg;
      }
    }
  }
  @Input() size: string = "md";
  @Input() color: string;
  tagName: string;
  constructor(
    public render: Renderer2,
    public ele: ElementRef,
    private dm: DomSanitizer,
    public ds: DomSanitizer
  ) {}

  ngOnInit() {
    this.tagName = this.ele.nativeElement.tagName;
    if (this.amIcon) {
      this.createSvg();
    }
  }

  createSvg() {
    if (this.amIcon) {
      if (this.tagName === "svg") {
        if (this.amIcon.indexOf(".svg") > -1) {
        } else {
          const html = `<use xlink:href="#${this.amIcon}"></use>`;
          this.ele.nativeElement.innerHTML = html;
        }
      } else {
        const html = `<svg><use xlink:href="#${this.amIcon}"></use></svg>`;
        this.ele.nativeElement.innerHTML = html;
      }
    }
  }

  get bg(): SafeValue {
    const bg = this.dm.bypassSecurityTrustStyle(
      `url(${this.amIcon || ""}) center center / 21px 21px no-repeat`
    );
    return bg;
  }
}
@Component({
  selector: "am-icon",
  template: ``,
  host: {
    [`[class.am-icon]`]: "true",
    [`[class.am-icon-md]`]: 'size === "md"',
    [`[class.am-icon-xxs]`]: 'size === "xxs"',
    [`[class.am-icon-xs]`]: 'size === "xs"',
    [`[class.am-icon-sm]`]: 'size === "sm"',
    [`[class.am-icon-lg]`]: 'size === "lg"'
  }
})
export class AmIconComponent extends AmIconRef {
  constructor(
    render: Renderer2,
    ele: ElementRef,
    dm: DomSanitizer,
    ds: DomSanitizer
  ) {
    super(render, ele, dm, ds);
  }
}
@Directive({
  selector: "[amIcon]",
  host: {
    [`[class.am-icon]`]: "true",
    [`[class.am-icon-md]`]: 'size === "md"',
    [`[class.am-icon-xxs]`]: 'size === "xxs"',
    [`[class.am-icon-xs]`]: 'size === "xs"',
    [`[class.am-icon-sm]`]: 'size === "sm"',
    [`[class.am-icon-lg]`]: 'size === "lg"'
  }
})
export class AmIconDirective extends AmIconRef {
  constructor(
    render: Renderer2,
    ele: ElementRef,
    dm: DomSanitizer,
    ds: DomSanitizer
  ) {
    super(render, ele, dm, ds);
  }
}
