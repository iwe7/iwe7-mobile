import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-scan",
  templateUrl: "./scan.component.html",
  styleUrls: ["./scan.component.scss"]
})
export class ScanComponent implements OnInit {
  current: number = 0;
  constructor() {}

  scan() {}

  ngOnInit() {}

  next() {
    this.current = this.current + 1;
  }
  finish() {}
}
