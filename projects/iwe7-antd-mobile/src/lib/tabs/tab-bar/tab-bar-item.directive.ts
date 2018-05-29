import {
  Directive,
  Input,
  Renderer2,
  ElementRef,
  HostBinding,
  Component,
  OnInit
} from "@angular/core";

@Component({
  selector: "[tabBarItem]",
  template: `
    <span badge [text]="tab.text" [hot]="tab.hot" [dot]="tab.dot">{{tab.title}}</span>
  `
})
export class TabBarItemDirective implements OnInit {
  @Input() vertical: boolean = true;
  @Input() size: number = 0;
  @HostBinding("class.am-tabs-default-bar-tab") _tab: boolean = true;
  @Input() tab: any = {};
  constructor(public render: Renderer2, public ele: ElementRef) {}
  ngOnInit() {
    if (!this.vertical) {
      this.render.setStyle(this.ele.nativeElement, "width", this.size + "%");
    } else {
      this.render.setStyle(this.ele.nativeElement, "height", this.size + "%");
    }
  }
}
