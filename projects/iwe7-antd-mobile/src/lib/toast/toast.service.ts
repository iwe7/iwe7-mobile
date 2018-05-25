import {
  Injectable,
  TemplateRef,
  Type,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  ComponentRef,
  ViewContainerRef
} from "@angular/core";
import { AmToastComponent } from "./toast";
export interface AmToastInterface {
  content?: string | TemplateRef<any> | Type<any>;
  duration?: number;
  onClose?: Function;
  mask?: boolean;
}
@Injectable({
  providedIn: "root"
})
export class AmToastService {
  componentRef: ComponentRef<any>;
  constructor(
    public componentFactoryResolver: ComponentFactoryResolver,
    public appRef: ApplicationRef,
    public injector: Injector
  ) {
    console.log(appRef);
  }
  success(cfg: AmToastInterface) {
    this.createToast(cfg);
  }
  fail(cfg: AmToastInterface) {
    this.createToast(cfg);
  }
  info(cfg: AmToastInterface) {
    this.createToast(cfg);
  }
  loading(cfg: AmToastInterface) {
    this.createToast(cfg);
  }
  offline(cfg: AmToastInterface) {
    this.createToast(cfg);
  }
  hide() {
    this.appRef.detachView(this.componentRef.hostView);
  }
  createToast(cfg: AmToastInterface) {
    this.componentRef = this.componentFactoryResolver
      .resolveComponentFactory(AmToastComponent)
      .create(this.injector, []);
    const instance: AmToastComponent = this.componentRef.instance;
    for (const key in cfg) {
      instance[key] = cfg[key];
    }
    console.log(instance);
    this.appRef.attachView(this.componentRef.hostView);
  }
}
