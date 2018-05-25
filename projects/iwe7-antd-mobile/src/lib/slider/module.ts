import { NgModule } from "@angular/core";

import { AmSLiderComponent } from "./slider";
import { AmSliderHandleDirective } from "./slider-handle";
import { AmSliderMarkDirective } from "./slider-mark";
import { AmSliderRailDirective } from "./slider-rail";
import { AmSliderStepDirective } from "./slider-step";
import { AmSliderTrackDirective } from "./slider-track";

@NgModule({
  imports: [],
  exports: [AmSLiderComponent],
  declarations: [
    AmSLiderComponent,
    AmSliderHandleDirective,
    AmSliderMarkDirective,
    AmSliderRailDirective,
    AmSliderStepDirective,
    AmSliderTrackDirective
  ],
  providers: []
})
export class AmSLiderModule {}
