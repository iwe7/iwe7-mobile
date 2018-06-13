import { Injector } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';
import { KeyboardStringComponent } from './../keyboard-string/keyboard-string';
import { Component } from '@angular/core';

@Component({
    selector: 'keyboard-province',
    templateUrl: 'keyboard-province.html',
    styleUrls: ['./keyboard-province.scss']
})
export class KeyboardProvinceComponent extends KeyboardStringComponent {
    list: any[] = [
        ["京", "沪", "浙", "苏", "粤", "鲁", "晋", "冀", "川", "渝"],
        ["辽", "吉", "黑", "皖", "鄂", "津", "贵", "云", "桂", "琼"],
        ["青", "新", "藏", "蒙", "宁", "甘", "陕", "闽", "赣", "湘"]
    ];
    constructor(
        ele: ElementRef,
        render: Renderer2,
        injector: Injector
    ) {
        super(ele, render, injector);
    }
}
