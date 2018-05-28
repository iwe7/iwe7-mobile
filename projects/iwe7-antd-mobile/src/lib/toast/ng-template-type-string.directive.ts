import { Iwe7BaseCreate } from "iwe7-base";
import { Injector, Directive, ViewContainerRef, OnInit } from "@angular/core";
import { AmAppendComponent } from "../inner-html/append";
import { AmIcon } from "../icon/icon";
import { AmInnerHtmlComponent } from "../inner-html/inner-html";
@Directive({ selector: "[ngTemplateTypeString]" })
export class NgTemplateTypeStringDirective extends Iwe7BaseCreate {
  constructor(injector: Injector, view: ViewContainerRef) {
    super(injector, view);
    this.defaultComponent = AmAppendComponent;
    this.amIcon = AmIcon;
    this.amAppend = AmAppendComponent;
    this.amInnerHtml = AmInnerHtmlComponent;
  }
}
