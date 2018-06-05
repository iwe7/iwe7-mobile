import { BaseWithIcss } from 'iwe7-base';
import { Component, OnInit, Injector, Input } from '@angular/core';

@Component({
    selector: 'abc-blank',
    template: `<ng-content></ng-content>`,
    styleUrls: ['./abc-blank.scss']
})
export class AbcBlankComponent extends BaseWithIcss {
    @Input() padding: string = '8px';
    constructor(injector: Injector) {
        super(injector);
        this.setStyleInputs(['padding']);
    }
}
