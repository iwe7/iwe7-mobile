import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AmGridComponent } from "./grid.component";
import { AmIconModule } from "../icon/module";
import { AmColumnNumDirective } from "./column-num.directive";
import { AmFlexBoxModule } from "../flexbox/module";
@NgModule({
  imports: [CommonModule, AmIconModule, AmFlexBoxModule],
  declarations: [AmGridComponent, AmColumnNumDirective],
  exports: [AmGridComponent]
})
export class AmGridModule {}
