import { NgModule } from "@angular/core";

import { AmCheckboxComponent } from "./checkbox";
import { AmCheckboxWrapperComponent } from "./checkbox-wrapper";

@NgModule({
  imports: [],
  exports: [AmCheckboxComponent, AmCheckboxWrapperComponent],
  declarations: [AmCheckboxComponent, AmCheckboxWrapperComponent],
  providers: []
})
export class AmCheckboxModule {}
