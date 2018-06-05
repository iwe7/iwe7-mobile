import { BaseWithIcss } from 'iwe7-base';
import { Component, OnInit, Injector, Input } from '@angular/core';
import { Iwe7IcssService } from 'iwe7-icss';

@Component({
    selector: 'abc-line',
    template: ``,
    styleUrls: ['./abc-line.scss'],
    providers: [
        Iwe7IcssService
    ]
})
export class AbcLineComponent extends BaseWithIcss {
    @Input() width: string = '100%';
    @Input() color: string = 'gray';
    constructor(injector: Injector) {
        super(injector);
        this.setStyleInputs(['width','color']);
    }
}
