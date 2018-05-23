import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TabsComponent } from "./tabs/tabs.component";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsComponent,
    children: [
      {
        path: "message",
        loadChildren: "./message/message.module#MessageModule"
      },
      {
        path: "money",
        loadChildren: "./money/money.module#MoneyModule"
      },
      {
        path: "order",
        loadChildren: "./order/order.module#OrderModule"
      },
      {
        path: "service",
        loadChildren: "./service/service.module#ServiceModule"
      },
      {
        path: "shop",
        loadChildren: "./shop/shop.module#ShopModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
