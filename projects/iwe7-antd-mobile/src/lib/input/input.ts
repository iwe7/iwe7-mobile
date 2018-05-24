import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "[am-input],am-input",
  template: `
  <list-item>
    <div class="am-input-label am-input-label-5">{{label}}</div>
    <div class="am-input-control">
      <input [attr.placeholder]="placeholder" [value]="value" [attr.type]="type" [readonly]="readonly" [disabled]="disabled">
    </div>
  </list-item>
  `
})
export class AmInputComponent implements OnInit {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() type: string = "text";
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;

  @Input() value: any = '';

  constructor() {}

  ngOnInit() {}
}
