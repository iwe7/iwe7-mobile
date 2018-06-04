import { Iwe7DomService } from './../../projects/iwe7-core/src/lib/iwe7-dom.service';
import { Iwe7AdvsPopupComponent } from './../../projects/iwe7-advs/src/lib/iwe7-advs-popup/iwe7-advs-popup';
import { Iwe7AdvsService } from './../../projects/iwe7-advs/src/lib/iwe7-advs.service';
import {
  Component, OnInit, Injector, AfterViewInit,
  ViewContainerRef, TemplateRef, ViewChild,
  ChangeDetectorRef, ElementRef
} from "@angular/core";
import { Iwe7CoreComponent } from 'iwe7-core';
declare const BMap: any;
import { Dialog } from 'iwe7-dialog';

import { MatDialog } from '@angular/material';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent extends Iwe7CoreComponent {

  list: any[] = [];

  dialog: MatDialog;
  zoom: number = 17;
  lat: number = 39.915;
  lng: number = 110.604;

  showOverlay: boolean = true;
  height: number = 0;

  point = {
    lat: 110.604,
    lng: 39.915
  };

  index: number = 0;

  @ViewChild('tpl', { read: TemplateRef }) tpl: TemplateRef<any>;
  constructor(public injector: Injector,
    public view: ViewContainerRef,
    public cd: ChangeDetectorRef,
    public ele: ElementRef
  ) {
    super(injector);
    this.dialog = this.injector.get(MatDialog);
    // this.getCyc('ngAfterViewInit').subscribe(res => {
    //   const dialogRef = this.dialog.open(this.tpl);
    // });
  }
  ngOnInit() {
    super.ngOnInit();
    this.height = this.ele.nativeElement.clientHeight;
    document.body.addEventListener("touchstart", function () { });
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

  geolocation(e: any) {
    console.log(e);
  }
}
