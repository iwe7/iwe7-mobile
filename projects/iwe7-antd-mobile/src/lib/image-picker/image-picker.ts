import { Component, OnInit, Input, Injector, ViewEncapsulation } from "@angular/core";
import { Iwe7BaseComponent } from "iwe7-base";
import * as _ from "lodash";
@Component({
  selector: "am-image-picker",
  templateUrl: "image-picker.html",
  styleUrls: ["./image-picker.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AmImagePickerComponent extends Iwe7BaseComponent
  implements OnInit {
  @Input() count: number = 4;
  @Input() limit: number = 1;
  @Input() multi: boolean = false;
  @Input() images: string[] = [];

  hasFull: boolean = false;
  list: any[] = [];
  constructor(injector: Injector) {
    super(injector, "am-image-picker");
  }
  ngOnInit() {
    this.updateList();
  }

  onReLoad(i: number, j: number, e: any) {
    const index = i * 4 + j;
    this.images.splice(index, 1, e);
    this.checkFull();
    this.updateList();
  }

  onLoad(e: any) {
    this.images.push(e);
    this.checkFull();
    this.updateList();
  }

  checkFull() {
    if (this.images.length >= this.limit) {
      this.images.splice(this.limit, this.images.length - 1 - this.limit);
      this.hasFull = true;
    } else {
      this.hasFull = false;
    }
  }

  private updateList() {
    const list = [];
    this.images.map(img => {
      list.push({
        type: "image",
        src: img
      });
    });
    list.push({
      type: "upload",
      src: false
    });
    const len = list.length % 4;
    if (len > 0) {
      for (let key = 0; key < this.count - len; key++) {
        list.push({
          type: "empty",
          src: false
        });
      }
    }
    this.list = _.chunk(list, 4);
  }

  removeImage(i: number, j: number) {
    const index = i * 4 + j;
    this.images.splice(index, 1);
    this.checkFull();
    this.updateList();
  }
}
