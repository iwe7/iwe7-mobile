import { Component, OnInit, Injector, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Iwe7BaseComponent } from "iwe7-base";
@Component({
  selector: "am-slider",
  templateUrl: "slider.html",
  styleUrls: ["./slider.scss"]
})
export class AmSLiderComponent extends Iwe7BaseComponent implements OnInit, OnChanges {
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() value: number = 50;

  @Input() height: number = 5;

  @Input() activeColor: string = 'red';
  @Input() unActiveColor: string = 'blue';

  _width: number = 0;

  constructor(injector: Injector) {
    super(injector, "am-slider");
  }
  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges){
    this.updateStyle();
  }

  updateStyle(){
    this.styleObj = {
      [`active-color`]: this.activeColor,
      [`un-active-color`]: this.unActiveColor,
      width: this._width
    }
  }

  _valueChange(e: number){
    this._width = e;
    this.updateStyle();
  }
}
