import { RepairOrderDetailComponent } from './repair-order-detail/repair-order-detail';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iwe7UiModule } from 'iwe7-ui';
import { MatStepperModule } from '@angular/material';

export const RepairComponents = [
    RepairOrderDetailComponent
];

@NgModule({
    imports: [
        CommonModule,
        Iwe7UiModule,
        MatStepperModule
    ],
    exports: [
        RepairComponents
    ],
    declarations: [
        RepairComponents
    ],
})
export class Iwe7RepairModule { }
