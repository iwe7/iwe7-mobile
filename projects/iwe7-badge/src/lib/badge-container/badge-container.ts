import { BadgeOutletComponent } from './../badge-outlet/badge-outlet';
import { Component, OnInit, Optional, SkipSelf, ElementRef } from '@angular/core';
import { ElementRefPortal } from 'iwe7-core';
@Component({
    selector: 'badge-container',
    template: ``,
    styleUrls: ['./badge-container.scss']
})

export class BadgeContainerComponent implements OnInit {
    constructor(
        @Optional()
        @SkipSelf()
        public outlet: BadgeOutletComponent,
        public ele: ElementRef
    ) { }

    ngOnInit() {
        console.log(this.outlet);
        if (this.outlet) {
            this.outlet.attach(new ElementRefPortal(this.ele.nativeElement));
        }
    }
}
