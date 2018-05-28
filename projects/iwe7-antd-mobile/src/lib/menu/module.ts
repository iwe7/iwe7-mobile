import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AmMenuComponent } from "./menu.component";
import { AmListModule } from '../list/module';
@NgModule({
  imports: [CommonModule, AmListModule],
  declarations: [AmMenuComponent],
  exports: [AmMenuComponent]
})
export class AmMenuModule {}
