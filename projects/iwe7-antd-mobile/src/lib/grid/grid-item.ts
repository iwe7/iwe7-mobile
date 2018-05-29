import { Directive, SkipSelf, Optional, Injector, Input } from "@angular/core";
import { AmGridComponent } from "./grid.component";
import { BaseWithIcss } from "iwe7-base";
import { Iwe7IcssService } from "iwe7-icss";

@Directive({ selector: "[amGridItem]", providers: [Iwe7IcssService] })
export class AmGridItemDirective extends BaseWithIcss {
  @Input() columnNum: number;

  get width() {
    return 100 / this.columnNum + "vw";
  }
  get height() {
    return 100 / this.columnNum + "vw";
  }

  constructor(
    injector: Injector,
    @Optional()
    @SkipSelf()
    public amGrid: AmGridComponent
  ) {
    super(injector);
    this.setStyleInputs(["width", "height"]);
  }
}
