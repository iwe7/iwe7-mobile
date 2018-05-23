import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ShopRoutingModule } from "./shop-routing.module";
import { IndexComponent } from "./index/index.component";
import { ShopHeaderComponent } from "./shop-header/shop-header.component";
import { ShopStateComponent } from "./shop-state/shop-state.component";
import { ShopNavComponent } from "./shop-nav/shop-nav.component";
import { SettingComponent } from './setting/setting.component';
import { MemberComponent } from './member/member.component';
import { CommentComponent } from './comment/comment.component';
import { BugComponent } from './bug/bug.component';

@NgModule({
  imports: [CommonModule, ShopRoutingModule],
  declarations: [
    IndexComponent,
    ShopHeaderComponent,
    ShopStateComponent,
    ShopNavComponent,
    SettingComponent,
    MemberComponent,
    CommentComponent,
    BugComponent
  ]
})
export class ShopModule {}
