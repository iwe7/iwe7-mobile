import { Component, OnInit } from "@angular/core";
import { AmToastService } from "projects/iwe7-antd-mobile/src/lib/toast/toast.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})
export class AddComponent implements OnInit {
  current: number = 0;

  data: any[] = [
    [{ label: "1-0", value: "10" }, { label: "1-1", value: "11" }],
    [{ label: "2-0", value: "20" }, { label: "2-1", value: "21" }],
    [{ label: "3-0", value: "30" }, { label: "3-1", value: "31" }]
  ];

  value: any = ["10", "21", "31"];
  constructor(public toast: AmToastService) {}

  ngOnInit() {}

  next() {
    this.current = this.current + 1;
  }
  finish() {}
}
