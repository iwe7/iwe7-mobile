import {
  OverlayConfig,
  Overlay,
  NoopScrollStrategy,
  OverlayRef
} from "@angular/cdk/overlay";
import { defer, Observable, of as observableOf, Subject } from "rxjs";

import {
  ViewContainerRef,
  Inject,
  InjectionToken,
  Injector,
  ɵComponentType as ComponentType,
  TemplateRef,
  Optional
} from "@angular/core";
import { Direction, Directionality } from "@angular/cdk/bidi";
import { ScrollStrategy } from "@angular/cdk/overlay";
import { TemplateParseError } from "@angular/compiler";
import {
  TemplatePortal,
  ComponentPortal,
  PortalInjector
} from "@angular/cdk/portal";
export const Iwe7DialogScrollStrategyFactory = () => () => {
  return new NoopScrollStrategy();
};
export const IWE7_DIALOG_SCROLL_STRATEGY = new InjectionToken(
  "IWE7_DIALOG_SCROLL_STRATEGY",
  {
    providedIn: "root",
    factory: Iwe7DialogScrollStrategyFactory
  }
);
export const IWE7_DIALOG_DATA = new InjectionToken<any>("MatDialogData", {
  providedIn: "root",
  factory: () => ({})
});

export type DialogRole = "dialog" | "alertdialog";
export interface DialogPosition {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}
export class Iwe7DialogConfig<D = any> {
  viewContainerRef?: ViewContainerRef;
  id?: string;
  role?: DialogRole = "dialog";
  panelClass?: string | string[] = "";
  hasBackdrop?: boolean = true;
  backdropClass?: string = "";
  disableClose?: boolean = false;
  width?: string = "";
  height?: string = "";
  minWidth?: number | string;
  minHeight?: number | string;
  maxWidth?: number | string = "80vw";
  maxHeight?: number | string;
  position?: DialogPosition;
  data?: D | null = null;
  direction?: Direction;
  ariaDescribedBy?: string | null = null;
  ariaLabel?: string | null = null;
  autoFocus?: boolean = true;
  scrollStrategy?: ScrollStrategy;
  closeOnNavigation?: boolean = true;
}
export abstract class Iwe7DialogBase {
  constructor(
    public _injector: Injector,
    public _overlay: Overlay,
    @Optional() private _location: Location
  ) {}

  _createOverlay(config: Iwe7DialogConfig): OverlayRef {
    const overlayConfig = this._getOverlayConfig(config);
    return this._overlay.create(overlayConfig);
  }

  _getOverlayConfig(dialogConfig: Iwe7DialogConfig) {
    const state = new OverlayConfig({
      positionStrategy: this._overlay.position().global(),
      scrollStrategy:
        dialogConfig.scrollStrategy || this._overlay.scrollStrategies.block(),
      panelClass: dialogConfig.panelClass,
      hasBackdrop: dialogConfig.hasBackdrop,
      direction: dialogConfig.direction,
      minWidth: dialogConfig.minWidth,
      minHeight: dialogConfig.minHeight,
      maxWidth: dialogConfig.maxWidth,
      maxHeight: dialogConfig.maxHeight
    });
    if (dialogConfig.backdropClass) {
      state.backdropClass = dialogConfig.backdropClass;
    }
    return state;
  }

  abstract getDialogById(): any;
  abstract closeAll(): void;

  abstract open(): void;
}
