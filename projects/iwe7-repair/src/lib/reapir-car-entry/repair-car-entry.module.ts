import { RepairCarEntryComponent } from './reapir-car-entry';
import { EntryCarinfoComponent } from './entry-carinfo/entry-carinfo';
import { EntryUserinfoComponent } from './entry-userinfo/entry-userinfo';
import { NgModule } from '@angular/core';

@NgModule({
    exports: [
        RepairCarEntryComponent
    ],
    declarations: [
        EntryUserinfoComponent,
        EntryCarinfoComponent,
        RepairCarEntryComponent
    ]
})
export class RepairCarEntryModule { }
