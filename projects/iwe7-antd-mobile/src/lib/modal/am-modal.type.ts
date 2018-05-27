import { TemplateRef, ElementRef } from "@angular/core";
export interface AmModalOptions {
  visible?: boolean;

  closable?: boolean;
  maskClosable?: boolean;

  onClose?: Function;

  transparent?: boolean;
  popup?: boolean;
  animationType?: string;

  title?: string | TemplateRef<{}>;
  footer?: any | TemplateRef<{}>;
  content?: string | TemplateRef<{}>;

  platform?: any;
  transitionName?: any;
  maskTransitionName?: any;
  className?: any;
  wrapClassName?: any;

  ele?: ElementRef;
}

export interface AmModalAlertType {
  title?: any;
  message?: any;
  actions?: any;
  platform?: any;
}

export interface AmModalPromptType {
  title?: any;
  message?: any;
  callbackOrActions?: any;
  type?: any;
  defaultValue?: any;
  placeholders?: any;
  platform?: any;
}

export interface AmModalOperation {
  actions: any;
  platform: any;
}
