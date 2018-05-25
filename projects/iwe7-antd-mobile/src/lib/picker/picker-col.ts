import { Component, Injector, HostBinding, Input, OnInit } from "@angular/core";
import { Iwe7BaseComponent } from "iwe7-base";
import {
  onTouchStart,
  onTouchCancel,
  onTouchEnd,
  onTouchMove
} from "iwe7-util";
import { tap, switchMap, takeUntil, map, takeLast } from "rxjs/operators";
@Component({
  selector: "am-picker-col",
  template: `
  <div am-picker-col-mask></div>
  <div am-picker-col-indicator></div>
  <div am-picker-col-content>
    <div am-picker-col-item [checked]="current === i" *ngFor="let item of items;index as i;">{{item.label}}</div>
  </div>
`,
  styleUrls: ["./picker-col.scss"]
})
export class AmPickerColComponent extends Iwe7BaseComponent implements OnInit {
  @Input() items: any[] = [];

  @Input() itemHeight: number = 34;
  @Input() colHeight: number = 238;
  @Input() contentTop: number = 102;

  @Input() current: number = 0;

  _value: any;
  @Input()
  set value(val: any) {
    this.items.map((item, index) => {
      if (item.value === val) {
        this.current = index;
        this.updateStyle();
      }
    });
    this._value = val;
  }
  get value() {
    return this._value;
  }
  constructor(injector: Injector) {
    super(injector, "am-picker-col");
  }

  ngOnInit() {
    this.updateStyle();

    const ele: HTMLElement = this.ele.nativeElement;
    onTouchStart(ele)
      .pipe(
        tap((e: TouchEvent) => {
          e.preventDefault();
          e.stopPropagation();
        }),
        map(start => {
          return {
            x: start.touches[0].pageX,
            y: start.touches[0].pageY
          };
        }),
        switchMap(start => {
          return onTouchMove(ele).pipe(
            takeUntil(onTouchEnd(ele)),
            takeUntil(onTouchCancel(ele)),
            map(move => {
              return {
                x: move.touches[0].pageX,
                y: move.touches[0].pageY
              };
            }),
            map(move => {
              return {
                dx: move.x - start.x,
                dy: move.y - start.y
              };
            }),
            map(res => {
              let len;
              this.styleObj = {
                [`translate3dY`]:
                  -this.current * this.itemHeight + res.dy + "px"
              };
              if (res.dy > 0) {
                len = Math.ceil(Math.abs(res.dy) / this.itemHeight);
                return this.current - len;
              } else {
                len = Math.ceil(Math.abs(res.dy) / this.itemHeight);
                return this.current + len;
              }
            }),
            takeLast(1),
            tap(res => {
              if (res > this.items.length - 1) {
                this.current = this.items.length - 1;
              } else {
                if (res <= 0) {
                  this.current = 0;
                }
              }
              this.styleObj = {
                [`translate3dY`]: -this.current * this.itemHeight + "px"
              };
            })
          );
        })
      )
      .subscribe();
  }
  updateStyle() {
    this.styleObj = {
      [`item-height`]: this.itemHeight + "px",
      [`content-top`]: this.contentTop + "px",
      [`col-height`]: this.colHeight + "px",
      [`translate3dY`]: -this.current * this.itemHeight + "px"
    };
  }
}
