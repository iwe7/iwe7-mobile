import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MessageRoutingModule } from "./message-routing.module";
import { IndexComponent } from "./index/index.component";
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [CommonModule, MessageRoutingModule],
  declarations: [IndexComponent, DetailComponent]
})
export class MessageModule {}
