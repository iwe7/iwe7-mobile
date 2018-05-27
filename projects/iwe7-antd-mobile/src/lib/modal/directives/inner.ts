import {
  Component,
  ElementRef,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";

@Component({ selector: "am-inner", template: `` })
export class AmInnerComponent implements OnInit, OnChanges {
  @Input() amInner: string;
  constructor(public ele: ElementRef) {}
  ngOnInit() {
    console.log(this.ele);
    this.ele.nativeElement.innerHTML = this.amInner;
  }
  ngOnChanges(changes: SimpleChanges) {
    if ("amInner" in changes) {
      if (!changes.amInner.isFirstChange) {
        this.ele.nativeElement.innerHTML = changes.amInner.currentValue;
      }
    }
  }
}
