import { KeyboardStringComponent } from './keyboard-string';
import { Directive, HostListener, Output, EventEmitter, ComponentFactoryResolver } from '@angular/core';
import { Iwe7MenuService } from 'iwe7-layout';

@Directive({ selector: '[openKeyboardString]' })
export class OpenKeyboardStringDirective {
    @Output() openKeyboardString: EventEmitter<string> = new EventEmitter();
    @HostListener('click', ['$event'])
    _click(e: any) {
        this.open();
    }
    menuListenr: any;
    constructor(
        public resolver: ComponentFactoryResolver,
        public menu: Iwe7MenuService
    ) { }

    open() {
        const control = (data: string) => {
            this.openKeyboardString.emit(data);
        };
        if (this.menuListenr) {
            this.menuListenr.unsubscribe();
        }
        const factory = this.resolver.resolveComponentFactory(KeyboardStringComponent);
        const element: HTMLElement = document.documentElement;
        const rect = element.getBoundingClientRect();
        const width = rect.width / 10 - 5;
        const height = width * 1.2 * 5 + 45;
        this.menuListenr = this.menu.show('bottom', height, factory, control).subscribe();
    }
}
