import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent implements OnInit {
  title: string = "服务管理";
  constructor(public router: Router) {}

  ngOnInit() {}

  add() {
    this.router.navigate(["/header/service/add"]);
  }

  back() {}
}