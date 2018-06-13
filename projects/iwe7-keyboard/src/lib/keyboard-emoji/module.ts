import { Iwe7LayoutModule } from 'iwe7-layout';
import { OpenKeyboardEmojiDirective } from './open-emoji.directive';
import { Iwe7OnHoverModule } from 'iwe7-on-hover';
import { CommonModule } from '@angular/common';
import { BetterCoreModule } from 'iwe7-better-scroll';
import { KeyboardEmojiComponent } from './keyboard-emoji';

import { NgModule } from '@angular/core';
import { Iwe7NavbarModule } from 'iwe7-navbar';

@NgModule({
    imports: [
        BetterCoreModule,
        CommonModule,
        Iwe7OnHoverModule,
        Iwe7LayoutModule,
        Iwe7NavbarModule
    ],
    exports: [
        KeyboardEmojiComponent,
        OpenKeyboardEmojiDirective
    ],
    declarations: [
        KeyboardEmojiComponent,
        OpenKeyboardEmojiDirective
    ],
    entryComponents: [
        KeyboardEmojiComponent
    ],
    providers: [

    ],
})
export class KeyboardEmojiModule { }
