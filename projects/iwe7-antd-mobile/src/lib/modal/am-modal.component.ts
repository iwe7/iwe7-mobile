import { AmModalRef } from "./model/am-modal-ref";
import {
  Component,
  OnInit,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  ComponentRef,
  ElementRef,
  TemplateRef,
  Input,
  ViewChild,
  ViewContainerRef,
  Output,
  EventEmitter,
  HostBinding,
  ViewEncapsulation
} from "@angular/core";
import { AmModalOptions } from "./am-modal.type";
import { Observable, Subject } from "rxjs";
import { OverlayRef } from "@angular/cdk/overlay";
@Component({
  selector: "am-modal",
  templateUrl: "./am-modal.component.html",
  styleUrls: ["./am-modal.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AmModalComponent<T = any, R = any> extends AmModalRef<T, R>
  implements OnInit, OnChanges, AfterViewInit, OnDestroy, AmModalOptions {
  @Input() visible: boolean;
  @Input() closable: boolean;
  @Input() maskClosable: boolean;
  @Input() onClose: Function;

  @HostBinding("class.am-modal") modal: boolean = true;
  @HostBinding("class.am-modal-popup")
  @Input()
  popup: boolean;

  @Input() animationType: string;
  @HostBinding("class.am-modal-popup-slide-up")
  get slideUp() {
    return this.animationType === "slide-up";
  }

  @HostBinding("class.am-modal-popup-slide-down")
  get slideDown() {
    return this.animationType === "slide-down";
  }

  @HostBinding("class.am-modal-popup-slide-fade")
  get slideFade() {
    return this.animationType === "slide-fade";
  }

  @HostBinding("class.am-modal-popup-slide-slide")
  get slideSlide() {
    return this.animationType === "slide-slide";
  }

  @HostBinding("attr.role") role: string = "document";

  @HostBinding("class.am-modal-transparent")
  @Input()
  transparent: boolean;

  @Input() title: string | TemplateRef<{}>;
  @Input() footer: string | TemplateRef<{}>;
  @Input() content: string | TemplateRef<{}> = "content";

  @Output() nzVisibleChange = new EventEmitter<boolean>();

  afterOpen: Subject<void> = new Subject();
  afterClose: Subject<R> = new Subject();

  private container: HTMLElement | OverlayRef;
  private contentComponentRef: ComponentRef<T>;
  @ViewChild("modalContainer") modalContainer: ElementRef;
  @ViewChild("bodyContainer", { read: ViewContainerRef })
  bodyContainer: ViewContainerRef;
  constructor(private elementRef: ElementRef) {
    super();
  }
  ngOnInit() {
    console.log("am modal component on init", this.popup);
  }
  ngOnChanges() {
    console.log("am modal component on changes");
  }
  ngAfterViewInit() {
    if (this.contentComponentRef) {
      this.bodyContainer.insert(this.contentComponentRef.hostView);
    }
  }
  ngOnDestroy() {
    if (this.container instanceof OverlayRef) {
      this.container.dispose();
    }
  }
  open(): void {
    this.visible = true;
  }
  close(result?: R): void {}
  destroy(result?: R): void {
    this.close(result);
  }
  getContentComponent(): T {
    return this.contentComponentRef && this.contentComponentRef.instance;
  }
  getElement(): HTMLElement {
    return this.elementRef && this.elementRef.nativeElement;
  }
  getInstance(): AmModalComponent {
    return this;
  }
  onClickMask(e: MouseEvent) {
    if (this.maskClosable && this.closable) {
      this.close();
    }
  }
  triggerOk(): void {}
  triggerCancel(): void {}
}
