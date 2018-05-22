import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ViewEncapsulation,
  HostListener,
  EventEmitter,
  Output
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "tab-bar-item",
  templateUrl: "./tab-bar-item.component.html",
  styleUrls: ["./tab-bar-item.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class TabBarItemComponent implements OnInit {
  @Input() item: any = {};
  @HostBinding("class.am-tab-bar-tab") _tab: boolean = true;
  @Output() click: EventEmitter<any> = new EventEmitter();
  constructor(public ds: DomSanitizer) {}
  ngOnInit() {}
}
