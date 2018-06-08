import { filter } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { onTouchEnd, onTouchStart, isset } from 'iwe7-util';
import { ElementRef, Renderer2, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Component, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
@Component({
    selector: 'iwe7-view',
    templateUrl: 'iwe7-view.html'
})
export class Iwe7ViewComponent extends BehaviorSubject<any> {
    @Input('hover-class') hoverClass: string = 'none';
    @Input('hover-stop-propagation') hoverStopPropagation: boolean = false;
    @Input('hover-start-time') hoverStartTime: number = 50;
    @Input('hover-stay-time') hoverStayTime: number = 400;
    @Output() onTouchStart: EventEmitter<any> = new EventEmitter();
    @Output() onTouchEnd: EventEmitter<any> = new EventEmitter();

    set touch(val: any) {
        const isTouch = coerceBooleanProperty(val);
        if (isTouch) {
            setTimeout(() => {
                this.hover = true;
            }, this.hoverStartTime);
        } else {
            setTimeout(() => {
                this.hover = false;
            }, this.hoverStayTime);
        }
    }
    set hover(val: any) {
        const isHover = coerceBooleanProperty(val);
        if (isHover) {
            this.render.addClass(this.ele.nativeElement, this.hoverClass);
        } else {
            this.render.removeClass(this.ele.nativeElement, this.hoverClass);
        }
    }
    constructor(
        public ele: ElementRef,
        public render: Renderer2
    ) {
        super({
            hover: false,
            touch: false
        });
        onTouchStart(this.ele.nativeElement).pipe(
            filter(res => isset(this.hoverClass)),
            tap(res => {
                if (this.hoverStopPropagation) {
                    res.stopPropagation();
                }
            }),
            tap(res => {
                this.touch = true;
                this.onTouchStart.emit(res);
            })
        ).subscribe();
        onTouchEnd(this.ele.nativeElement).pipe(
            filter(res => isset(this.hoverClass)),
            tap(res => {
                if (this.hoverStopPropagation) {
                    res.stopPropagation();
                }
            }),
            tap(res => {
                this.touch = false;
                this.onTouchEnd.emit(res);
            }),
        ).subscribe();
    }
    ngOnInit() { }
}
