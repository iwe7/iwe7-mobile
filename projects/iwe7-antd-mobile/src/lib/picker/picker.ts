import {
  Component,
  OnInit,
  Injector,
  Input,
  SimpleChanges,
  OnChanges,
  HostBinding,
  forwardRef
} from "@angular/core";
import { Iwe7BaseComponent } from "iwe7-base";

export interface AmPickerInter {
  label: string;
  value?: any;
  children?: AmPickerInter[];
}

import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";
@Component({
  selector: "am-picker",
  templateUrl: "picker.html",
  styleUrls: ["./picker.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AmPickerComponent),
      multi: true
    }
  ]
})
export class AmPickerComponent
  implements OnInit, OnChanges, ControlValueAccessor {
  @Input() itemHeight: number = 34;
  @Input() colHeight: number = 238;
  @Input() data: AmPickerInter[][] = [];
  @Input() value: any[] = [];

  @HostBinding("class.am-picker") picker: boolean = true;

  constructor(injector: Injector) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {}

  changeValue(e: any) {
    this._change(this.value);
  }

  _change: (_: any) => {};
  writeValue(obj: any): void {
    if (obj) {
      this.value = obj;
    }
  }
  registerOnChange(fn: any): void {
    this._change = fn;
  }
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}
