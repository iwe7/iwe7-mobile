import { ElementRef } from '@angular/core';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Subject, of, fromEvent } from 'rxjs';
import { switchMap, map, filter, takeUntil } from 'rxjs/operators';
@Component({
  selector: 'jd-hots',
  templateUrl: 'jd-hots.html',
  styleUrls: ['./jd-hots.scss']
})

export class JdHotsComponent implements OnInit, AfterViewInit {
  width: string;

  loading: boolean = false;
  constructor(
    public ele: ElementRef
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.width = this.ele.nativeElement.clientWidth / 2 - 10 + 'px';
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      fromEvent(document, 'scroll').pipe(
        filter(res => !this.loading),
        switchMap(res => {
          const top = document.documentElement.scrollTop;
          return of(top);
        }),
      ).subscribe((top: number) => {
        const ltop = scrollHeight - top - clientHeight;
        if (ltop < - 40) {
          this.loading = true;
        }
      });
    }, 0);
  }
}
