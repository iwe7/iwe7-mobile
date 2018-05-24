import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent implements OnInit {
  title: string = "消息";
  constructor(public router: Router) {}

  ngOnInit() {}

  back() {
    this.router.navigate(["/header/message/notice"]);
  }
}
