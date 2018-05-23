import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { UntixianComponent } from "./untixian/untixian.component";
import { TixianComponent } from "./tixian/tixian.component";
import { LogComponent } from "./log/log.component";
import { BindComponent } from "./bind/bind.component";
const routes: Routes = [
  {
    path: "index",
    component: IndexComponent,
    data: {
      title: "收入"
    }
  },
  {
    path: "untixian",
    component: UntixianComponent,
    data: {
      title: "未提现"
    }
  },
  {
    path: "tixian",
    component: TixianComponent,
    data: {
      title: "已提现"
    }
  },
  {
    path: "log",
    component: LogComponent,
    data: {
      title: "账户流水"
    }
  },
  {
    path: "bind",
    component: BindComponent,
    data: {
      title: "设置提现账户"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoneyRoutingModule {}
