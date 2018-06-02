import { TemplateRef, Injector, ElementRef } from '@angular/core';
import { Component, OnInit, ContentChild } from '@angular/core';
import { CoreDomPortalHost } from 'iwe7-core';

@Component({
    selector: 'badge-outlet',
    template: `
    <ng-container *ngTemplateOutlet="tpl"></ng-container>
    `,
    styleUrls: ['./badge-outlet.scss']
})
export class BadgeOutletComponent extends CoreDomPortalHost {
    @ContentChild(TemplateRef) tpl: TemplateRef<any>;
    constructor(
        injector: Injector,
        ele: ElementRef
    ) {
        super(injector, ele.nativeElement);
    }
}

