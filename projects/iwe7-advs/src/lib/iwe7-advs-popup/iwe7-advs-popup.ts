import { Injector } from '@angular/core';
import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';

@Component({
    selector: 'iwe7-advs-popup',
    templateUrl: './iwe7-advs-popup.html',
    styleUrls: ['./iwe7-advs-popup.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Iwe7AdvsPopupComponent implements AfterViewInit {
    constructor(injector: Injector) {
    }
    ngAfterViewInit() {
        console.log(this);
    }
}
