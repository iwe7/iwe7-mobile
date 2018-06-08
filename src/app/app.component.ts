import {
  Component, Injector, ChangeDetectionStrategy,
  ElementRef,
  ViewChild
} from "@angular/core";
import { Iwe7CoreComponent } from 'iwe7-core';
import { EventManager } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.cdkScrollable]': 'true'
  }
})
export class AppComponent extends Iwe7CoreComponent {

  constructor(injector: Injector,
    public ele: ElementRef,
    public eventManager: EventManager
  ) {
    super(injector);
    console.log(this.eventManager);
  }

  @ViewChild('ele') ele1: ElementRef;

  onClick(e: any) {
    console.log(e);
  }

  onSwiper(e: any) {
    console.log(e);
  }

  scroll(e: any) {
    // console.log(e);
  }
}
