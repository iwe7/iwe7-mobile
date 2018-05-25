import { NgModule } from "@angular/core";

import { AmPickerComponent } from "./picker";
import { AmPickerColComponent } from "./picker-col";
import { AmPickerColMaskDirective } from "./picker-col-mask";
import { AmPickerColIndicatorDirective } from "./picker-col-indicator";
import { AmPickerColContentDirective } from "./picker-col-content";
import { AmPickerColItemDirective } from "./picker-col-item";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  exports: [AmPickerComponent],
  declarations: [
    AmPickerComponent,
    AmPickerColComponent,
    AmPickerColMaskDirective,
    AmPickerColIndicatorDirective,
    AmPickerColContentDirective,
    AmPickerColItemDirective
  ],
  providers: []
})
export class AmPickerModule {}
