import {
  Directive,
  Injector,
  Input,
  HostBinding,
  SimpleChanges,
  OnChanges,
  Output,
  EventEmitter,
  OnInit
} from "@angular/core";
import { Iwe7BaseDirective } from "iwe7-base";
import {
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  onTouchCancel
} from "iwe7-util";
import { fromEvent } from "rxjs";
import { switchMap, map, tap, takeUntil } from "rxjs/operators";

@Directive({ selector: "[am-slider-handle]" })
export class AmSliderHandleDirective extends Iwe7BaseDirective
  implements OnChanges, OnInit {
  @Input() valuemin: number;
  @Input() valuemax: number;
  @Input() valuenow: number;

  @HostBinding("attr.role") role: string = "slider";
  @HostBinding("style.border-color")
  @HostBinding("style.background-color")
  bgColor: string = "blue";
  @HostBinding("style.left.%") left: number;

  @HostBinding("style.width.px") width: number = 14;
  @HostBinding("style.height.px") height: number = 14;
  @HostBinding("style.margin-left.px")
  get marginLeft() {
    return -this.width / 2;
  }

  @HostBinding("style.margin-top.px")
  get margintTop() {
    return -4.5;
  }

  @Output() valuenowChange: EventEmitter<number> = new EventEmitter();

  totalWidth: number;

  constructor(injector: Injector) {
    super(injector, "am-slider-handle");
  }

  ngOnInit() {
    const ele: HTMLElement = this.ele.nativeElement;
    this.totalWidth = (<any>ele.parentNode).clientWidth;
    let now = this.valuenow;
    this.updateStyle();
    onTouchStart(ele)
      .pipe(
        takeUntil(this.getCyc('ngOnDestroy')),
        map((res: TouchEvent) => {
          now = this.valuenow;
          return {
            x: res.touches[0].pageX,
            y: res.touches[0].pageY
          };
        }),
        switchMap(start => {
          return onTouchMove(document).pipe(
            map(res => {
              return {
                x: res.touches[0].pageX,
                y: res.touches[0].pageY
              };
            }),
            map(move => {
              return {
                dx: move.x - start.x,
                dy: move.y - start.y
              };
            }),
            map(res => {
              return res.dx / this.totalWidth * (this.valuemax - this.valuemin);
            }),
            tap(res => {
              this.valuenow = now + res;
              this.updateStyle();
            })
          );
        })
      )
      .subscribe();
  }

  ngOnChanges(changes: SimpleChanges) {}

  updateStyle() {
    this.left = this.valuenow / (this.valuemax - this.valuemin) * this.valuemax;
    this.valuenowChange.emit(this.left);
  }
}
