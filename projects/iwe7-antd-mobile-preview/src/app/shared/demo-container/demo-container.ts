import { Component, ViewEncapsulation, Input } from "@angular/core";

@Component({
  selector: "app-demo-container",
  templateUrl: "./demo-container.html",
  host: {
    [`[class.demo]`]: "true"
  },
  styleUrls: ["./demo-container.scss"],
  encapsulation: ViewEncapsulation.None
})
export class DemoContainerComponent {
  @Input() title: string;
}
