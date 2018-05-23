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
import { Iwe7TitleService } from "../../../../projects/iwe7-router/src/public_api";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  public location: Location;
  title: Iwe7TitleService;
  destroyed: Subject<any> = new Subject();
  constructor(public inejctor: Injector) {
    this.title = this.inejctor.get(Iwe7TitleService);
    this.title
      .listener()
      .pipe(takeUntil(this.destroyed))
      .subscribe();
    this.location = this.inejctor.get(Location);
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  back() {
    this.location.back();
  }
}
