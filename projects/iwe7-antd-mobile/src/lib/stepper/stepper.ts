import { Component, OnInit, Injector, Input } from "@angular/core";
import { Iwe7BaseComponent } from "iwe7-base";
@Component({
  selector: "am-stepper",
  templateUrl: "./stepper.html",
  styleUrls: ["./stepper.scss"]
})
export class AmStepperComponent extends Iwe7BaseComponent implements OnInit {
  @Input() value: number = 0;
  @Input() step: number = 1;

  constructor(injector: Injector) {
    super(injector, "am-stepper");
  }

  ngOnInit() {}

  add() {
    this.value += this.step;
  }

  del() {
    this.value -= this.step;
  }
}
