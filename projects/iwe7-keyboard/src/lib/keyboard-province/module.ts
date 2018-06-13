import { Iwe7NavbarModule } from 'iwe7-navbar';
import { Iwe7LayoutModule } from 'iwe7-layout';
import { OpenKeyboardProvinceDirective } from './open-province.directive';
import { Iwe7OnHoverModule } from 'iwe7-on-hover';
import { CommonModule } from '@angular/common';
import { KeyboardProvinceComponent } from './keyboard-province';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [
        CommonModule,
        Iwe7OnHoverModule,
        Iwe7LayoutModule,
        Iwe7NavbarModule
    ],
    exports: [
        KeyboardProvinceComponent,
        OpenKeyboardProvinceDirective
    ],
    declarations: [
        KeyboardProvinceComponent,
        OpenKeyboardProvinceDirective
    ],
    entryComponents: [
        KeyboardProvinceComponent
    ],
    providers: [],
})
export class KeyboardProvinceModule { }
