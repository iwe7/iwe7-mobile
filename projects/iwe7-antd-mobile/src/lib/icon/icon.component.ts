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

@Component({
  selector: "svg.am-icon,[amIcon]",
  template: ``
})
export class AmIconComponent implements OnInit {
  @HostBinding("class.am-icon") _amIcon: boolean = true;

  _icon: string;
  @Input()
  set name(val: string) {
    this.amIcon = val;
  }
  @Input()
  set amIcon(val: string) {
    this._icon = val;
    if (
      this._icon.indexOf("http://") > -1 ||
      this._icon.indexOf("https://") > -1 ||
      this._icon.indexOf(".svg") > -1
    ) {
    } else {
      this.render.addClass(this.ele.nativeElement, `am-icon-${val}`);
    }
  }
  get amIcon() {
    return this._icon;
  }

  // @HostBinding("style.background")
  get background(): SafeValue {
    return this.bg;
  }

  @Input() size: string = "md";

  @HostBinding("class.am-icon-md")
  get md() {
    return this.size === "md";
  }
  @HostBinding("class.am-icon-xxs")
  get xxs() {
    return this.size === "xxs";
  }
  @HostBinding("class.am-icon-xs")
  get xs() {
    return this.size === "xs";
  }
  @HostBinding("class.am-icon-sm")
  get sm() {
    return this.size === "sm";
  }
  @HostBinding("class.am-icon-lg")
  get lg() {
    return this.size === "lg";
  }
  constructor(
    public render: Renderer2,
    public ele: ElementRef,
    private dm: DomSanitizer,
    public ds: DomSanitizer
  ) {}

  ngOnInit() {
    if (this.amIcon) {
      if (this.amIcon.indexOf(".svg") > -1) {
      } else {
        const html = `<use xlink:href="#${this.amIcon}"></use>`;
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
