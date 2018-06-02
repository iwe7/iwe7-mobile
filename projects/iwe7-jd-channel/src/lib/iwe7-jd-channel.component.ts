import { Component, OnInit, Input, ContentChild, TemplateRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'iwe7-jd-channel',
  templateUrl: './iwe7-jd-channel.component.html',
  styleUrls: ['./iwe7-jd-channel.component.scss']
})
export class Iwe7JdChannelComponent implements OnInit, AfterViewInit {

  @Input() list: any[] = [{
    title: '热门推荐'
  }];

  currentIndex: number = 0;
  activeTab: any;
  scroll: any;
  contentScroll: any;

  @ContentChild(TemplateRef) tpl: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
    this.activeTab = this.list[0];
  }

  onItem(e, item, index) {
    console.log('click');
    this.activeTab = item;
    this.currentIndex = index;
    this.scroll.scrollToElement(e.target, 100);
  }

  createScroll(e: any) {
    this.scroll = e;
  }

  ngAfterViewInit() {
    
  }
}
