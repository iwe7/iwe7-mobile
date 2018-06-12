import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'car-plate',
    templateUrl: 'car-plate.html',
    styleUrls: ['./car-plate.scss']
})

export class CarPlateComponent implements OnInit {
    provinces = ["京", "沪", "浙", "苏", "粤", "鲁", "晋", "冀",
        "豫", "川", "渝", "辽", "吉", "黑", "皖", "鄂",
        "津", "贵", "云", "桂", "琼", "青", "新", "藏",
        "蒙", "宁", "甘", "陕", "闽", "赣", "湘"];
    key0: string;
    key1: string;
    key2: string;
    key3: string;
    key4: string;
    key5: string;
    key6: string;

    constructor() { }

    ngOnInit() { }

    inputProvince(item: string) {
        this.key0 = item;
    }
}
