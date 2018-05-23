import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MoneyRoutingModule } from "./money-routing.module";
import { IndexComponent } from "./index/index.component";
import { SharedModule } from "../../shared/shared.module";
import { MoneyHeaderComponent } from "./index/money-header/money-header.component";
import { MoneyListComponent } from './index/money-list/money-list.component';

@NgModule({
  imports: [CommonModule, MoneyRoutingModule, SharedModule],
  declarations: [IndexComponent, MoneyHeaderComponent, MoneyListComponent]
})
export class MoneyModule {}
