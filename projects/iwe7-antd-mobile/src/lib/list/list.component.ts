import { Component, HostBinding } from "@angular/core";

@Component({
  selector: "[list],am-list,list",
  templateUrl: './list.component.html'
})
export class ListComponent {
  @HostBinding("class.am-list") _list: boolean = true;
  constructor() {}
}
