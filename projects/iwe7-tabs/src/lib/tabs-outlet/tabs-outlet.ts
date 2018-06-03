import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';

@Component({
    selector: 'tabs-outlet',
    templateUrl: 'tabs-outlet.html',
    styleUrls: ['./tabs-outlet.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        [`[class.am-tabs-tab-bar-wrap]`]: 'true'
    }
})
export class TabsOutletComponent implements OnInit {
    @Input() animated: boolean = true;
    @Input() top: boolean = true;
    @ViewChild('content', { read: ViewContainerRef }) content: ViewContainerRef;
    constructor() { }
    ngOnInit() { }
    appendContent(tpl: TemplateRef<any>) {
        if (tpl instanceof TemplateRef) {
            this.content.createEmbeddedView(tpl);
        } else {
            const ele: HTMLElement = this.content.element.nativeElement;
            ele.parentElement.insertBefore(tpl,ele);
        }
    }
}
