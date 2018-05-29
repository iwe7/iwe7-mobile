import { Component, ViewEncapsulation, Input } from "@angular/core";

@Component({
  selector: "app-placeholder",
  templateUrl: "./placeholder.html",
  host: {
    [`[class.placeholder]`]: "true"
  },
  styleUrls: ["./placeholder.scss"],
  encapsulation: ViewEncapsulation.None
})
export class PlaceholderComponent {}
