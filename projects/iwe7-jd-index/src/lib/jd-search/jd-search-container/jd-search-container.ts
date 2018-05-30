import { Component, Injector, OnInit, ElementRef, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { onTouchStart } from 'iwe7-util';
import { merge, Subject } from 'rxjs';
import { map, tap, takeUntil } from 'rxjs/operators';
import { BaseWithOnDestroy } from 'iwe7-base';
@Component({
  selector: 'jd-search-container',
  templateUrl: 'jd-search-container.html',
  styleUrls: ['./jd-search-container.scss']
})

export class JdSearchContainerComponent extends BaseWithOnDestroy implements AfterViewInit {
  @ViewChild('loginIcon') loginIcon: ElementRef;
  @ViewChild('searchIcon') searchIcon: ElementRef;
  container: ElementRef;


  @Output() loginIconStream: EventEmitter<any> = new EventEmitter();
  @Output() searchIconStream: EventEmitter<any> = new EventEmitter();
  @Output() containerStream: EventEmitter<any> = new EventEmitter();
  constructor(injector: Injector) {
    super(injector);
    this.container = this.injector.get(ElementRef);
  }

  ngAfterViewInit() {
    this.bindEvent();
  }

  private bindEvent() {
    merge(
      onTouchStart(this.container.nativeElement).pipe(
        tap((res: TouchEvent) => this.stopPropagation(res)),
        takeUntil(this.destroyed$),
        tap(res => this.containerStream.emit(res))
      ),
      onTouchStart(this.loginIcon.nativeElement).pipe(
        tap((res: TouchEvent) => this.stopPropagation(res)),
        takeUntil(this.destroyed$),
        tap(res => this.containerStream.emit(res)),
        tap(res => this.loginIconStream.emit(res))
      ), onTouchStart(this.searchIcon.nativeElement).pipe(
        tap((res: TouchEvent) => this.stopPropagation(res)),
        takeUntil(this.destroyed$),
        tap(res => this.containerStream.emit(res)),
        tap(res => this.searchIconStream.emit(res))
      )).subscribe();
  }

  private stopPropagation(res: TouchEvent) {
    res.stopPropagation();
    res.preventDefault();
  }
}
