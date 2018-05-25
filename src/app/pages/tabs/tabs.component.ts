import { Component, OnInit, Injector, OnDestroy } from "@angular/core";
import { Iwe7TitleService } from "iwe7-router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { BaseWithTitle } from "iwe7-base";
@Component({
  selector: "router-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.css"]
})
export class TabsComponent extends BaseWithTitle {
  tabBars: any[] = [
    {
      text: "订单",
      iconPath: "./assets/icons/tab-bar/unactive/manage-order.svg",
      selectedIconPath: "./assets/icons/tab-bar/active/manage-order.svg",
      pagePath: "/tabs/order/index"
    },
    {
      text: "营业额",
      iconPath: "./assets/icons/tab-bar/unactive/security.svg",
      selectedIconPath: "./assets/icons/tab-bar/active/security.svg",
      pagePath: "/tabs/money/index"
    },
    {
      text: "服务",
      iconPath: "./assets/icons/tab-bar/unactive/form.svg",
      selectedIconPath: "./assets/icons/tab-bar/active/form.svg",
      pagePath: "/tabs/service/index"
    },
    {
      text: "消息",
      iconPath: "./assets/icons/tab-bar/unactive/remind.svg",
      selectedIconPath: "./assets/icons/tab-bar/active/remind.svg",
      pagePath: "/tabs/message/index"
    },
    {
      text: "店铺",
      iconPath: "./assets/icons/tab-bar/unactive/store.svg",
      selectedIconPath: "./assets/icons/tab-bar/active/store.svg",
      pagePath: "/tabs/shop/index"
    }
  ];

  constructor(injector: Injector) {
    super(injector, "");
  }
}
