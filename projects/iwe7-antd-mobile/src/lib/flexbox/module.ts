import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AmFlexboxComponent } from "./flexbox.component";
import { AmFlexboxItemDirective } from "./flexbox-item";

@NgModule({
  imports: [CommonModule],
  declarations: [AmFlexboxComponent, AmFlexboxItemDirective],
  exports: [AmFlexboxComponent, AmFlexboxItemDirective]
})
export class AmFlexBoxModule {}
