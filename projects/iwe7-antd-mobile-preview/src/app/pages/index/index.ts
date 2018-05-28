import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-index-page",
  templateUrl: "./index.html",
  host: {
    [`[class.demo]`]: "true"
  },
  styleUrls: ["./index.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AppIndexPageComponent {}
