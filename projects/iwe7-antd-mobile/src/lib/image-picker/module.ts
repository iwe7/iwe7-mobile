import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Iwe7FlexBoxModule } from "iwe7-flex";


import { AmImagePickerComponent } from "./image-picker";
import { AmImagePickerItemDirective } from "./image-picker-item";
import { AmImagePickerItemRemoveDirective } from "./image-picker-item-remove";
import { AmImagePickerItemContentDirective } from "./image-picker-item-content";
import { AmImagePickerUploadBtnDirective } from "./image-picker-upload-btn";
import { AmImagePickerListDirective } from "./image-picker-list";

@NgModule({
  imports: [CommonModule, Iwe7FlexBoxModule],
  declarations: [
    AmImagePickerComponent,
    AmImagePickerItemDirective,
    AmImagePickerListDirective,
    AmImagePickerItemRemoveDirective,
    AmImagePickerItemContentDirective,
    AmImagePickerUploadBtnDirective
  ],
  exports: [
    AmImagePickerComponent,
    AmImagePickerItemDirective,
    AmImagePickerListDirective,
    AmImagePickerItemRemoveDirective,
    AmImagePickerItemContentDirective,
    AmImagePickerUploadBtnDirective
  ]
})
export class AmImagePickerModule {}
