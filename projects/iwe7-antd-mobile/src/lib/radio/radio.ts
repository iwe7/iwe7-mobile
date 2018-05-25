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
  selector: "am-radio",
  templateUrl: "radio.html",
  styleUrls: ["./radio.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AmRadioComponent extends Iwe7BaseComponent implements OnInit {
  @HostBinding("class.am-radio-checked")
  @Input()
  checked = true;

  @HostBinding("class.am-radio-round")
  @Input()
  round: boolean = true;

  @Input() label: string = "同意";
  constructor(injector: Injector) {
    super(injector, "am-radio");
  }
  ngOnInit() {}
}
