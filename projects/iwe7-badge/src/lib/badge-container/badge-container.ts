import { Directive } from '@angular/core';
import { BadgeOutletComponent } from './../badge-outlet/badge-outlet';
import { Component, OnInit, Optional, SkipSelf, ElementRef } from '@angular/core';
import { ElementRefPortal } from 'iwe7-core';
@Directive({
    selector: '[badgeContainer]'
})
export class BadgeContainerDirective implements OnInit {
    constructor(
        @Optional()
        @SkipSelf()
        public outlet: BadgeOutletComponent,
        public ele: ElementRef
    ) { }

    ngOnInit() {
        if (this.outlet) {
            this.outlet.attach(new ElementRefPortal(this.ele.nativeElement));
        }
    }
}
