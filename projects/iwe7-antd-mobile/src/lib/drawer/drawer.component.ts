import { Component, OnInit, HostBinding, Input } from "@angular/core";

@Component({
  selector: "drawer",
  templateUrl: "./drawer.component.html",
  styleUrls: ["./drawer.component.css"]
})
export class DrawerComponent implements OnInit {
  @HostBinding("class.am-drawer") _drawer: boolean = true;
  @HostBinding("class.am-drawer-open")
  @Input()
  open: boolean = false;

  @Input() position: string = "left";

  @HostBinding("class.am-drawer-left")
  get left() {
    return this.position === "left";
  }
  constructor() {}

  ngOnInit() {}
}
