import {
  Component,
  HostBinding,
  Input,
  ContentChild,
  TemplateRef
} from "@angular/core";

@Component({
  selector: "[listItem],list-item",
  templateUrl: "./list-item.component.html"
})
export class ListItemComponent {
  @HostBinding("class.am-list-item") _item: boolean = true;
  @Input() brief: string | TemplateRef<any>;
  get briefIsString() {
    return typeof this.brief === "string";
  }
  @Input() thumb: string | TemplateRef<any>;
  get thumbIsString() {
    return typeof this.thumb === "string";
  }
  @Input() extra: string | TemplateRef<any>;

  get extraIsString() {
    return typeof this.extra === "string";
  }
  @Input() arrow: string;

  @Input() error: boolean = false;
  @Input() multipleLine: boolean = false;
  @Input() wrap: boolean = false;

  @Input() activeStyle: any;
  @Input() platform: string;

  @HostBinding("class.am-list-item-thumb")
  get isThumb() {
    return !!this.thumb;
  }

  @Input() align: string = "middle";
  @HostBinding("class.am-list-item-top")
  get isTop() {
    return this.align === "top";
  }

  @HostBinding("class.am-list-item-middle")
  get isMiddle() {
    return this.align === "middle";
  }

  @HostBinding("class.am-list-item-bottom")
  get isBottom() {
    return this.align === "bottom";
  }
  constructor() {}
}
