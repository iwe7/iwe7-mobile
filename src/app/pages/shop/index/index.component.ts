import { BaseWithTitle } from 'iwe7-base';
import { Component, OnInit, Injector } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent extends BaseWithTitle {
  constructor(injector: Injector) {
    super(injector, '');
  }
}
