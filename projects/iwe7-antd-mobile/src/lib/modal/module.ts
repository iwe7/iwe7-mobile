import { NgModule } from "@angular/core";

import { AmModalComponent } from "./am-modal.component";
import { CommonModule } from "@angular/common";
import { NgTemplateComponentStringOutletDirective } from "./directives/ng-template-component-string.outlet";
import { OverlayModule } from "@angular/cdk/overlay";
import { AmInnerComponent } from "./directives/inner";
import { AmTextModule } from "../text/module";
import { DialogModule } from "iwe7-dialog";

@NgModule({
  imports: [CommonModule, OverlayModule, DialogModule],
  exports: [AmModalComponent],
  declarations: [
    AmModalComponent,
    NgTemplateComponentStringOutletDirective,
    AmInnerComponent
  ],
  providers: [],
  entryComponents: [AmModalComponent, AmInnerComponent]
})
export class AmModalModule {}
