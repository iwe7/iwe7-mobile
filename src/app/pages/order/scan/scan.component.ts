import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Iwe7UrlService } from "iwe7-url";

@Component({
  selector: "app-scan",
  templateUrl: "./scan.component.html",
  styleUrls: ["./scan.component.scss"]
})
export class ScanComponent implements OnInit {
  current: number = 0;
  constructor(public http: HttpClient, public url: Iwe7UrlService) {}

  scan() {}

  ngOnInit() {}

  next() {
    this.current = this.current + 1;
  }
  finish() {}

  onload(e: any) {
    this.http
      .post(this.url.getWebOpen("shibida/car/getCarByImage"), {
        file: e
      })
      .subscribe(res => {
        console.log(res);
      });
  }
}
