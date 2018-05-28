import {
  Component,
  OnInit,
  HostBinding,
  Input,
  Renderer2,
  ElementRef,
  Directive,
  Output,
  EventEmitter
} from "@angular/core";
const pre = "am-tabs-default-bar";
import { getPxStyle } from "../util";
@Component({
  selector: "[tab-bar],tab-bar",
  template: `
    <div class="am-tabs-default-bar-content" [style.transform]="contentStyle">
      <div tabBarItem [size]="size" [tab]="tab" (click)="goToTab(i)" *ngFor="let tab of tabs;index as i;" [vertical]="isTabBarVertical"></div>
      <div tabBarUnderline [size]="size" [isTabBarVertical]="isTabBarVertical" [activeTab]="activeTab"></div>
    </div>
  `
})
export class TabBarComponent implements OnInit {
  // tabs-tab-bar
  @HostBinding("class.am-tabs-default-bar") amTabsDefaultBarTap: boolean = true;

  @HostBinding("class.am-tabs-default-bar-animated")
  @Input()
  animated: boolean = true;

  @Input() tabBarPosition: string = "top";

  @HostBinding("class.am-tabs-default-bar-top")
  get amTabsDefaultBarTop() {
    return this.tabBarPosition === "top";
  }

  @HostBinding("class.am-tabs-default-bar-bottom")
  get amTabsDefaultBarBottom() {
    return this.tabBarPosition === "bottom";
  }

  @HostBinding("class.am-tabs-default-bar-left")
  get amTabsDefaultBarLeft() {
    return this.tabBarPosition === "left";
  }

  @HostBinding("class.am-tabs-default-bar-right")
  get amTabsDefaultBarRight() {
    return this.tabBarPosition === "right";
  }

  @Input() tabs: any[] = [];
  @Input() activeTab: number = 0;
  @Input() page: number = 5;
  @Input() size: number = 0;

  @Output() onTabClick: EventEmitter<any> = new EventEmitter();
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    const { page, tabs } = this;
    this.size = this.getTabSize(page, tabs.length);
    this.getTransformByIndex();
  }

  get isTabBarVertical() {
    return this.tabBarPosition === "left" || this.tabBarPosition === "right";
  }

  goToTab(index: number) {
    this.activeTab = index;
    this.onTabClick.emit(index);
    this.getTransformByIndex();
  }

  getTabSize(page: number, tabLength: number) {
    return 100 / Math.min(page, tabLength);
  }

  @Input() showPrev: boolean = false;
  @Input() showNext: boolean = false;
  @Input() contentStyle: any;

  getTransformByIndex() {
    const { activeTab, tabs, page = 0 } = this;
    const isVertical = this.isTabBarVertical;
    const size = this.getTabSize(page, tabs.length);
    const center = page / 2;
    const pos = Math.min(activeTab, tabs.length - center - 0.5);
    const skipSize = Math.min(-(pos - center + 0.5) * size, 0);
    this.showPrev = activeTab > center - 0.5 && tabs.length > page;
    this.showNext =
      activeTab < tabs.length - center - 0.5 && tabs.length > page;
    this.contentStyle = getPxStyle(skipSize, "%", isVertical);
    this.onChange.emit(this.contentStyle);
  }
}
