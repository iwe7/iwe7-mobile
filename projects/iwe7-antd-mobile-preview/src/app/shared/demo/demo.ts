import { Component, ViewEncapsulation, Input } from "@angular/core";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.html",
  host: {
    [`[class.demo]`]: "true"
  },
  styleUrls: ["./demo.scss"],
  encapsulation: ViewEncapsulation.None
})
export class DemoComponent {
  @Input() name: string;
}
