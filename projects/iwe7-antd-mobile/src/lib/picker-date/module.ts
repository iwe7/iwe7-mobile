import { NgModule } from "@angular/core";

import { AmPickerDateComponent } from "./picker-date";
import { CommonModule } from "@angular/common";
import { AmPickerModule } from "../picker/module";

@NgModule({
  imports: [CommonModule, AmPickerModule],
  exports: [AmPickerDateComponent],
  declarations: [AmPickerDateComponent],
  providers: []
})
export class AmPickerDateModule {}
