import { LayoutOutletComponent } from 'iwe7-layout';
import { map, tap, filter } from 'rxjs/operators';
import { Iwe7Url2Service } from 'iwe7-url';
import { HttpClient } from '@angular/common/http';
import {
  Component, Injector, ChangeDetectionStrategy,
  ElementRef,
  ViewChild
} from "@angular/core";
import { Iwe7CoreComponent } from 'iwe7-core';
import { Iwe7JssdkService, Iwe7JssdkShareService } from "iwe7-jssdk";
import { ViewportRuler } from '@angular/cdk/scrolling';
import { fromEvent } from 'rxjs';
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
  @ViewChild(LayoutOutletComponent) layout: LayoutOutletComponent;
  constructor(
    injector: Injector,
    public ele: ElementRef,
    public iwe7Jssdk: Iwe7JssdkService,
    public http: HttpClient,
    public url: Iwe7Url2Service,
    public share: Iwe7JssdkShareService,
    public view: ViewportRuler
  ) {
    super(injector);
    this.getCyc('ngAfterViewInit').subscribe(res => {
      this.layout.showFooter();
    });
    window.onscroll = (res) => {
      const rect = this.view.getViewportRect();
      const height = rect.height;// 639
      const top = rect.top;// 33
      const bottom = rect.bottom; // 672
    };

    function* showWords() {
      yield 'one';
      yield 'two';
      return 'three';
    }

    const show = showWords();
  }

  @ViewChild('ele') ele1: ElementRef;

  onClick(e: any) {
    console.log(e);
  }
  title: string = '';
  openKeyboardEmoji(e: string) {
    this.title += e;
  }

  openKeyboardNumber(e: string) {
    console.log(e);
    this.title += '' + e;
  }

  ngAfterViewInit() {
    const url = this.url.getOpenUrl('getWxConfig');
    this.http.get(url).pipe(
      filter((res: any) => res.code === 0),
      map((res: any) => res.data),
      tap(cfg => {
        this.share.setConfig(cfg.shareconfig);
        this.iwe7Jssdk.setConfig(cfg.jssdkconfig);
        // this.iwe7Jssdk.load();
        this.share.share();
      }),
    ).subscribe();
    super.ngAfterViewInit();
  }

  onSwiper(e: any) {
    console.log(e);
  }

  scroll(e: any) {
    // console.log(e);
  }
}
