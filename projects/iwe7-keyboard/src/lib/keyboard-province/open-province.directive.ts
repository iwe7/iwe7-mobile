import { KeyboardProvinceComponent } from './keyboard-province';
import { Iwe7MenuService } from 'iwe7-layout';
import { Directive, ComponentFactoryResolver, EventEmitter, Output, HostListener } from '@angular/core';

@Directive({ selector: '[openKeyboardProvince]' })
export class OpenKeyboardProvinceDirective {
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
        const factory = this.resolver.resolveComponentFactory(KeyboardProvinceComponent);
        const element: HTMLElement = document.documentElement;
        const rect = element.getBoundingClientRect();
        const width = rect.width / 10 - 5;
        const height = width * 1.2 * 4 + 45;
        this.menuListenr = this.menu.show('bottom', height, factory, control).subscribe();
    }
}
