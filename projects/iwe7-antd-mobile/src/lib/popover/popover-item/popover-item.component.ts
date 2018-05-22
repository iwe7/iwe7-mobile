import { Component, OnInit, HostBinding, Input } from "@angular/core";

@Component({
  selector: "popover-item",
  templateUrl: "./popover-item.component.html",
  styleUrls: ["./popover-item.component.css"]
})
export class PopoverItemComponent implements OnInit {
  @HostBinding("class.am-popover-item") amPopoverItem: boolean = true;

  @Input() icon: string;
  @Input() title: string;
  constructor() {}

  ngOnInit() {}
}
