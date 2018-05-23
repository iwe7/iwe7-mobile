import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MoneyRoutingModule } from "./money-routing.module";
import { IndexComponent } from "./index/index.component";
import { SharedModule } from "../../shared/shared.module";
import { MoneyHeaderComponent } from "./index/money-header/money-header.component";
import { MoneyListComponent } from "./index/money-list/money-list.component";
import { UntixianComponent } from "./untixian/untixian.component";
import { TixianComponent } from "./tixian/tixian.component";
import { LogComponent } from "./log/log.component";
import { BindComponent } from "./bind/bind.component";

@NgModule({
  imports: [CommonModule, MoneyRoutingModule, SharedModule],
  declarations: [
    IndexComponent,
    MoneyHeaderComponent,
    MoneyListComponent,
    UntixianComponent,
    TixianComponent,
    LogComponent,
    BindComponent
  ]
})
export class MoneyModule {}
