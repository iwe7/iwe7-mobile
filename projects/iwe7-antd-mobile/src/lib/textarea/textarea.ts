import { Component, OnInit, HostBinding, Input } from "@angular/core";

@Component({
  selector: "am-textarea",
  templateUrl: "textarea.html"
})
export class AmTextareaComponent implements OnInit {
  @HostBinding("class.am-list-item") _item: boolean = true;
  @HostBinding("class.am-textarea-item") _textarea: boolean = true;

  @HostBinding("class.am-textarea-has-count")
  get hasCount() {
    return !!this.maxlength;
  }
  @Input() maxlength: number;
  nowCount: number = 0;

  @Input() placeholder: string = '请输入。。。';
  @Input() rows: number = 1;
  constructor() {}

  ngOnInit() {}
}
