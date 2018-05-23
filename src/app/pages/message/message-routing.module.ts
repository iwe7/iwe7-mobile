import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { DetailComponent } from "./detail/detail.component";
import { NoticeComponent } from "./notice/notice.component";

const routes: Routes = [
  {
    path: "index",
    component: IndexComponent,
    data: {
      title: "消息"
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
    path: "notice",
    component: NoticeComponent,
    data: {
      title: "公告"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageRoutingModule {}
