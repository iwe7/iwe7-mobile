import { NgModule } from "@angular/core";

import { AmStepperComponent } from "./stepper";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  exports: [AmStepperComponent],
  declarations: [AmStepperComponent],
  providers: []
})
export class AmStepperModule {}
