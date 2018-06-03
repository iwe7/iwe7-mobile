import { ElementRef } from '@angular/core';
import { Injector } from '@angular/core';
import { TabsOutletComponent } from './../tabs-outlet/tabs-outlet';
import {
    Directive, Input,
    Optional, SkipSelf,
    TemplateRef, AfterViewInit
} from '@angular/core';

@Directive({
    selector: '[tabsItem]',
    host: {
        [`[class.am-tabs-default-bar-tab]`]: 'true',
        [`[style.width.%]`]: 'width'
    }
})
export class TabsItemDirective implements AfterViewInit {
    @Input() width: number = 33.333;
    constructor(
        @Optional()
        @SkipSelf()
        public outlet: TabsOutletComponent,
        @Optional()
        public template: TemplateRef<any>,
        public injector: Injector,
        @Optional()
        public ele: ElementRef
    ) { }

    ngAfterViewInit() {
        setTimeout(() => {
            this.template = this.injector.get(TemplateRef, this.ele.nativeElement);
            if (this.template) {
                this.outlet.appendContent(this.template);
            }
        }, 0);
    }
}
