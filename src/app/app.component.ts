import {
  Component, OnInit, Injector, AfterViewInit,
  ViewContainerRef, TemplateRef, ViewChild,
  ChangeDetectorRef, ElementRef, ChangeDetectionStrategy
} from "@angular/core";
import { Iwe7CoreComponent } from 'iwe7-core';
declare const BMap: any;
import { Dialog } from 'iwe7-dialog';

import { MatDialog } from '@angular/material';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent extends Iwe7CoreComponent {

  list: any[] = [{
    image: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000004ckGfg3zaho0.jpg'
  }, {
    image: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000004ckGfg3zaho0.jpg'
  }];

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

  @ViewChild('tplX', { read: TemplateRef }) tplX: TemplateRef<any>;
  @ViewChild('tplY', { read: TemplateRef }) tplY: TemplateRef<any>;

  navLinks: any[] = [{
    label: 'label1',
    path: '/page1',
    isActive: true
  }, {
    label: 'label2',
    path: '/page2',
    isActive: true
  }, {
    label: 'label3',
    path: '/page3',
    isActive: true
  }, {
    label: 'label4',
    path: '/page4',
    isActive: true
  }, {
    label: 'label5',
    path: '/page5',
    isActive: true
  }, {
    label: 'label6',
    path: '/page6',
    isActive: true
  }, {
    label: 'label7',
    path: '/page7',
    isActive: true
  }, {
    label: 'label8',
    path: '/page8',
    isActive: true
  }];

  constructor(public injector: Injector,
    public view: ViewContainerRef,
    public cd: ChangeDetectorRef,
    public ele: ElementRef
  ) {
    super(injector);
    this.dialog = this.injector.get(MatDialog);
    this.runOutsideAngular(() => {
      this.getCyc('ngOnInit').subscribe(res => {
        this.height = this.ele.nativeElement.clientHeight;
        document.body.addEventListener("touchstart", function () { });
        this.run(() => {
          setTimeout(() => {
            this.list = [
              ...this.list,
              {
                image: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000004ckGfg3zaho0.jpg'
              }
            ];
            this._cd.markForCheck();
          }, 1000);
        });
      });
    });
  }

  showDialogX() {
    this.getCyc('ngAfterViewInit').subscribe(res => {
      const dialogRef = this.dialog.open(this.tplX);
    });
  }
  showDialogY() {
    this.getCyc('ngAfterViewInit').subscribe(res => {
      const dialogRef = this.dialog.open(this.tplY);
    });
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
