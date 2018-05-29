import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index/index.component";

import { SettingComponent } from "./setting/setting.component";
import { MemberComponent } from "./member/member.component";
import { CommentComponent } from "./comment/comment.component";
import { BugComponent } from "./bug/bug.component";

const routes: Routes = [
  {
    path: "index",
    component: IndexComponent,
    data: {
      title: "店铺"
    }
  },
  {
    path: "setting",
    component: SettingComponent,
    data: {
      title: "店铺设置"
    }
  },
  {
    path: "member",
    component: MemberComponent,
    data: {
      title: "会员管理"
    }
  },
  {
    path: "comment",
    component: CommentComponent,
    data: {
      title: "评价管理"
    }
  },
  {
    path: "bug",
    component: BugComponent,
    data: {
      title: "联系技术"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {}
