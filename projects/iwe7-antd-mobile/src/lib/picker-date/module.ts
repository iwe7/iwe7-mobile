import { NgModule } from "@angular/core";

import { AmPickerDateComponent } from "./picker-date";
import { CommonModule } from "@angular/common";
import { AmPickerModule } from "../picker/module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, AmPickerModule, FormsModule, ReactiveFormsModule],
  exports: [AmPickerDateComponent],
  declarations: [AmPickerDateComponent],
  providers: []
})
export class AmPickerDateModule {}
