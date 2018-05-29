import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-flex-page",
  templateUrl: "./flex.html",
  host: {
    [`[class.demo]`]: "true"
  },
  styleUrls: ["./flex.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AppFlexPageComponent {}
