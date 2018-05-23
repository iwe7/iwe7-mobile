import { WidgetRegistry } from "../widget.factory";
import { StringWidget } from "./string/string.widget";
export class NzWidgetRegistry extends WidgetRegistry {
  constructor() {
    super();
    this.register("string", StringWidget);
    this.setDefault(StringWidget);
  }
}
