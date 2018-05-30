import { Iwe7IcssService } from 'iwe7-icss';
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'jd-item',
  templateUrl: 'jd-item.html',
  styleUrls: ['./jd-item.scss'],
  providers: [Iwe7IcssService]
})

export class JdItemComponent implements OnInit {
  width: string;
  constructor(
    public ele: ElementRef
  ) { }

  ngOnInit() {
    this.width = this.ele.nativeElement.clientWidth + 'px';
    console.log(this.width);
  }
}
