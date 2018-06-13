import { OpenKeyboardNumberDirective } from './open-number.directive';
import { Iwe7NavbarModule } from 'iwe7-navbar';
import { Iwe7LayoutModule } from 'iwe7-layout';
import { CommonModule } from '@angular/common';
import { KeyboardNumberComponent } from './keyboard-number';
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
        KeyboardNumberComponent,
        OpenKeyboardNumberDirective
    ],
    declarations: [
        KeyboardNumberComponent,
        OpenKeyboardNumberDirective
    ],
    entryComponents: [
        KeyboardNumberComponent
    ],
    providers: [],
})
export class KeyboardNumberModule { }
