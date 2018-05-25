import {
  Directive,
  TemplateRef,
  Type,
  Input,
  ViewContainerRef,
  Renderer2,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injector
} from "@angular/core";
import { AmTextComponent } from "../text/text";
import * as _ from "lodash";
@Directive({ selector: "[ngTemplateTypeString]" })
export class NgTemplateTypeStringDirective {
  _ngTemplateTypeString: string | TemplateRef<any> | Type<any>;
  @Input()
  set ngTemplateTypeString(val: string | TemplateRef<any> | Type<any>) {
    if (typeof val === "string") {
      this.createString(val as string);
    } else if (val instanceof TemplateRef) {
      this.createEmbeddedView(val, this.ngTemplateTypeStringParams);
    } else if (val instanceof Type) {
      this.createComponent(val, this.ngTemplateTypeStringParams);
    } else {
      console.log(val);
    }
    this._ngTemplateTypeString = val;
  }
  get ngTemplateTypeString() {
    return this._ngTemplateTypeString;
  }

  @Input() ngTemplateTypeStringParams: any = {};
  constructor(
    public view: ViewContainerRef,
    public render: Renderer2,
    public componentFactoryResolver: ComponentFactoryResolver,
    public injector: Injector
  ) {}
  createString(text: string) {
    const data = _.defaultsDeep(
      { text: text },
      this.ngTemplateTypeStringParams
    );
    this.createComponent(AmTextComponent, {
      text: text
    });
  }

  createComponent(comp: Type<any>, data: any = {}) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      comp
    );
    const componentRef = this.view.createComponent(componentFactory);
    const instance = componentRef.instance;
    for (const key in data) {
      instance[key] = data[key];
    }
  }

  createEmbeddedView(ref: TemplateRef<any>, data?: any) {
    this.view.createEmbeddedView(ref, {
      $implicit: data
    });
  }
}
