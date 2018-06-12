import { RepairCarEntryModule } from './reapir-car-entry/repair-car-entry.module';
import { RepairOrderDetailComponent } from './repair-order-detail/repair-order-detail';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material';
import { Iwe7AbcModule } from 'iwe7-abc';
import { Iwe7FlexBoxModule } from 'iwe7-flex';

export const RepairComponents = [
    RepairOrderDetailComponent
];

@NgModule({
    imports: [
        CommonModule,
        MatStepperModule,
        Iwe7AbcModule,
        Iwe7FlexBoxModule,
        RepairCarEntryModule
    ],
    exports: [
        RepairComponents,
        RepairCarEntryModule
    ],
    declarations: [
        RepairComponents
    ],
})
export class Iwe7RepairModule { }
