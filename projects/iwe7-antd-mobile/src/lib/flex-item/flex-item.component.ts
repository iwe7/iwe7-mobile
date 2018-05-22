import { Component, OnInit, HostBinding, Directive } from "@angular/core";

@Directive({
  selector: "flex-item,[flexItem]"
})
export class FlexItemComponent {
  @HostBinding("class.am-flexbox-item") _item: boolean = true;
}
