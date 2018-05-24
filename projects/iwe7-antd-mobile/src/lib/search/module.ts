import { NgModule } from "@angular/core";

import { AmSearchComponent } from "./search";
import { AmSearchClearDirective } from "./search-clear";
import { AmSearchCancelDirective } from "./search-cancel";

@NgModule({
  imports: [],
  exports: [AmSearchComponent],
  declarations: [
    AmSearchComponent,
    AmSearchClearDirective,
    AmSearchCancelDirective
  ],
  providers: []
})
export class AmSearchModule {}
