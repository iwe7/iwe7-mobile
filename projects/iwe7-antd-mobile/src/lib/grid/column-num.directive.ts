import {
  Directive,
  HostBinding,
  Input,
  Renderer2,
  ElementRef
} from "@angular/core";

@Directive({
  selector: "[columnNum]"
})
export class ColumnNumDirective {
  @Input() columnNum: number = 4;
  constructor(public render: Renderer2, public ele: ElementRef) {}

  ngOnInit() {
    this.render.addClass(
      this.ele.nativeElement,
      `column-num-${this.columnNum}`
    );
  }
}
