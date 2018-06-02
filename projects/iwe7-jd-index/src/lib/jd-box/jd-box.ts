import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'jd-box',
  templateUrl: 'jd-box.html',
  styleUrls: ['./jd-box.scss']
})

export class JdBoxComponent implements OnInit, AfterViewInit {
  width: string;
  constructor(public ele: ElementRef) { }

  ngOnInit() { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.width = this.ele.nativeElement.clientWidth + 'px';
    }, 0);
  }
}
