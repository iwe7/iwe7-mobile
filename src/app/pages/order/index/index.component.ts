import { Component, OnInit, Injector } from "@angular/core";
import { Iwe7PageBase } from "iwe7-base";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent extends Iwe7PageBase implements OnInit {
  tabs: any[] = [
    {
      title: "待处理",
      dot: true
    },
    {
      title: "进行中",
      dot: true
    },
    {
      title: "已完成"
    },
    {
      title: "全部"
    }
  ];

  list: any[] = [];

  constructor(injector: Injector) {
    super(injector, "app-index");
  }

  ngOnInit() {}
}
