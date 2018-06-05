import { Injector } from '@angular/core';
import { BaseWithIcss } from 'iwe7-base';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'abc-space',
    template: ``,
    styleUrls: ['./abc-space.scss']
})
export class AbcSpaceComponent extends BaseWithIcss {
    @Input() height: string = '6px';
    constructor(injector: Injector) {
        super(injector);
        this.setStyleInputs(['height']);
     }
}
