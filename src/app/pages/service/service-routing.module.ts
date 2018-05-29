import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { AddComponent } from "./add/add.component";

const routes: Routes = [
  {
    path: "index",
    component: IndexComponent,
    data: {
      title: "服务管理"
    }
  },
  {
    path: "add",
    component: AddComponent,
    data: {
      title: "添加服务"
    }
  },
  {
    path: "edit/:id",
    component: AddComponent,
    data: {
      title: "编辑服务"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule {}
