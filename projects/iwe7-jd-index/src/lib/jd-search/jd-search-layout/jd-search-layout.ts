import { ElementRef, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { Injector, ViewChild } from '@angular/core';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseWithOnDestroy } from 'iwe7-base';
import { onTap } from 'iwe7-util';
import { switchMap, map, filter } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'jd-search-layout',
  templateUrl: 'jd-search-layout.html',
  styleUrls: ['./jd-search-layout.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class JdSearchLayoutComponent extends BaseWithOnDestroy implements OnInit, AfterViewInit {

  @ViewChild('left') left: ElementRef;
  @ViewChild('right') right: ElementRef;

  @Output() leftStream: EventEmitter<any> = new EventEmitter();
  @Output() rightStream: EventEmitter<any> = new EventEmitter();

  opacity: number = 0;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() { }

  ngAfterViewInit() {
    onTap(this.left.nativeElement).subscribe(res => {
      this.leftStream.emit(res);
    });
    onTap(this.right.nativeElement).subscribe(res => {
      this.rightStream.emit(res);
    });
    setTimeout(() => {
      this.listen(document, 'scroll').pipe(
        switchMap(res => {
          const top = document.documentElement.scrollTop;
          return of(top);
        }),
        filter(top => top < 280),
      ).subscribe((top: number) => {
        this.opacity = Math.min(top / 200, 1);
      });
    }, 0);
  }
}
