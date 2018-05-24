import { Component, OnInit, Injector, OnDestroy } from "@angular/core";
import { Location } from "@angular/common";
import { Subject } from "rxjs";
import {
  map,
  tap,
  filter,
  switchMap,
  debounceTime,
  takeUntil
} from "rxjs/operators";
import { BaseWithTitle } from "iwe7-base";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent extends BaseWithTitle
  implements OnInit, OnDestroy {
  public location: Location;
  constructor(injector: Injector) {
    super(injector, "");
    this.location = this.injector.get(Location);
  }
  ngOnInit() {}

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  back() {
    this.location.back();
  }
}
