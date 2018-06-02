import { Subscription, fromEvent } from 'rxjs';
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'jd-to-top',
  templateUrl: './jd-to-top.html',
  styleUrls: ['./jd-to-top.scss']
})

export class JdToTopComponent implements OnInit {
  constructor(
    public ele: ElementRef
  ) { }

  ngOnInit() {
    fromEvent(this.ele.nativeElement, 'click').subscribe(res => {
      document.documentElement.scrollTop = 0;
    });
  }
}
