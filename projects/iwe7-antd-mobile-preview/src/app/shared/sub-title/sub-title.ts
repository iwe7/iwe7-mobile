import { Component, ViewEncapsulation, Input } from "@angular/core";

@Component({
  selector: "app-sub-title",
  templateUrl: "./sub-title.html",
  host: {
    [`[class.sub-title]`]: "true"
  },
  styleUrls: ["./sub-title.scss"],
  encapsulation: ViewEncapsulation.None
})
export class SubTitleComponent {}
