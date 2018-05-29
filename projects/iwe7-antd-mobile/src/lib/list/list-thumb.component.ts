import { Directive, Input, HostBinding, Component } from "@angular/core";

@Component({
  selector: "[listThumb]",
  templateUrl: "./list-thumb.component.html"
})
export class ListThumbComponent {
  @Input() listThumb: string;
  @HostBinding("class.am-list-thumb") _thumb: boolean = true;
  constructor() {}
}
