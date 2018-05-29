import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { DetailComponent } from "./detail/detail.component";
import { AddComponent } from "./add/add.component";
import { ScanComponent } from "./scan/scan.component";

const routes: Routes = [
  {
    path: "index",
    component: IndexComponent,
    data: {
      title: "所有工单"
    }
  },
  {
    path: "detail/:id",
    component: DetailComponent,
    data: {
      title: "详情"
    }
  },
  {
    path: "add",
    component: AddComponent,
    data: {
      title: "开单"
    }
  },
  {
    path: "edit/:id",
    component: AddComponent,
    data: {
      title: "编辑订单"
    }
  },
  {
    path: "scan",
    component: ScanComponent,
    data: {
      title: "扫车牌开单"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {}
