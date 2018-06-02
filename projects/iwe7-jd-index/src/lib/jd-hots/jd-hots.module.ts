import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { JdHotsComponent } from './jd-hots';
import { Iwe7SquareModule } from 'iwe7-square';

@NgModule({
    imports: [CommonModule, Iwe7SquareModule],
    exports: [JdHotsComponent],
    declarations: [JdHotsComponent],
    providers: [],
})
export class JdHotsModule { }
