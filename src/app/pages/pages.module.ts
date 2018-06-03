import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { AppTabsComponent } from "./tabs/tabs.component";
import { SharedModule } from "../shared/shared.module";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  imports: [CommonModule, PagesRoutingModule, SharedModule],
  declarations: [AppTabsComponent, HeaderComponent]
})
export class PagesModule {}
