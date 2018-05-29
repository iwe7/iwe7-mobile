import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ViewEncapsulation,
  ElementRef,
  AfterViewInit
} from "@angular/core";
declare const require: any;
const __swiper = require("swiper");
const Swiper = __swiper.default || __swiper;
@Component({
  selector: "carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @Input() loop: boolean = true;
  @HostBinding("class.swiper-container") _container: boolean = true;
  swiper: any;

  @HostBinding("style.height.px")
  @Input()
  height: number;

  @Input() direction: string = "horizontal";

  @Input() items: any[] = [];
  constructor(public ele: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.swiper = new Swiper(this.ele.nativeElement, {
      loop: this.loop,
      direction: this.direction,
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
}
