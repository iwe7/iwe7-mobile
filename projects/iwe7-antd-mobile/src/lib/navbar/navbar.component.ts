import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ViewChild,
  TemplateRef,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  @Input() title: any;
  get titleIsString() {
    return typeof this.title === "string";
  }

  @Input() mode: string = "light";

  @HostBinding("class.am-navbar-light")
  get isLight() {
    return this.mode === "light";
  }

  @HostBinding("class.am-navbar-dark")
  get isDark() {
    return this.mode === "dark";
  }

  @ViewChild("left") left: TemplateRef<any>;
  @ViewChild("right") right: TemplateRef<any>;

  // 左边内容
  _leftContent: any;
  @Input()
  get leftContent() {
    return this._leftContent || this.left;
  }
  set leftContent(val: any) {
    this._leftContent = val;
  }

  get isLeftContentString() {
    return typeof this._leftContent === "string";
  }

  // 右边内容
  _rightContent: any;
  @Input()
  get rightContent() {
    return this._rightContent || this.right;
  }
  set rightContent(val: any) {
    this._rightContent = val;
  }

  get isRightContentString() {
    return typeof this._rightContent === "string";
  }

  @Output() onLeftClick: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onLeftMenu() {
    this.onLeftClick.emit();
  }
}
