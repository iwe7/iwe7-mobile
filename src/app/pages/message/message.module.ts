import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MessageRoutingModule } from "./message-routing.module";
import { IndexComponent } from "./index/index.component";
import { DetailComponent } from "./detail/detail.component";
import { SharedModule } from "../../shared/shared.module";
import { NoticeComponent } from './notice/notice.component';

@NgModule({
  imports: [CommonModule, MessageRoutingModule, SharedModule],
  declarations: [IndexComponent, DetailComponent, NoticeComponent]
})
export class MessageModule {}
