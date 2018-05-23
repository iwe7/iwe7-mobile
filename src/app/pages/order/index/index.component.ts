import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent implements OnInit {
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


  constructor() {}

  ngOnInit() {}
}
