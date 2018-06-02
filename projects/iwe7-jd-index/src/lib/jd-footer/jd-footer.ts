import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'jd-footer',
  templateUrl: 'jd-footer.html',
  styleUrls: ['./jd-footer.scss']
})

export class JdFooterComponent implements OnInit {
  width: number = 0;
  constructor(public ele: ElementRef) { }

  ngOnInit() {
    this.width = this.ele.nativeElement.clientWidth;
  }
}
