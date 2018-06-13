import { Iwe7LayoutModule } from 'iwe7-layout';
import { Iwe7NavbarModule } from 'iwe7-navbar';
import { OpenKeyboardStringDirective } from './open-string.directive';
import { KeyboardStringComponent } from './keyboard-string';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Iwe7OnHoverModule } from 'iwe7-on-hover';

@NgModule({
    imports: [
        CommonModule,
        Iwe7OnHoverModule,
        Iwe7LayoutModule,
        Iwe7NavbarModule
    ],
    exports: [
        KeyboardStringComponent,
        OpenKeyboardStringDirective
    ],
    declarations: [
        KeyboardStringComponent,
        OpenKeyboardStringDirective
    ],
    entryComponents: [
        KeyboardStringComponent
    ],
    providers: [],
})
export class KeyboardStringModule { }
