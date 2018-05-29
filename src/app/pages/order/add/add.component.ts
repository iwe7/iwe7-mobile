import { Component, OnInit, AfterViewInit, ElementRef } from "@angular/core";
import { AmToastService } from "projects/iwe7-antd-mobile/src/lib/toast/toast.service";
import { AmModalService } from "projects/iwe7-antd-mobile/src/lib/modal/am-modal.service";
import { Dialog } from "iwe7-dialog";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})
export class AddComponent implements OnInit, AfterViewInit {
  current: number = 0;
  step1: FormGroup;
  step2: FormGroup;
  step3: FormGroup;
  constructor(
    public toast: AmToastService,
    public modal: AmModalService,
    public ele: ElementRef,
    public fb: FormBuilder
  ) {
    this.step1 = this.fb.group({
      carNum: ["car num", Validators.required],
      jarNum: ["jar num", Validators.required],
      licheng: ["licheng", Validators.required],
      realname: ["realname", Validators.required],
      mobile: ["mobile", Validators.required]
    });
    this.step2 = this.fb.group({});
    this.step3 = this.fb.group({});
  }

  ngOnInit() {}

  ngAfterViewInit() {}

  next() {
    this.current = this.current + 1;
  }
  finish() {}
}
