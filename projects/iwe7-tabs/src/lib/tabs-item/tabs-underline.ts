import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[tabsUnderline]',
    host: {
        [`[class.am-tabs-default-bar-underline]`]: 'true',
        [`[style.width.%]`]: 'width',
        [`[style.left.%]`]: 'left'
    }
})
export class TabsUnderlineDirective {
    @Input() width: number = 33.333;
    @Input() left: number = 0;
    constructor() { }
}
