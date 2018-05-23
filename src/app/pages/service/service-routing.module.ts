import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { AddComponent } from "./add/add.component";

const routes: Routes = [
  {
    path: "index",
    component: IndexComponent
  },
  {
    path: "add",
    component: AddComponent
  },
  {
    path: "edit/:id",
    component: AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule {}
