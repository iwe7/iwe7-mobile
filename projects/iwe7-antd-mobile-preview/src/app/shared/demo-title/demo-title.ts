import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "demo-title",
  templateUrl: "./demo-title.html",
  host: {
    [`[class.demoTitle]`]: "true"
  },
  styleUrls: ["./demo-title.scss"],
  encapsulation: ViewEncapsulation.None
})
export class DemoTitleComponent {}
