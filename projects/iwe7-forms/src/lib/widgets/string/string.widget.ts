import { Component, OnInit } from "@angular/core";
import { ControlWidget } from "../../widget";

@Component({
  selector: "sf-string",
  template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    <ng-template #ipt>
      <input
        class="weui-input"
        [disabled]="disabled"
        [value]="value"
        (input)="setValue($event.target?.value)"
        [attr.maxLength]="schema.maxLength || null"
        [attr.type]="ui.type || 'text'"
        [attr.placeholder]="ui.placeholder"
        [attr.autocomplete]="ui.autocomplete"
        [attr.autoFocus]="ui.autofocus">
    </ng-template>
  </sf-item-wrap>
  `,
  preserveWhitespaces: false
})
export class StringWidget extends ControlWidget implements OnInit {
  type: string;

  ngOnInit(): void {
    this.type = !!(
      this.ui.addOnAfter ||
      this.ui.addOnBefore ||
      this.ui.addOnAfterIcon ||
      this.ui.addOnBeforeIcon ||
      this.ui.prefix ||
      this.ui.prefixIcon ||
      this.ui.suffix ||
      this.ui.suffixIcon
    )
      ? "addon"
      : "";
  }
}
