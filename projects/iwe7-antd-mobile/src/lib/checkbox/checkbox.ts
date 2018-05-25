import {
  Component,
  OnInit,
  Injector,
  HostBinding,
  ViewEncapsulation,
  Input
} from "@angular/core";
import { Iwe7BaseComponent } from "iwe7-base";

@Component({
  selector: "am-checkbox",
  templateUrl: "checkbox.html",
  styleUrls: ["./checkbox.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AmCheckboxComponent extends Iwe7BaseComponent implements OnInit {
  @HostBinding("class.am-checkbox-checked")
  @Input()
  checked = true;

  constructor(injector: Injector) {
    super(injector, "am-checkbox");
  }
  ngOnInit() {}
}
