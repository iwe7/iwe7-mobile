import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  Injector,
  HostBinding,
  ContentChild
} from "@angular/core";
import { Iwe7BaseComponent } from "iwe7-base";
@Component({
  selector: "step",
  templateUrl: "step.html",
  styleUrls: ["./step.scss"]
})
export class StepComponent extends Iwe7BaseComponent implements OnInit {
  @Input() status: string = "wait";
  @HostBinding("class.am-steps-item-wait")
  wait() {
    return this.status === "wait";
  }

  @HostBinding("class.am-steps-item-process")
  get process() {
    return this.status === "process";
  }

  @HostBinding("class.am-steps-item-finish")
  get finish() {
    return this.status === "finish";
  }

  @HostBinding("class.am-steps-item-error")
  get error() {
    return this.status === "error";
  }
  @ContentChild("title", { read: TemplateRef })
  title: TemplateRef<any>;
  @ContentChild("description", { read: TemplateRef })
  description: TemplateRef<any>;
  @ContentChild("icon", { read: TemplateRef })
  icon: TemplateRef<any>;
  constructor(injector: Injector) {
    super(injector, "am-steps-item");
  }
  ngOnInit() {}
}
