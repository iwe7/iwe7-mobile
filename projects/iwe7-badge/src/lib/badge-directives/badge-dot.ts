import { ElementRefPortal } from 'iwe7-core';
import { BadgeOutletComponent } from './../badge-outlet/badge-outlet';
import {
    Directive, HostBinding, Optional,
    SkipSelf, ElementRef, Input, AfterViewInit
} from '@angular/core';

@Directive({
    selector: '[badgeDot]',
    host: {
        [`[class.am-badge-dot]`]: 'true',
        ['[style.right.px]']: 'right',
        ['[style.top.px]']: 'top'
    }
})
export class BadgeDotDirective implements AfterViewInit {
    @Input() right: number = 0;
    @Input() top: number = 0;
    constructor(
        @Optional()
        @SkipSelf()
        public outlet: BadgeOutletComponent,
        public ele: ElementRef
    ) { }

    ngAfterViewInit() {
        if (this.outlet) {
            this.outlet.attach(new ElementRefPortal(this.ele.nativeElement));
            this.outlet.overflow('visiable');
        }
    }
}
