import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ViewEncapsulation
} from "@angular/core";
import classnames from "classnames";
const prefixCls = "am-action-sheet";
@Component({
  selector: "action-sheet",
  templateUrl: "./action-sheet.component.html",
  styleUrls: ["./action-sheet.component.less"],
  encapsulation: ViewEncapsulation.None
})
export class ActionSheetComponent implements OnInit {
  @Input() options: { title: string; icon: string };
  @Input() maskClosable: boolean = true;
  @Input() cancelButtonIndex: number;
  @Input() destructiveButtonIndex: number;
  @Input() title: any;
  @Input() message: any;
  @Input() className: any = "";
  @Input() transitionName: string;
  @Input() maskTransitionName: string;
  @Input() mode: string = "share";
  @Input() show: boolean = true;
  constructor() {}

  ngOnInit() {}

  onClickMask() {
    if (this.maskClosable) {
      this.show = false;
    }
  }

  onItem(item: any) {
    item.active = !item.active;
  }
}
