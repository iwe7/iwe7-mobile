import {
  Component,
  OnInit,
  Input,
  Injector,
  ContentChild,
  ContentChildren,
  QueryList,
  AfterContentInit,
  HostBinding,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { Iwe7BaseComponent } from "iwe7-base";
import { StepComponent } from "./step/step";

@Component({
  selector: "steps",
  templateUrl: "steps.html",
  styleUrls: ["./steps.scss"]
})
export class StepsComponent extends Iwe7BaseComponent
  implements OnInit, AfterContentInit, OnChanges {
  @Input() current: number = 1;

  @Input() size: string = "small";
  @HostBinding("class.am-steps-small")
  get small() {
    return this.size === "small";
  }

  @Input() status: string = "process";
  // 方向
  @Input() direction: string = "horizontal";

  @HostBinding("class.am-steps-horizontal")
  get horizontal() {
    return this.direction === "horizontal";
  }

  @HostBinding("class.am-steps-vertical")
  get vertical() {
    return this.direction === "vertical";
  }

  @ContentChildren(StepComponent) steps: QueryList<StepComponent>;

  constructor(injector: Injector) {
    super(injector, "am-steps");
  }

  ngOnInit() {}

  ngAfterContentInit() {
    this.update();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ("current" in changes) {
      this.update();
    }
  }

  update() {
    if (this.steps) {
      this.steps.map((item, index) => {
        if (this.current === index) {
          item.status = this.status;
        }
      });
    }
  }
}
