import { LayoutOutletComponent } from 'iwe7-layout';
import { CustomComponent } from 'iwe7-core';
import { ElementRef, Renderer2, Injector, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
@Component({
    selector: 'keyboard-number',
    templateUrl: 'keyboard-number.html',
    styleUrls: ['./keyboard-number.scss']
})
export class KeyboardNumberComponent extends CustomComponent<any> {
    list: any[] = [
        ["1", "2", "3"],
        ["4", "5", '6'],
        ["7", "8", "9"],
        ['.', '0', 'delete']
    ];
    @ViewChild(LayoutOutletComponent) layout: LayoutOutletComponent;
    @ViewChild('container') container: ElementRef;
    num: string = '';
    constructor(
        public ele: ElementRef,
        public render: Renderer2,
        injector: Injector
    ) {
        super(injector);
        this.getCyc('ngAfterViewInit').subscribe(res => {
            this.layout.showHeader();
        });
    }
    ngAfterViewInit() {
        const element: HTMLElement = document.documentElement;
        const rect = element.getBoundingClientRect();
        const width = rect.width / 3;
        this.container.nativeElement.style.setProperty(`--width`, width + 'px');
        this.container.nativeElement.style.setProperty(`--height`, width * 0.618 + 'px');
        super.ngAfterViewInit();
    }

    _ngOnHover(e: any) {
        if (e.type === 'start') {
            this.render.addClass(e.ele, 'active');
        } else {
            if (e.data) {
                if (e.data !== 'delete') {
                    this.num += '' + e.data;
                } else {
                    this.num = this._customData.substr(0, this._customData.length - 1);
                }
            }
            this.render.removeClass(e.ele, 'active');
            this._customData(e.data);
        }
    }

    cancel() {
        this._customClose();
    }
    sure() {
        this._customClose();
    }
}
