import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-button-page",
  templateUrl: "./button.html",
  host: {
    [`[class.demo]`]: "true"
  },
  styleUrls: ["./button.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AppButtonPageComponent {}
