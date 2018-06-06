import { Injector } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BaseWithIcss } from 'iwe7-base';
import { Subject, of, fromEvent } from 'rxjs';
import { switchMap, map, filter } from 'rxjs/operators';

@Component({
  selector: 'iwe7-jd-index',
  templateUrl: './iwe7-jd-index.component.html',
  styleUrls: ['./iwe7-jd-index.component.scss']
})
export class Iwe7JdIndexComponent extends BaseWithIcss implements OnInit {
  searchForm: FormGroup;
  key: string;
  @Input() header: any = {
    height: '45px',
    heightView: '30px'
  };

  @Input() searchUrl: string;
  @Input() leftUrl: string;
  @Input() rightUrl: string;
  top: string;

  constructor(public fb: FormBuilder, public http: HttpClient, public router: Router, injector: Injector) {
    super(injector);
    this.searchForm = this.fb.group({
      key: ['']
    });
    this.searchForm.valueChanges.subscribe(res => {
      this.onSearch();
    });
  }

  ngOnInit() {
    fromEvent(document, 'scroll').pipe(
      switchMap(res => {
        const top = document.documentElement.scrollTop;
        return of(top);
      }),
    ).subscribe((top: number) => {
      if (top < 45) {
        this.top = Math.abs((45 - top)) + 'px';
      } else {
        this.top = '0px';
      }
    });
  }

  onSearch() {
    if (this.searchUrl) {
      this.http.get(this.searchUrl, { params: this.searchForm.value }).subscribe(res => {
        console.log(res);
      });
    }
  }

  leftStream(e: any) {
    console.log(e);
    if (this.leftUrl) {
      this.router.navigateByUrl(this.leftUrl);
    }
  }
  rightStream(e: any) {
    console.log(e);
    if (this.rightUrl) {
      this.router.navigateByUrl(this.rightUrl);
    }
  }

  focusSearch(e: any) {
    console.log(e);
  }
}
