import { HostBinding } from '@angular/core';
import { Iwe7IcssService } from 'iwe7-icss';
import { Component, OnInit, ElementRef, Input, AfterViewInit } from '@angular/core';
@Component({
  selector: 'jd-item',
  templateUrl: 'jd-item.html',
  styleUrls: ['./jd-item.scss'],
  providers: [Iwe7IcssService]
})

export class JdItemComponent implements OnInit, AfterViewInit {
  width: string;
  @HostBinding('style.margin')
  get margin() {
    return this.title && this.desc ? null : '0px';
  }
  @Input() square: boolean = true;
  @Input() title: string;
  @Input() desc: string;
  @Input() image: string = 'https://m.360buyimg.com/n1/s134x134_jfs/t2080/152/1606361808/82278/215658f9/5670cc76Ne7794e6f.jpg!q70.jpg.dpg.webp';
  constructor(
    public ele: ElementRef
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.width = this.ele.nativeElement.clientWidth + 'px';
    }, 0);
  }
}
