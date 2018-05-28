import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AmGridComponent } from "./grid.component";
import { AmIconModule } from "../icon/module";
import { AmColumnNumDirective } from "./column-num.directive";
import { Iwe7FlexBoxModule } from "iwe7-flex";
@NgModule({
  imports: [CommonModule, AmIconModule, Iwe7FlexBoxModule],
  declarations: [AmGridComponent, AmColumnNumDirective],
  exports: [AmGridComponent]
})
export class AmGridModule {}
