import {
  Component,
  OnInit,
  HostBinding,
  Input,
  EventEmitter,
  Output
} from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
export interface TabBarInterface {
  text: string;
  iconPath: string;
  selectedIconPath: string;
  pagePath: string;
}
@Component({
  selector: "tab-bar",
  templateUrl: "./tab-bar.component.html",
  styleUrls: ["./tab-bar.component.css"]
})
export class AmTabBarComponent implements OnInit {
  @HostBinding("class.am-tab-bar") amTabBar: boolean = true;

  @Input() tabs: any[] = [];
  @Input() selectIndex: number = 0;

  @Output() onItem: EventEmitter<any> = new EventEmitter();

  activeUrl: string;
  constructor() {}

  ngOnInit() {}

  handleItem(index: number) {
    this.selectIndex = index;
    this.onItem.emit(this.tabs[this.selectIndex]);
  }
}
