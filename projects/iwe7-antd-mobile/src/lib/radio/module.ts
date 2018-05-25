import { NgModule } from "@angular/core";

import { AmRadioComponent } from "./radio";
import { AmRadioWrapperComponent } from "./radio-wrapper";

@NgModule({
  imports: [],
  exports: [AmRadioComponent, AmRadioWrapperComponent],
  declarations: [AmRadioComponent, AmRadioWrapperComponent],
  providers: []
})
export class AmRadioModule {}
