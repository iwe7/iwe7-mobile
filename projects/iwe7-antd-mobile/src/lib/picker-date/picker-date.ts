import { Component, OnInit, Input, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

@Component({
  selector: "am-picker-date",
  templateUrl: "picker-date.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AmPickerDateComponent),
      multi: true
    }
  ]
})
export class AmPickerDateComponent implements OnInit, ControlValueAccessor {
  data: any[] = [];
  value: any[] = [];

  @Input() canBack: boolean = false;
  _change: any = (_: any) => {};

  constructor() {
    const now = new Date();
    this.value = [
      now.getFullYear(),
      now.getMonth() + 1,
      now.getDate(),
      now.getHours(),
      now.getMinutes()
    ];
    this.data = [this.years, this.months, this.days, this.hours, this.minutes];
  }

  ngOnInit() {}

  _onChange(e: any) {
    this._change(this.value);
    this.data = [this.years, this.months, this.days, this.hours, this.minutes];
  }

  get years() {
    const years = [];
    const now = new Date();
    const nowYear = now.getFullYear();
    if (this.canBack) {
      for (let i = 0; i < 10; i++) {
        const year = nowYear + i;
        years.push({
          label: year + "年",
          value: year
        });
      }
      return years;
    } else {
      for (let i = -5; i < 5; i++) {
        const year = nowYear + i;
        years.push({
          label: year + "年",
          value: year
        });
      }
      return years;
    }
  }

  get months() {
    const months = [];
    if (this.canBack) {
      for (let i = 1; i <= 12; i++) {
        months.push({
          label: i + "月",
          value: i
        });
      }
      return months;
    } else {
      for (let i = 1; i <= 12; i++) {
        months.push({
          label: i + "月",
          value: i
        });
      }
      return months;
    }
  }

  get monthLastDay(): number {
    const now = new Date();
    const nowMonth = now.getMonth() + 1;
    const nextMonthFirstDay: any = new Date(now.getFullYear(), nowMonth, 1);
    const oneDay = 1000 * 60 * 60 * 24;
    const lastData = new Date(nextMonthFirstDay - oneDay);
    const res = lastData.getDate();
    return res;
  }

  get days() {
    const now = new Date();
    const nowDay = now.getDate();
    const days = [];
    for (let i = 1; i <= this.monthLastDay; i++) {
      days.push({
        label: i + "日",
        value: i
      });
    }
    return days;
  }

  get hours() {
    const now = new Date();
    const nowHours = now.getHours();
    const hours = [];
    for (let i = 0; i < 24; i++) {
      hours.push({
        label: i + "点",
        value: i
      });
    }
    return hours;
  }

  get minutes() {
    const now = new Date();
    const nowMinutes = now.getMinutes();
    const minutes = [];
    for (let i = 0; i < 60; i++) {
      minutes.push({
        label: i + "分",
        value: i
      });
    }
    return minutes;
  }

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
