import {
  Directive,
  Injector,
  HostBinding,
  OnInit,
  Output,
  EventEmitter,
  Input
} from "@angular/core";
import { Iwe7BaseDirective } from "iwe7-base";
import { onChange } from "iwe7-util";
import { DOCUMENT } from "@angular/common";
import { takeUntil, tap, switchMap, map } from "rxjs/operators";
import { from, Observable } from "rxjs";

import * as _ from "lodash";
@Directive({ selector: "[am-image-picker-upload-btn]" })
export class AmImagePickerUploadBtnDirective extends Iwe7BaseDirective
  implements OnInit {
  @HostBinding("attr.role") role: string = "button";
  doc: Document;

  @Output() onload: EventEmitter<any> = new EventEmitter();
  @Input() multi: boolean = false;
  constructor(injector: Injector) {
    super(injector, "am-image-picker-upload-btn");
    this.doc = this.injector.get(DOCUMENT);
  }

  ngOnInit() {
    const input = this.doc.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.multiple = this.multi;
    this.render.appendChild(this.ele.nativeElement, input);
    onChange(input)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((res: any) => {
        const files = res.target.files;
        from(files)
          .pipe(
            map((file: any) => {
              return Observable.create((observer: any) => {
                const reader = new FileReader();
                reader.onload = e => {
                  observer.next(e.target.result);
                  observer.complete();
                };
                reader.readAsDataURL(file);
              });
            })
          )
          .subscribe(res => {
            res.subscribe(f => {
              this.onload.emit(f);
            });
          });
      });
  }
}
