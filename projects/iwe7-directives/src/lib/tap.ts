import {
  Directive,
  OnInit,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from "@angular/core";
import { fromEvent, of, merge, Subject } from "rxjs";
import { switchMap, takeUntil, tap } from "rxjs/operators";

@Directive({ selector: "[tap]" })
export class TapDirective implements OnInit, OnDestroy {
  @Output() tap: EventEmitter<any> = new EventEmitter();
  destroyed: Subject<any> = new Subject();
  constructor(public ele: ElementRef) {}

  ngOnInit() {
    const ele = this.ele.nativeElement;
    fromEvent(ele, "touchstart").pipe(
      switchMap(res =>
        of(res).pipe(
          takeUntil(
            merge(
              fromEvent(document, "touchcancel"),
              fromEvent(document, "touchend")
            )
          )
        )
      )
    );
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
