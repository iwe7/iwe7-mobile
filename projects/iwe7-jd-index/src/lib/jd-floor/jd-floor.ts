import { Component, OnInit, ViewEncapsulation, TemplateRef, ContentChild } from '@angular/core';

@Component({
  selector: 'jd-floor',
  templateUrl: 'jd-floor.html',
  styleUrls: ['./jd-floor.scss'],
  encapsulation: ViewEncapsulation.None
})

export class JdFloorComponent implements OnInit {
  @ContentChild('title', {
    read: TemplateRef
  }) title: TemplateRef<any>;
  constructor() { }

  ngOnInit() { }
}
