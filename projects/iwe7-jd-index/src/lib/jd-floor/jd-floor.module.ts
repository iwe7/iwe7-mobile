import { JdFloorTitleModule } from '../jd-floor-title/jd-floor-title.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JdFloorComponent } from './jd-floor';

@NgModule({
    imports: [CommonModule, JdFloorTitleModule],
    exports: [JdFloorComponent],
    declarations: [JdFloorComponent],
    providers: [],
})
export class JdFloorModule { }
