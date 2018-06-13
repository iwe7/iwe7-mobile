import { KeyboardEmojiComponent } from './keyboard-emoji';
import { Directive, Output, EventEmitter, ComponentFactoryResolver, HostListener } from '@angular/core';
import { Iwe7MenuService } from 'iwe7-layout';

@Directive({ selector: '[openKeyboardEmoji]', exportAs: 'openKeyboardEmoji' })
export class OpenKeyboardEmojiDirective {
    @Output() openKeyboardEmoji: EventEmitter<string> = new EventEmitter();

    @HostListener('click', ['$event'])
    _click(e: any) {
        this.open();
    }
    constructor(
        public menu: Iwe7MenuService,
        public resolver: ComponentFactoryResolver
    ) { }

    open() {
        const control = (data: string) => {
            console.log(data);
            this.openKeyboardEmoji.emit(data);
        };
        const factory = this.resolver.resolveComponentFactory(KeyboardEmojiComponent);
        return this.menu.show('bottom', 300, factory, control).subscribe();
    }
}
