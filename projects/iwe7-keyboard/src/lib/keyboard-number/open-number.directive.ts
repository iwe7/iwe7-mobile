import { KeyboardNumberComponent } from './keyboard-number';
import { Injector, ComponentFactoryResolver, Output, EventEmitter, Input, HostListener } from '@angular/core';
import { CustomComponent } from 'iwe7-core';
import { Directive } from '@angular/core';
import { Iwe7MenuService } from 'iwe7-layout';

@Directive({ selector: '[openKeyboardNumber]', exportAs: 'openKeyboardNumber' })
export class OpenKeyboardNumberDirective {
    @Output() openKeyboardNumber: EventEmitter<string> = new EventEmitter();
    @Input() openKeyboardNumberDefault: string = '';
    @HostListener('click', ['$event'])
    _click(e: any) {
        this.open();
    }
    menuListenr: any;
    constructor(
        injector: Injector,
        public menu: Iwe7MenuService,
        public resolver: ComponentFactoryResolver
    ) {
    }

    open() {
        const control = (data: string) => {
            this.openKeyboardNumber.emit(data);
        };
        if (this.menuListenr) {
            this.menuListenr.unsubscribe();
        }
        const factory = this.resolver.resolveComponentFactory(KeyboardNumberComponent);
        const width = document.documentElement.clientWidth * 0.618 * 4 / 3 + 45;
        this.menuListenr = this.menu.show('bottom', width, factory, control).subscribe();
    }
}
