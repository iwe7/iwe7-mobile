import { Component, OnInit, Input, ElementRef } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "am-append",
  template: `
  `
})
export class AmAppendComponent implements OnInit {
  @Input()
  set ele(val: HTMLElement) {
    this._ele.nativeElement.appendChild(val);
  }
  constructor(private _ele: ElementRef) {}
  ngOnInit() {}
}
