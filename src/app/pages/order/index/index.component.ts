import { Component, OnInit, Injector } from "@angular/core";
import { Iwe7PageList } from "iwe7-base";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent extends Iwe7PageList implements OnInit {
  action: string = 'shibida/order/list';
  tabs: any[] = [
    {
      title: "待处理",
      dot: true,
      status: 0
    },
    {
      title: "进行中",
      dot: true,
      status: 1
    },
    {
      title: "已完成",
      status: 2
    },
    {
      title: "全部",
      status: -1
    }
  ];

  list: any[] = [];

  constructor(injector: Injector) {
    super(injector, "app-index");
  }

  ngOnInit() {
    this._tabClick(this.tabs[0]);
  }

  _tabClick(e: any) {
    this.params["status"] = e.status;
    this.load().subscribe(res => {
      console.log(res);
    });
  }
}
