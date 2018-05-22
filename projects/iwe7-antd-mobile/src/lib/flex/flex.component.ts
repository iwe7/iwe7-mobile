import { Directive, OnInit, Input, HostBinding } from "@angular/core";

@Directive({
  selector: "[flex]"
})
export class FlexComponent {
  @HostBinding("class.am-flexbox") _flexBox: boolean = true;

  @Input() direction: string;

  @HostBinding("class.am-flexbox-dir-row")
  get isDirRow() {
    return this.direction === "row";
  }

  @HostBinding("class.am-flexbox-dir-row-reverse")
  get isDirRowReverse() {
    return this.direction === "row-reverse";
  }

  @HostBinding("class.am-flexbox-dir-column")
  get isDirColumn() {
    return this.direction === "column";
  }

  @HostBinding("class.am-flexbox-dir-column-reverse")
  get isDirColumnreverse() {
    return this.direction === "column-reverse";
  }

  // 换行
  @Input() wrap: string;

  @HostBinding("class.am-flexbox-nowrap")
  get isNoWrap() {
    return this.wrap === "nowrap";
  }

  @HostBinding("class.am-flexbox-wrap")
  get isWrap() {
    return this.wrap === "wrap";
  }

  @HostBinding("class.am-flexbox-wrap-reverse")
  get isWrapReverse() {
    return this.wrap === "wrap-reverse";
  }

  // justify
  @Input() justify: string;

  @HostBinding("class.am-flexbox-justify-start")
  get isJustifystart() {
    return this.justify === "start";
  }

  @HostBinding("class.am-flexbox-justify-around")
  get isJustifyaround() {
    return this.justify === "around";
  }

  @HostBinding("class.am-flexbox-justify-center")
  get isJustifyCenter() {
    return this.justify === "center";
  }

  @HostBinding("class.am-flexbox-justify-end")
  get isJustifyEnd() {
    return this.justify === "end";
  }

  @HostBinding("class.am-flexbox-justify-between")
  get isJustifyBetween() {
    return this.justify === "between";
  }

  // align
  @Input() align: string;

  @HostBinding("class.am-flexbox-align-center")
  get isAlignCenter() {
    return this.align === "center";
  }

  @HostBinding("class.am-flexbox-align-start")
  get isALignStart() {
    return this.align === "start";
  }

  @HostBinding("class.am-flexbox-align-end")
  get isALignEnd() {
    return this.align === "end";
  }

  @HostBinding("class.am-flexbox-align-stretch")
  get isALignStretch() {
    return this.align === "stretch";
  }

  @HostBinding("class.am-flexbox-align-baseline")
  get isALignBaseline() {
    return this.align === "baseline";
  }

  // align content
  @Input() alignContent: string;

  @HostBinding("class.am-flexbox-align-content-start")
  get isALignContentStart() {
    return this.alignContent === "start";
  }

  @HostBinding("class.am-flexbox-align-content-end")
  get isALignContentEnd() {
    return this.alignContent === "end";
  }

  @HostBinding("class.am-flexbox-align-content-center")
  get isALignContentCenter() {
    return this.alignContent === "center";
  }

  @HostBinding("class.am-flexbox-align-content-between")
  get isALignContentBetween() {
    return this.alignContent === "between";
  }

  @HostBinding("class.am-flexbox-align-content-around")
  get isALignContentbaseline() {
    return this.alignContent === "around";
  }

  @HostBinding("class.am-flexbox-align-content-stretch")
  get isALignContentstretch() {
    return this.alignContent === "stretch";
  }
}
