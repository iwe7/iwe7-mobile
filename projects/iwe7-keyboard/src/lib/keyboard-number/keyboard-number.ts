import { ElementRef, Renderer2 } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'keyboard-number',
    templateUrl: 'keyboard-number.html',
    styleUrls: ['./keyboard-number.scss']
})

export class KeyboardNumberComponent {
    num: string = '';
    list: any[] = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ['.', 0, 'delete']
    ];
    constructor(
        public ele: ElementRef,
        public render: Renderer2
    ) { }
    ngAfterViewInit() {
        const element: HTMLElement = this.ele.nativeElement;
        const rect = element.getBoundingClientRect();
        const width = rect.width / 3;
        this.ele.nativeElement.style.setProperty(`--width`, width + 'px');
        this.ele.nativeElement.style.setProperty(`--height`, width * 0.618 + 'px');
    }

    _ngOnHover(e: any) {
        if (e.type === 'start') {
            this.render.addClass(e.ele, 'active');
        } else {
            if (e.data) {
                if (e.data !== 'delete') {
                    this.num += e.data;
                } else {
                    this.num = this.num.substr(0, this.num.length - 1);
                }
            }
            this.render.removeClass(e.ele, 'active');
        }
    }
}
