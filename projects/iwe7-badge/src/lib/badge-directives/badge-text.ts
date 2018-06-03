import { ElementRefPortal } from 'iwe7-core';
import { BadgeOutletComponent } from './../badge-outlet/badge-outlet';
import {
    Directive, HostBinding, Optional,
    SkipSelf, ElementRef, Input, AfterViewInit
} from '@angular/core';

@Directive({
    selector: '[badgeText]',
    host: {
        [`[class.am-badge-text]`]: 'true',
        ['[style.right.px]']: 'right',
        ['[style.top.px]']: 'top'
    }
})
export class BadgeTextDirective implements AfterViewInit {
    @Input() right: number = 0;
    @Input() top: number = 0;
    constructor(
        @Optional()
        @SkipSelf()
        public outlet: BadgeOutletComponent,
        public ele: ElementRef
    ) { }

    ngOnInit() { }

    ngAfterViewInit() {
        if (this.outlet) {
            this.outlet.attach(new ElementRefPortal(this.ele.nativeElement));
            this.outlet.overflow('visiable');
        }
    }
}
