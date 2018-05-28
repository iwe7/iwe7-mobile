import { Directive, Optional, SkipSelf } from "@angular/core";
import { Iwe7FlexItemDirective } from "iwe7-flex";

@Directive({ selector: "[amGridInline]" })
export class AmGridInlineDirective {
  constructor(
    @Optional()
    @SkipSelf()
    public flexItem: Iwe7FlexItemDirective
  ) {}
}
