import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
    selector: 'page',
    templateUrl: 'page.html'
})
export class PageComponent implements OnInit {
    constructor(public ele: ElementRef) { 
        
    }
    ngOnInit() { }
}
