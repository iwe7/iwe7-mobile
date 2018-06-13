import { LayoutOutletComponent } from 'iwe7-layout';
import { ElementRef, Renderer2, Injector, ViewChild } from '@angular/core';
import { Component, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { CustomComponent } from 'iwe7-core';
@Component({
    selector: 'keyboard-string',
    templateUrl: 'keyboard-string.html',
    styleUrls: ['./keyboard-string.scss']
})
export class KeyboardStringComponent extends CustomComponent<any> {
    list: any[] = [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'delete']
    ];
    @ViewChild('container') container: ElementRef;
    @ViewChild(LayoutOutletComponent) layout: LayoutOutletComponent;

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
        const width = rect.width / 10 - 5;
        this.container.nativeElement.style.setProperty(`--width`, width + 'px');
        this.container.nativeElement.style.setProperty(`--height`, width * 1.2 + 'px');
        super.ngAfterViewInit();
    }

    _ngOnHover(e: any) {
        if (e.type === 'start') {
            this.render.addClass(e.ele, 'active');
        } else {
            if (e.data) {
                this._customData(e.data);
            }
            this.render.removeClass(e.ele, 'active');
        }
    }

    cancel() {
        this._customClose();
    }
    sure() {
        this._customClose();
    }
}
