import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StepsComponent } from "./steps";
import { StepComponent } from "./step/step";

@NgModule({
  imports: [CommonModule],
  exports: [StepsComponent, StepComponent],
  declarations: [StepsComponent, StepComponent],
  providers: []
})
export class StepsModule {}
