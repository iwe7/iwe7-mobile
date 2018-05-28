import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "demo-name",
  templateUrl: "./demo-name.html",
  host: {
    [`[class.demoName]`]: "true"
  },
  styleUrls: ["./demo-name.scss"],
  encapsulation: ViewEncapsulation.None
})
export class DemoNameComponent {}
