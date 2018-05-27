import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  TemplateRef,
  Component,
  OnInit,
  ViewContainerRef,
  Injector,
  ComponentFactoryResolver
} from "@angular/core";
import { AmInnerComponent } from "./inner";

@Directive({ selector: "[ngTemplateComponentStringOutlet]" })
export class NgTemplateComponentStringOutletDirective
  implements OnChanges, OnInit {
  @Input() ngTemplateComponentStringOutlet: any;
  constructor(
    public ele: ElementRef,
    public view: ViewContainerRef,
    public injector: Injector,
    public componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    console.log(
      "ng template component string outlet on init",
      this.ngTemplateComponentStringOutlet
    );
    this.update();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ("ngTemplateComponentStringOutlet" in changes) {
      if (!changes.ngTemplateComponentStringOutlet.isFirstChange) {
        this.update();
      }
    }
  }

  update() {
    if (typeof this.ngTemplateComponentStringOutlet === "string") {
      console.dir(this.ele.nativeElement);
      this.ele.nativeElement.parentElement.innerHTML = this.ngTemplateComponentStringOutlet;
    }
    console.log(typeof this.ngTemplateComponentStringOutlet);
    console.log(this.ngTemplateComponentStringOutlet instanceof TemplateRef);
    console.log(this.ngTemplateComponentStringOutlet instanceof Component);
  }
}
