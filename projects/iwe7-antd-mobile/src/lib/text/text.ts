import { Component, OnInit, Input, Injector } from "@angular/core";
import { Iwe7BaseComponent } from "iwe7-base";
@Component({
  selector: "am-text",
  templateUrl: "text.html"
})
export class AmTextComponent extends Iwe7BaseComponent implements OnInit {
  @Input() text: string;
  constructor(injector: Injector) {
    super(injector, "am-text");
  }
  ngOnInit() {
    console.log(this.text);
  }
}
