import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MessageRoutingModule } from "./message-routing.module";
import { IndexComponent } from "./index/index.component";

@NgModule({
  imports: [CommonModule, MessageRoutingModule],
  declarations: [IndexComponent]
})
export class MessageModule {}
