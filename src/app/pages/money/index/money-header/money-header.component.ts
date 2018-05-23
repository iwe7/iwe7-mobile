import {
  Component,
  OnInit,
  HostListener,
  Input,
  HostBinding
} from "@angular/core";

@Component({
  selector: "app-money-header",
  templateUrl: "./money-header.component.html",
  styleUrls: ["./money-header.component.scss"]
})
export class MoneyHeaderComponent implements OnInit {
  @Input() money: string = "0.00";
  @Input() title: string = "未提现金额";
  @Input()
  @HostBinding("style.background-color")
  bgColor: string = "#108ee9";
  @Input()
  @HostBinding("style.color")
  color: string = "#fff";

  constructor() {}
  ngOnInit() {}
}
