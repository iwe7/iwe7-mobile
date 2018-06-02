import { Component, OnInit } from '@angular/core';
import { Subject, of, fromEvent } from 'rxjs';
import { switchMap, map, filter } from 'rxjs/operators';
@Component({
  selector: 'jd-tip',
  templateUrl: './jd-tip.html',
  styleUrls: ['./jd-tip.scss']
})

export class JdTipComponent implements OnInit {
  top: string = '0px';
  constructor() { }

  ngOnInit() {
    fromEvent(document, 'scroll').pipe(
      switchMap(res => {
        const top = document.documentElement.scrollTop;
        return of(top);
      }),
    ).subscribe((top: number) => {
      this.top = -top + 'px';
    });
  }
}
