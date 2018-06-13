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
    subscription: any;
    constructor(
        public menu: Iwe7MenuService,
        public resolver: ComponentFactoryResolver
    ) { }

    hide() {
        this.menu.hide();
    }

    open() {
        const control = (data: string) => {
            this.openKeyboardEmoji.emit(data);
        };
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        const factory = this.resolver.resolveComponentFactory(KeyboardEmojiComponent);
        this.subscription = this.menu.show('bottom', 300, factory, control).subscribe();
    }
}
