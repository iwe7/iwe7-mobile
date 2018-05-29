import { Component, OnInit, Injector, OnDestroy } from "@angular/core";
import { Location } from "@angular/common";
import { BaseWithTitle } from "iwe7-base";
@Component({
  selector: "router-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent extends BaseWithTitle {
  constructor(injector: Injector) {
    super(injector, "");
  }
}
