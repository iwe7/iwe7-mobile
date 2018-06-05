import { Iwe7RepairModule } from './../../../projects/iwe7-repair/src/lib/iwe7-repair.module';
import { Iwe7UiModule } from './../../../projects/iwe7-ui/src/lib/iwe7-ui.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    Iwe7UiModule,
    Iwe7RepairModule,
  ]
})
export class SharedModule { }
