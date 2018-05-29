import { NgModule, Injector } from "@angular/core";

import { AmInnerHtmlComponent } from "./inner-html";
import { AmAppendComponent } from "./append";

import { Iwe7BaseModule } from "iwe7-base";

@NgModule({
  declarations: [AmInnerHtmlComponent, AmAppendComponent],
  entryComponents: [AmInnerHtmlComponent, AmAppendComponent]
})
export class AmInnerHtmlModule extends Iwe7BaseModule {
  constructor(injector: Injector) {
    super(injector);
    this.registerElement("am-inner-html", AmInnerHtmlComponent, this.injector);
    this.registerElement("am-append", AmAppendComponent, this.injector);
  }
}
