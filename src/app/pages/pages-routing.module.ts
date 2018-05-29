import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TabsComponent } from "./tabs/tabs.component";
import { HeaderComponent } from "./header/header.component";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsComponent,
    children: [
      {
        path: "message",
        loadChildren: "./message/message.module#MessageModule",
        data: {
          title: "消息"
        }
      },
      {
        path: "money",
        loadChildren: "./money/money.module#MoneyModule",
        data: {
          title: "收入"
        }
      },
      {
        path: "order",
        loadChildren: "./order/order.module#OrderModule",
        data: {
          title: "订单"
        }
      },
      {
        path: "service",
        loadChildren: "./service/service.module#ServiceModule",
        data: {
          title: "服务"
        }
      },
      {
        path: "shop",
        loadChildren: "./shop/shop.module#ShopModule",
        data: {
          title: "店铺"
        }
      }
    ]
  },
  {
    path: "header",
    component: HeaderComponent,
    children: [
      {
        path: "message",
        loadChildren: "./message/message.module#MessageModule",
        data: {
          title: "消息"
        }
      },
      {
        path: "money",
        loadChildren: "./money/money.module#MoneyModule",
        data: {
          title: "收入"
        }
      },
      {
        path: "order",
        loadChildren: "./order/order.module#OrderModule",
        data: {
          title: "订单"
        }
      },
      {
        path: "service",
        loadChildren: "./service/service.module#ServiceModule",
        data: {
          title: "服务"
        }
      },
      {
        path: "shop",
        loadChildren: "./shop/shop.module#ShopModule",
        data: {
          title: "店铺"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
