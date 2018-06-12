import { ElementRef, Renderer2 } from '@angular/core';
import { Component, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
@Component({
    selector: 'keyboard-string',
    templateUrl: 'keyboard-string.html',
    styleUrls: ['./keyboard-string.scss']
})
export class KeyboardStringComponent {
    list: any[] = [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    ];
    num: string = '';
    constructor(
        public ele: ElementRef,
        public render: Renderer2
    ) {}

    ngAfterViewInit() {
        const element: HTMLElement = this.ele.nativeElement;
        const rect = element.getBoundingClientRect();
        const width = rect.width / 10 - 5;
        this.ele.nativeElement.style.setProperty(`--width`, width + 'px');
        this.ele.nativeElement.style.setProperty(`--height`, width * 1.2 + 'px');
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
