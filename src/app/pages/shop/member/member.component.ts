import { Component, OnInit, HostBinding } from "@angular/core";
import { Iwe7UrlService } from "iwe7-url";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-member",
  templateUrl: "./member.component.html",
  styleUrls: ["./member.component.scss"]
})
export class MemberComponent implements OnInit {
  list: any[] = [];
  @HostBinding("style.height.px") height: number = 0;
  constructor(public url: Iwe7UrlService, public http: HttpClient) {}

  ngOnInit() {
    this.height = document.documentElement.clientHeight - 45;
    this.http
      .get(this.url.getOpenUrl("shibida/member/list"))
      .subscribe((res: any) => {
        this.list = res;
        console.log(this.list);
      });
  }
}
