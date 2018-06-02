import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  HostBinding,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ContentChild
} from "@angular/core";
import classnames from "classnames";
const prefixCls = "am-badge";
@Component({
  selector: "[badge]",
  templateUrl: "./badge.component.html"
})
export class AmBadgeComponent implements OnInit, OnChanges {
  @Input() className: string;
  @Input() size: "large" | "small" = "small";
  @HostBinding("class.am-badge-corner-wrapper-large")
  get amBadgeCornerWrapperLarge() {
    return this.size === "large";
  }
  @Input() overflowCount: number = 99;
  @Input() dot: boolean = false;

  @HostBinding("class.am-badge-hot")
  @Input()
  hot: boolean = false;

  @HostBinding("class.am-badge-corner-wrapper")
  @Input()
  corner: boolean = false;

  @Input() text: string;
  @Input() style: any;

  @ViewChild("content") content: TemplateRef<any>;
  @ContentChild(TemplateRef) contentChild: TemplateRef<any>;
  _children: any;
  @Input()
  get children() {
    return this._children || this.contentChild || this.content;
  }
  set children(val: any) {
    this._children = val;
  }
  get childrenIsTemplateRef() {
    if (this.children instanceof TemplateRef) {
      return true;
    } else {
      return false;
    }
  }

  @HostBinding("class.am-badge") amBadge: boolean = true;
  @HostBinding("class.am-badge-not-a-wrapper")
  get amBadgeNotAWrapper() {
    return !this.children;
  }

  scrollNumberCls: any;
  constructor() { }

  ngOnInit() {
    this.render();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.render();
  }

  render() {
    let {
      overflowCount,
      text,

    } = this;
    const {
      dot,
      size,
      corner,
      className,
      hot,
      children
    } = this;
    overflowCount = overflowCount as number;
    text =
      typeof text === "number" && text > overflowCount
        ? `${overflowCount}+`
        : text;
    if (dot) {
      text = "";
    }
    this.scrollNumberCls = classnames({
      [`${prefixCls}-dot`]: dot || hot,
      [`${prefixCls}-dot-large`]: dot && size === "large",
      [`${prefixCls}-text`]: !dot && !corner && !hot,
      [`${prefixCls}-corner`]: corner,
      [`${prefixCls}-corner-large`]: corner && size === "large"
    });
  }
}
