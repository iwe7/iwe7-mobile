import {
  Directive,
  OnInit,
  Input,
  HostBinding,
  Injector,
  Component,
  SimpleChanges,
  ViewEncapsulation,
  Injectable
} from "@angular/core";
import { Iwe7BaseComponent } from "../../../../iwe7-base/src/public_api";
import { from } from "rxjs";
import { filter, map, tap } from "rxjs/operators";
import { Iwe7IcssService } from "iwe7-icss";

export interface AmFlexInputs {
  direction: string;
  wrap: string;
  justify: string;
  align: string;
  alignContent: string;
}
@Injectable({
  providedIn: "root"
})
export class AmFlexInputsDefault implements AmFlexInputs {
  direction: string = "row";
  wrap: string = "nowrap";
  justify: string = "normal";
  align: string = "center";
  alignContent: string = "normal";
}

@Component({
  selector: "am-flex,flex,[amFlex],[flex]",
  styleUrls: ["./flexbox.component.scss"],
  template: `
    <ng-content></ng-content>
  `,
  providers: [Iwe7IcssService],
  encapsulation: ViewEncapsulation.None
})
export class AmFlexboxComponent extends Iwe7BaseComponent {
  @Input() direction: string;
  @Input() wrap: string;
  @Input() justify: string;
  @Input() align: string;
  @Input() alignContent: string;

  constructor(injector: Injector, public _default: AmFlexInputsDefault) {
    super(injector, "");
    Object.assign(this, this._default);
    this.setStyleInputs([
      "direction",
      "wrap",
      "justify",
      "align",
      "alignContent"
    ]);
  }
}
