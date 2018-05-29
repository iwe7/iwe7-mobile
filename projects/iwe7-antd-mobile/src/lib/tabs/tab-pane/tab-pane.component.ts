import {
  Component,
  OnInit,
  Input,
  HostBinding,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewChild
} from "@angular/core";
import { getTransformPropValue, getPxStyle } from "../util";
@Component({
  selector: "tab-pane",
  templateUrl: "./tab-pane.component.html",
  styleUrls: ["./tab-pane.component.css"]
})
export class TabPaneComponent implements OnInit, OnChanges {
  @Input() isVertical: boolean = true;
  @Input() active: boolean = false;

  @HostBinding("class.am-tabs-pane-wrap") _wrap: boolean = true;
  @HostBinding("class.am-tabs-pane-wrap-inactive")
  get wrapInactive() {
    return !this.active;
  }
  @HostBinding("class.am-tabs-pane-wrap-active")
  get wrapActive() {
    return this.active;
  }

  @Input() activeTab: number = 0;

  @Input() pane: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {}
}
