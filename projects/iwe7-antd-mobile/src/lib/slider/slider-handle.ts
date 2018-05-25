import { Directive, Injector, Input, HostBinding, SimpleChanges, OnChanges, Output, EventEmitter, OnInit } from "@angular/core";
import { Iwe7BaseDirective } from "iwe7-base";
import { onTouchStart, onTouchMove, onTouchEnd, onTouchCancel } from "iwe7-util";

@Directive({ selector: "[am-slider-handle]" })
export class AmSliderHandleDirective extends Iwe7BaseDirective implements OnChanges, OnInit {
  @Input() valuemin: number;
  @Input() valuemax: number;
  @Input() valuenow: number;

  @HostBinding("attr.role") role: string = "slider";
  @HostBinding('style.border-color')
  @HostBinding('style.background-color') bgColor: string = 'blue';
  @HostBinding('style.left.%') left: number;
  @HostBinding('style.width.px') width: number = 14;
  @HostBinding('style.height.px') height: number = 14;
  @HostBinding('style.margin-left.px')
  get marginLeft(){
    return -this.width/2;
  }

  @HostBinding('style.margin-top.px')
  get margintTop(){
    return -4.5;
  }

  @Output() valuenowChange: EventEmitter<number> = new EventEmitter();

  constructor(injector: Injector) {
    super(injector, "am-slider-handle");
  }

  ngOnInit(){
    
  }

  ngOnChanges(changes: SimpleChanges){
    this.left = (this.valuenow / (this.valuemax-this.valuemin)) * this.valuemax;
    this.valuenowChange.emit(this.left);
  }
}
