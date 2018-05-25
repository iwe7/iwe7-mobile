import { NgModule, Injector } from "@angular/core";

import { AmToastComponent } from "./toast";
import { CommonModule } from "@angular/common";
import { AmToastNoticeDirective } from "./toast-notice";
import { AmTextModule } from "../text/module";
import { NgTemplateTypeStringDirective } from "./ng-template-type-string.directive";
import { Iwe7BaseModule } from "iwe7-base";
@NgModule({
  imports: [CommonModule, AmTextModule],
  exports: [AmToastComponent],
  declarations: [
    AmToastComponent,
    AmToastNoticeDirective,
    NgTemplateTypeStringDirective
  ],
  providers: [],
  entryComponents: [AmToastComponent]
})
export class AmToastModule extends Iwe7BaseModule {
  constructor(injector: Injector) {
    super(injector);
    console.log(injector);
  }
}
