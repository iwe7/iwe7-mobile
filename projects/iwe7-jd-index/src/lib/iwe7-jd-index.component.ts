import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
@Component({
  selector: 'iwe7-jd-index',
  templateUrl: './iwe7-jd-index.component.html',
  styleUrls: ['./iwe7-jd-index.component.scss']
})
export class Iwe7JdIndexComponent implements OnInit {
  searchForm: FormGroup;

  @Input() header: any = {
    height: '52px',
    heightView: '30px'
  };

  @Input() searchUrl: string;
  @Input() leftUrl: string;
  @Input() rightUrl: string;

  constructor(public fb: FormBuilder, public http: HttpClient, public router: Router) {
    this.searchForm = this.fb.group({
      key: ['']
    });
    this.searchForm.valueChanges.subscribe(res => {
      this.onSearch();
    });
  }

  ngOnInit() {
  }

  onSearch() {
    if (this.searchUrl) {
      this.http.get(this.searchUrl, { params: this.searchForm.value }).subscribe(res => {
        console.log(res);
      });
    }
  }

  leftStream(e: any) {
    if (this.leftUrl) {
      this.router.navigateByUrl(this.leftUrl);
    }
  }
  rightStream(e: any) {
    if (this.rightUrl) {
      this.router.navigateByUrl(this.rightUrl);
    }
  }

}
