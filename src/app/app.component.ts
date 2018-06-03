import { Iwe7DomService } from './../../projects/iwe7-core/src/lib/iwe7-dom.service';
import { Iwe7AdvsPopupComponent } from './../../projects/iwe7-advs/src/lib/iwe7-advs-popup/iwe7-advs-popup';
import { Iwe7AdvsService } from './../../projects/iwe7-advs/src/lib/iwe7-advs.service';
import {
  Component, OnInit, Injector, AfterViewInit,
  ViewContainerRef, TemplateRef, ViewChild,
  ChangeDetectorRef, ElementRef
} from "@angular/core";
declare const BMap: any;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, AfterViewInit {

  list: any[] = [];

  iwe7AdvsService: Iwe7DomService;
  zoom: number = 10;
  lat: number = 110.604;
  lng: number = 39.915;

  showOverlay: boolean = true;
  height: number = 0;
  point = {
    lat: 110.604,
    lng: 39.915
  };

  index: number = 0;
  constructor(public injector: Injector, public view: ViewContainerRef, public cd: ChangeDetectorRef, public ele: ElementRef) {
    this.iwe7AdvsService = this.injector.get(Iwe7DomService);
  }
  ngOnInit() {
    this.height = this.ele.nativeElement.clientHeight;
    document.body.addEventListener("touchstart", function () { });
  }
  ngAfterViewInit() {
    setInterval(() => {
      // this.zoom++;
      this.index++;
    }, 1000);
  }
  center: any;
  mapMoveend(e: any) {
    setTimeout(() => {
      const map = e.target;
      this.center = map.getCenter();
    }, 0);
  }

  geolocationControl(e: any) {
    console.log(e);
  }
}
