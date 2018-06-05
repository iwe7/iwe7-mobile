import { BaseWithIcss } from 'iwe7-base';
import { Component, OnInit, Injector, Input, ElementRef } from '@angular/core';
import { Iwe7IcssService } from 'iwe7-icss';

@Component({
    selector: 'abc-line-y',
    template: ``,
    styleUrls: ['./abc-line-y.scss'],
    providers: [
        Iwe7IcssService
    ]
})
export class AbcLineYComponent extends BaseWithIcss {
    @Input() height: string = '100%';
    @Input() color: string = 'gray';
    @Input() offset: number = 5;
    constructor(injector: Injector, public ele: ElementRef) {
        super(injector);
        this.getCyc('ngAfterViewInit').subscribe(res => {
            const ele: HTMLElement = this.ele.nativeElement;
            const parent = ele.parentElement;
            const height = parent.clientHeight;
            this.styleObj = {
                height: height - this.offset + 'px'
            };
            console.log(height);
        });
        this.setStyleInputs(['height', 'color']);
    }
}
