import {
  Directive,
  Injector,
  HostBinding,
  Input,
  OnInit,
  Output,
  EventEmitter
} from "@angular/core";
import { Iwe7BaseDirective } from "iwe7-base";
import { onChange } from "iwe7-util";
import { takeUntil } from "rxjs/operators";
import { DOCUMENT } from "@angular/common";

@Directive({ selector: "[am-image-picker-item-content]" })
export class AmImagePickerItemContentDirective extends Iwe7BaseDirective
  implements OnInit {
  @Input("am-image-picker-item-content") image: string;

  @Input("image")
  set _img(val: string) {
    this.image = val;
  }
  get _img() {
    return this.image;
  }

  @HostBinding("attr.role") role: string = "button";
  @HostBinding("style.background-image")
  get backgroundImage() {
    return `url(${this.image})`;
  }
  @HostBinding("style.transform")
  get transform() {
    return `rotate(0deg)`;
  }
  doc: Document;
  @Output() onload: EventEmitter<any> = new EventEmitter();

  constructor(injector: Injector) {
    super(injector, "am-image-picker-item-content");
    this.doc = this.injector.get(DOCUMENT);
  }

  ngOnInit() {
    const input = this.doc.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    this.render.appendChild(this.ele.nativeElement, input);
    onChange(input)
      .pipe(takeUntil(this.getCyc('ngOnDestroy')))
      .subscribe((res: any) => {
        const file = res.target.files[0];
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.onload.emit(e.target.result);
        };
        reader.readAsDataURL(file);
      });
  }
}
