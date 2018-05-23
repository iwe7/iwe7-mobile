import { Component, OnInit, Input, HostBinding } from "@angular/core";

@Component({
  selector: "grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.css"]
})
export class GridComponent implements OnInit {
  list: any[] = [];

  @Input()
  set data(val: any[]) {
    const dataLength = val.length;
    const rowCount = Math.ceil(dataLength / this.columnNum);
    const rowsArr = [];
    for (let i = 0; i < rowCount; i++) {
      const rowArr: any[] = [];
      for (let j = 0; j < this.columnNum; j++) {
        const dataIndex = i * this.columnNum + j;
        rowArr.push(val[dataIndex]);
      }
      rowsArr.push(rowArr);
    }
    this.list = rowsArr;
  }
  @Input() columnNum: number = 4;
  @Input() isCarousel: boolean = false;
  @Input() carouselMaxRow: number = 2;

  @Input() activeStyle: any;
  @Input() activeClassName: string;
  @Input() itemStyle: any;

  @HostBinding("class.am-grid") _grid: boolean = true;

  @HostBinding("class.am-grid-square")
  @Input()
  square: boolean = true;

  @HostBinding("class.not-square-grid")
  get notSquareGrid() {
    return !this.square;
  }

  @HostBinding("class.am-grid-line")
  @Input()
  hasLine: boolean = true;
  constructor() {}

  ngOnInit() {}
}
