import { Component, OnInit, Input, ElementRef } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "am-inner-html",
  template: `
  `
})
export class AmInnerHtmlComponent implements OnInit {
  _innerHtml: string;
  @Input()
  set text(val: string) {
    this._innerHtml = val;
  }
  get text() {
    return this._innerHtml;
  }
  constructor(public ele: ElementRef) {}
  ngOnInit() {
    this.ele.nativeElement.innerHTML = this._innerHtml;
  }
}
