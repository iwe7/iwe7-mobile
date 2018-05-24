import { NgModule } from "@angular/core";

import { AmInputComponent } from "./input";
import { CommonModule } from "@angular/common";
import { AmListModule } from "../list/module";
@NgModule({
  imports: [CommonModule, AmListModule],
  exports: [AmInputComponent],
  declarations: [AmInputComponent],
  providers: []
})
export class AmInputModule {}
