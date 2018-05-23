import {
  Component,
  OnInit,
  HostBinding,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  TemplateRef,
  ContentChild
} from "@angular/core";
import { getPxStyle, setPxStyle } from "./util";

export interface TabInterface {
  title: string;
  dot?: boolean;
}
@Component({
  selector: "tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.css"]
})
export class TabsComponent {
  @HostBinding("class.am-tabs") amTabs: boolean = true;
  @Input() tabBarPosition: string = "top";

  @HostBinding("class.am-tabs-top")
  get amTabsTop() {
    return this.tabBarPosition === "top";
  }

  @HostBinding("class.am-tabs-bottom")
  get amTabsBottom() {
    return this.tabBarPosition === "bottom";
  }

  @HostBinding("class.am-tabs-left")
  get amTabsLeft() {
    return this.tabBarPosition === "left";
  }

  @HostBinding("class.am-tabs-right")
  get amTabsRight() {
    return this.tabBarPosition === "right";
  }

  @Input() tabDirection: string = "horizontal";

  @HostBinding("class.am-tabs-horizontal")
  get amTabsHorizontal() {
    return this.tabDirection === "horizontal";
  }

  @HostBinding("class.am-tabs-vertical")
  get amTabsVertical() {
    return this.tabDirection === "vertical";
  }

  transform: any;

  // 项目
  @Input() tabs: TabInterface[] = [];
  // 动画
  @Input() animated: boolean = true;
  // 分页
  @Input() page: number = 3;
  @Output() onTabClick: EventEmitter<any> = new EventEmitter();

  @ContentChild(TemplateRef) tpl: TemplateRef<any>;
  @Input() activeTab: number = 0;

  @Input() bgColor: string = "#fff";

  get isTabBarVertical() {
    return this.tabBarPosition === "left" || this.tabBarPosition === "right";
  }

  constructor(public ele: ElementRef) {}

  handleTabClick(index: number) {
    this.activeTab = index;
    this.onTabClick.emit(index);
  }

  handleChange(e: any) {
    this.transform = e;
  }
}
