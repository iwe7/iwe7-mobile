import {
  Injectable,
  ComponentRef,
  ElementRef,
  ApplicationRef
} from "@angular/core";
import { AmModalRef } from "./model/am-modal-ref";
import { AmModalComponent } from "./am-modal.component";
import {
  Overlay,
  OverlayRef,
  OverlayConfig,
  FlexibleConnectedPositionStrategy,
  OverlayPositionBuilder,
  ConnectedPosition
} from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { AmModalControlService } from "./am-modal-control.service";
import { OverlayBuilder } from "../../../../iwe7-base/src/public_api";
import { AmModalOptions } from "./am-modal.type";
import { AmTextComponent } from "../text/text";
import { AmInnerComponent } from "./directives/inner";
export const AmModalOptionsDefault: AmModalOptions = {
  popup: false,
  animationType: "slide-up",
  closable: true,
  maskClosable: true
};

@Injectable({
  providedIn: "root"
})
export class AmModalService {
  modalControl: AmModalControlService;
  constructor(
    public overlay: Overlay,
    public overlayPositionBuilder: OverlayPositionBuilder,
    public appRef: ApplicationRef
  ) {}
  closeAll(): void {
    this.modalControl.closeAll();
  }

  private getBackdropClass(options: AmModalOptions): string[] {
    return ["am-modal-mask"];
  }

  private getPanelClass(options: AmModalOptions): string[] {
    // "am-modal-wrap", "am-overlay"
    const panelClass = [];
    if (options.popup) {
      // panelClass.push("am-modal-wrap-popup");
    }
    return panelClass;
  }

  _getOverlayConfig(dialogConfig: AmModalOptions) {
    const state = new OverlayConfig({
      positionStrategy: this.overlay.position().global(),
      scrollStrategy: this.overlay.scrollStrategies.block(),
      panelClass: "am-modal-wrap",
      hasBackdrop: true,
      minWidth: "270px"
    });
    return state;
  }

  private getOverlayOptions(options: AmModalOptions): OverlayConfig {
    const width = document.body.clientWidth;
    const height = document.body.clientHeight;

    if (options.transparent) {
      const positionStrategy = this.overlay
        .position()
        .global()
        .top("50%")
        .left("50%");
      return {
        positionStrategy: positionStrategy
        // width: width + "px",
        // height: height + "px"
      };
    }
    return {};
  }
  create(options: any): any {
    options = { ...AmModalOptionsDefault, ...options };
    options.transparent = !options.popup;

    const backdropClass = ["am-modal-mask"];
    const cfg: OverlayConfig = {
      hasBackdrop: true,
      ...this._getOverlayConfig(options)
    };
    const componentPortal = new ComponentPortal(AmTextComponent);
    const overlayRef = this.overlay.create(cfg);
    overlayRef.backdropClick().subscribe(res => {
      if (options.closable && options.maskClosable) {
        overlayRef.dispose();
        overlayRef.detach();
      }
    });
    setTimeout(() => {
      options.text = "测试";
      const componentRef = overlayRef.attach(componentPortal);
      const instance = componentRef.instance;
      Object.assign(instance, options);
      console.log(instance.text);
    }, 0);
  }
  confirm(options: any): AmModalRef {
    return this.create(options);
  }
  info(options: any): AmModalRef {
    return this.create(options);
  }
  success(options: any): AmModalRef {
    return this.create(options);
  }
  error(options: any): AmModalRef {
    return this.create(options);
  }
  warning(options: any): AmModalRef {
    return this.create(options);
  }
}
