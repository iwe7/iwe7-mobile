import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { AmTabBarComponent } from "./tab-bar.component";
import { AmTabBarItemComponent } from "./tab-bar-item/tab-bar-item.component";
import { AmIconModule } from "../icon/module";
import { AmBadgeModule } from "../badge/module";

@NgModule({
  imports: [CommonModule, AmIconModule, AmBadgeModule, RouterModule],
  declarations: [AmTabBarComponent, AmTabBarItemComponent],
  exports: [AmTabBarComponent, AmTabBarItemComponent]
})
export class AmTabBarModule {}
