import { ElementRef, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { Injector, ViewChild } from '@angular/core';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseWithOnDestroy } from 'iwe7-base';
import { onTap } from 'iwe7-util';
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
  }
}
