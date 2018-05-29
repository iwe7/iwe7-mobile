import {
  Component,
  OnInit,
  Input,
  HostBinding,
  OnChanges,
  SimpleChanges,
  ContentChild,
  TemplateRef,
  ViewChild,
  Injector
} from "@angular/core";
import { BaseWithIcss } from "iwe7-base";

@Component({
  selector: "am-grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.scss"]
})
export class AmGridComponent extends BaseWithIcss implements OnInit, OnChanges {
  list: any[] = [];

  @Input() data: any[] = [];
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
  hasLine: boolean;

  @ViewChild("tpl", { read: TemplateRef })
  iconTpl: TemplateRef<any>;

  @ContentChild("icon", { read: TemplateRef })
  set tpl(val: TemplateRef<any>) {
    if (val) {
      this.iconTpl = val;
    }
  }


  constructor(injector: Injector) {
    super(injector);
    this.setStyleInputs([]);
  }

  ngOnInit() {
    this.handelerData();
    super.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
    if ("data" in changes) {
      if (!changes.data.isFirstChange) {
        this.handelerData();
      }
    }
    if ("columnNum" in changes) {
      if (!changes.columnNum.isFirstChange) {
        this.handelerData();
      }
    }
  }

  private handelerData() {
    const dataLength = this.data.length;
    const rowCount = Math.ceil(dataLength / this.columnNum);
    const rowsArr = [];
    for (let i = 0; i < rowCount; i++) {
      const rowArr: any[] = [];
      for (let j = 0; j < this.columnNum; j++) {
        const dataIndex = i * this.columnNum + j;
        rowArr.push(this.data[dataIndex]);
      }
      rowsArr.push(rowArr);
    }
    this.list = rowsArr;
  }
}
