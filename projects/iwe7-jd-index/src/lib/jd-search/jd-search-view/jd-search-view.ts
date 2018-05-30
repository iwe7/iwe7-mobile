import { JdSearchComponent } from './../jd-search';
import { JdSearchContainerComponent } from '../jd-search-container/jd-search-container';
import { Component, OnInit, ViewChild, Input, ElementRef, SkipSelf, Optional, AfterViewInit, Injector, Output, EventEmitter } from '@angular/core';
import { onChange } from 'iwe7-util';
import { BaseWithOnDestroy } from 'iwe7-base';
@Component({
  selector: 'jd-search-view',
  templateUrl: 'jd-search-view.html',
  styleUrls: ['./jd-search-view.scss']
})

export class JdSearchViewComponent extends BaseWithOnDestroy implements AfterViewInit {
  @ViewChild('search') search: ElementRef;

  @Input() placeholder: string;

  @Output() changeStream: EventEmitter<any> = new EventEmitter();
  constructor(
    injector: Injector,
    @Optional()
    @SkipSelf()
    public containerComponent: JdSearchContainerComponent,
    @Optional()
    @SkipSelf()
    public searchComponent: JdSearchComponent
  ) {
    super(injector);
  }

  ngAfterViewInit() {
    if (this.containerComponent) {
      this.containerComponent.containerStream.subscribe((res) => {
        (<HTMLInputElement>this.search.nativeElement).focus();
      });
    }
    this.listen(this.search.nativeElement, 'change').subscribe(res => {
      const target: any = res.target;
      const value = target.value;
      this.changeStream.emit(value);
    });
  }
}
