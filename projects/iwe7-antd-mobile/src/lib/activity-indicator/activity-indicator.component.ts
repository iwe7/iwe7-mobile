import {
  Component,
  OnInit,
  Input,
  HostBinding,
  TemplateRef,
  ViewChild
} from "@angular/core";

@Component({
  selector: "activity-indicator",
  templateUrl: "./activity-indicator.component.html",
  styleUrls: ["./activity-indicator.component.less"]
})
export class ActivityIndicatorComponent implements OnInit {
  @Input() size: string;

  @HostBinding("class.am-activity-indicator") _indicator: boolean = true;
  @HostBinding("class.am-activity-indicator-lg")
  get amActivityIndicatorLg() {
    return this.size === "large";
  }
  @HostBinding("class.am-activity-indicator-sm")
  get amActivityIndicatorSm() {
    return this.size === "small";
  }
  @HostBinding("class.am-activity-indicator-toast")
  @Input()
  toast: boolean = false;

  @Input() text: string;

  @Input() color: string = "#fff";

  @ViewChild("loadingTpl") loadingTpl: TemplateRef<any>;
  @ViewChild("tipTpl") tipTpl: TemplateRef<any>;

  get tpl() {
    return this.toast ? this.loadingTpl : this.tipTpl;
  }
  constructor() {}

  ngOnInit() {}
}
