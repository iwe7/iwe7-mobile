import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.css"]
})
export class TabsComponent implements OnInit {
  tabBars: any[] = [
    {
      text: "订单",
      iconPath: "./assets/icons/tab-bar/unactive/manage-order.svg",
      selectedIconPath: "./assets/icons/tab-bar/active/manage-order.svg",
      pagePath: "/tabs/order/index"
    },
    {
      text: "收入",
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
  constructor() {}

  ngOnInit() {}
}
