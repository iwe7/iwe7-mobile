import {
  Directive,
  Injector,
  Input,
  SimpleChanges,
  Injectable
} from "@angular/core";
import { Iwe7BaseDirective } from "../../../../iwe7-base/src/public_api";
import { Iwe7IcssService } from "iwe7-icss";

export interface AmFlexboxItemInputs {
  left: string;
  minWidth: string;
}

@Injectable({
  providedIn: "root"
})
export class AmFlexboxItemInputsDefault implements AmFlexboxItemInputs {
  left = "8px";
  minWidth = "10px";
}

@Directive({
  selector: "am-flex-item,flex-item,[amFlexItem],[flexItem]",
  providers: [Iwe7IcssService]
})
export class AmFlexboxItemDirective extends Iwe7BaseDirective {
  @Input() left: string;
  @Input() minWidth: string;
  constructor(injector: Injector, public _default: AmFlexboxItemInputsDefault) {
    super(injector, "");
    Object.assign(this, this._default);
    this.setStyleInputs(["left", "minWidth"]);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
