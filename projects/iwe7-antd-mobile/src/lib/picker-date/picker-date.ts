import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "am-picker-date",
  templateUrl: "picker-date.html"
})
export class AmPickerDateComponent implements OnInit {
  data: any[] = [];
  value: any[] = [];

  @Input() canBack: boolean = false;
  constructor() {
    this.data = [this.years, this.months, this.days, this.hours, this.minutes];
    const now = new Date();
    this.value = [
      now.getFullYear(),
      now.getMonth() + 1,
      now.getDate(),
      now.getHours(),
      now.getMinutes()
    ];
    console.log(this);
  }

  ngOnInit() {}

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
}
