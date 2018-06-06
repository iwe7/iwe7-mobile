import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  Type,
  HostBinding,
  ChangeDetectorRef,
  SimpleChanges,
  OnChanges,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "am-toast",
  templateUrl: "toast.html"
})
export class AmToastComponent implements OnInit, OnChanges {
  @Input() content: string | TemplateRef<any> | Type<any> = "loading...";
  @Input() duration: number = 3;
  @Input() onClose: Function;
  @Input() mask: boolean = true;
  @Input() icon: string | TemplateRef<any> | Type<any>;
  @Output() hide: EventEmitter<any> = new EventEmitter();
  @HostBinding("class.am-toast-mask")
  get toastMask() {
    return this.mask;
  }

  @HostBinding("class.am-toast-nomask")
  get toastNoMask() {
    return !this.mask;
  }

  @HostBinding("class.am-toast") _toast: boolean = true;
  constructor() { }

  ngOnInit() {
    if (this.duration > 0) {
      setTimeout(() => {
        this.hide.emit();
      }, this.duration * 1000);
    }
  }

  ngOnChanges(changes: SimpleChanges) { }
}
