import { KeyboardProvinceComponent } from './keyboard-province';
import { Iwe7MenuService } from 'iwe7-layout';
import { Directive, ComponentFactoryResolver, EventEmitter, Output, HostListener } from '@angular/core';

@Directive({ selector: '[openKeyboardProvince]' })
export class OpenKeyboardProvinceDirective {
    @Output() openKeyboardProvince: EventEmitter<string> = new EventEmitter();
    @HostListener('click', ['$event'])
    _click(e: any) {
        this.open();
    }
    menuListenr: any;
    constructor(
        public resolver: ComponentFactoryResolver,
        public menu: Iwe7MenuService
    ) { }

    hide() {
        this.menu.hide();
    }

    open() {
        const control = (data: string) => {
            this.openKeyboardProvince.emit(data);
        };
        if (this.menuListenr) {
            this.menuListenr.unsubscribe();
        }
        const factory = this.resolver.resolveComponentFactory(KeyboardProvinceComponent);
        const element: HTMLElement = document.documentElement;
        const rect = element.getBoundingClientRect();
        const height = (rect.width / 10 - 5) * 1.2;
        const height2 = (height + 5) * 3 + 50;
        this.menuListenr = this.menu.show('bottom', height2, factory, control).subscribe();
    }
}
