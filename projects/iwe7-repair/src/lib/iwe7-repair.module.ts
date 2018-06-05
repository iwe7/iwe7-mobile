import { RepairOrderDetailComponent } from './repair-order-detail/repair-order-detail';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const RepairComponents = [
    RepairOrderDetailComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        RepairComponents
    ],
    declarations: [
        RepairComponents
    ],
})
export class Iwe7RepairModule { }
