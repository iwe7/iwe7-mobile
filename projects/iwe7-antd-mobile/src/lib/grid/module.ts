import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AmGridComponent } from "./grid.component";
import { AmIconModule } from "../icon/module";
import { AmColumnNumDirective } from "./column-num.directive";
import { Iwe7FlexBoxModule } from "iwe7-flex";
import { AmGridItemDirective } from './grid-item';
import { Iwe7SquareModule } from "iwe7-square";
@NgModule({
  imports: [CommonModule, AmIconModule, Iwe7FlexBoxModule, Iwe7SquareModule],
  declarations: [AmGridComponent, AmColumnNumDirective, AmGridItemDirective],
  exports: [AmGridComponent]
})
export class AmGridModule {}
