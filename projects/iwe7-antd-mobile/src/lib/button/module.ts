import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AmButtonComponent } from "./button.component";
import { AmIconModule } from "../icon/module";
@NgModule({
  imports: [CommonModule, AmIconModule],
  declarations: [AmButtonComponent],
  exports: [AmButtonComponent]
})
export class AmButtonModule {}
