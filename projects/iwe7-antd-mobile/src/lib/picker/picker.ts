import {
  Component,
  OnInit,
  Injector,
  Input,
  SimpleChanges,
  OnChanges,
  HostBinding
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
export class AmPickerComponent implements OnInit, OnChanges {
  @Input() itemHeight: number = 34;
  @Input() colHeight: number = 238;
  @Input() data: AmPickerInter[][] = [];
  @Input() value: any[] = [];

  @HostBinding("class.am-picker") picker: boolean = true;

  constructor(injector: Injector) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {}
}
