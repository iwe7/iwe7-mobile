import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { JdItemComponent } from './jd-item';
import { Iwe7SquareModule } from 'iwe7-square';

@NgModule({
    imports: [CommonModule, Iwe7SquareModule],
    exports: [JdItemComponent],
    declarations: [JdItemComponent],
    providers: [],
})
export class JdItemModule { }
