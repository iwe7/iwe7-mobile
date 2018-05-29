import {
  Component,
  OnInit,
  Injector,
  HostBinding,
  Input,
  ElementRef,
  ViewChild
} from "@angular/core";
import { Iwe7BaseComponent } from "iwe7-base";
@Component({
  selector: "am-search",
  templateUrl: "search.html",
  styleUrls: ["./search.scss"]
})
export class AmSearchComponent extends Iwe7BaseComponent implements OnInit {
  _start: boolean = true;
  @Input() clear: boolean = true;
  @Input() cancel: boolean = true;
  @Input() placeholder: string = "搜索";
  @ViewChild("ph") ph: ElementRef;
  @HostBinding("class.am-search-start")
  get start() {
    return this._start;
  }
  constructor(injector: Injector) {
    super(injector, "am-search");
  }

  ngOnInit() {
    this._cancel();
  }

  _cancel() {
    this._start = false;
    this.render.setStyle(this.ph.nativeElement, "width", `100%`);
    this.styleObj = {
      [`ph-justify`]: "center"
    };
  }

  onFocus(e: any) {
    this._start = true;
    this.render.setStyle(this.ph.nativeElement, "width", `69px`);
    this.styleObj = {
      [`ph-justify`]: "flex-start"
    };
  }
}
