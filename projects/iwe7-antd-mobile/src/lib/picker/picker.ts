import {
  Component,
  OnInit,
  Injector,
  Input,
  SimpleChanges,
  OnChanges
} from "@angular/core";
import { Iwe7BaseComponent } from "iwe7-base";

export interface AmPickerInter {
  label: string;
  value?: any;
  children?: AmPickerInter[];
}
@Component({
  selector: "am-picker",
  templateUrl: "picker.html",
  styleUrls: ["./picker.scss"]
})
export class AmPickerComponent extends Iwe7BaseComponent
  implements OnInit, OnChanges {
  @Input() itemHeight: number = 34;
  @Input() colHeight: number = 238;
  @Input() data: AmPickerInter[][] = [];
  @Input() value: any[] = [];

  constructor(injector: Injector) {
    super(injector, "am-picker");
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {}
}
