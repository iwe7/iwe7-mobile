import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { TabsComponent } from "./tabs/tabs.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [CommonModule, PagesRoutingModule, SharedModule],
  declarations: [TabsComponent]
})
export class PagesModule {}
