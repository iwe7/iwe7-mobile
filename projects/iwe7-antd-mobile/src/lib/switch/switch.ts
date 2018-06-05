import {
  Component,
  OnInit,
  Injector,
  Input,
  SimpleChanges,
  OnChanges,
  ElementRef,
  ViewChild
} from "@angular/core";
import { Iwe7BaseComponent } from "iwe7-base";
import { onChange, toBoolean } from "iwe7-util";
import { takeUntil } from "rxjs/operators";
@Component({
  selector: "am-switch",
  templateUrl: "./switch.html",
  styleUrls: ["./switch.scss"]
})
export class AmSwitchComponent extends Iwe7BaseComponent
  implements OnInit, OnChanges {
  @Input() activeColor: string = "#4dd865";
  @Input() unActiveColor: string = "#e5e5e5";

  @ViewChild("checkbox") checkbox: ElementRef;

  _value: boolean = false;
  @Input()
  set value(val: boolean) {
    this._value = toBoolean(val);
    this.updateStyle();
  }
  get value() {
    return this._value;
  }
  constructor(injector: Injector) {
    super(injector, "am-switch");
  }
  ngOnInit() {
    this.updateStyle();
    onChange(this.checkbox.nativeElement)
      .pipe(takeUntil(this.getCyc('ngOnDestroy')))
      .subscribe(res => {
        const ele: HTMLInputElement = res.target as HTMLInputElement;
        this.value = ele.checked;
      });
  }

  updateStyle() {
    if (this._value) {
      this.styleObj = {
        [`background-color`]: this.activeColor
      };
    } else {
      this.styleObj = {
        [`background-color`]: this.unActiveColor
      };
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
    if ("activeColor" in changes) {
      this.styleObj = {
        [`background-color`]: changes.activeColor.currentValue
      };
    }
  }
}
