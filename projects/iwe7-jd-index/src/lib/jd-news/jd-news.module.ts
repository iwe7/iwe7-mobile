import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { JdNewsComponent } from './jd-news';

@NgModule({
    imports: [CommonModule],
    exports: [JdNewsComponent],
    declarations: [JdNewsComponent],
    providers: [],
})
export class JdNewsModule { }
