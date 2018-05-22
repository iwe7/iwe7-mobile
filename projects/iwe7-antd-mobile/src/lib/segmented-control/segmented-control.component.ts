import {
  Component,
  OnInit,
  HostBinding,
  Input,
  forwardRef
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
export const SEGMENT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SegmentedControlComponent),
  multi: true
};
@Component({
  selector: "segmented-control",
  templateUrl: "./segmented-control.component.html",
  styleUrls: ["./segmented-control.component.css"],
  providers: [SEGMENT_VALUE_ACCESSOR]
})
export class SegmentedControlComponent implements OnInit, ControlValueAccessor {
  @HostBinding("class.am-segment") amSegment: boolean = true;

  @HostBinding("class.am-segment-disabled")
  @Input()
  disabled: boolean = false;

  @Input() items: any[] = [];

  @Input() selectedIndex: number = 0;
  constructor() {}

  ngOnInit() {}

  onClick(index: number) {
    this.selectedIndex = index;
    this.propagateChange(this.selectedIndex);
  }

  propagateChange = (_: any) => {};

  writeValue(value: any) {
    if (value !== undefined) {
      if (value) {
        this.selectedIndex = value;
      }
    }
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {}
}
