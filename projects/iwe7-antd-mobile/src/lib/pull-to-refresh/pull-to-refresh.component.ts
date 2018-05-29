import {
  Component,
  OnInit,
  HostBinding,
  Input,
  EventEmitter,
  Output,
  ElementRef,
  ViewChild,
  TemplateRef
} from "@angular/core";
import { fromEvent } from "rxjs";
import { tap, map, switchMap } from "rxjs/operators";

const prefixCls = "am-pull-to-refresh";
const DOWN = "down";
const UP = "up";
const INDICATOR = {
  activate: "松开立即刷新",
  deactivate: "pull",
  release: "loading",
  finish: "完成刷新"
};
const isWebView =
  typeof navigator !== "undefined" &&
  /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
function setTransform(nodeStyle: any, value: any) {
  nodeStyle.transform = value;
  nodeStyle.webkitTransform = value;
  nodeStyle.MozTransform = value;
}
import classNames from "classnames";

@Component({
  selector: "pull-to-refresh",
  templateUrl: "./pull-to-refresh.component.html",
  styleUrls: ["./pull-to-refresh.component.css"]
})
export class PullToRefreshComponent implements OnInit {
  @HostBinding("class.am-pull-to-refresh") _refresh: boolean = true;

  @Input() direction: string = "down";
  @HostBinding("class.am-pull-to-refresh-down")
  get amPullToRefreshDown() {
    return this.direction === "down";
  }

  @HostBinding("class.am-pull-to-refresh-up")
  get amPullToRefreshUp() {
    return this.direction === "up";
  }

  @ViewChild("upTpl") upTpl: TemplateRef<any>;
  @ViewChild("downTpl") downTpl: TemplateRef<any>;

  get templateTpl() {
    return this.direction === "up" ? this.upTpl : this.downTpl;
  }

  @Input() distanceToRefresh: number = 25;
  @Input() refreshing: boolean = false;
  @Output() onRefresh: EventEmitter<any> = new EventEmitter();

  @Input() indicator: any = INDICATOR;

  @ViewChild("content") content: ElementRef;

  currSt: any;
  dragOnEdge: any;

  _startScreenY: any;
  _ScreenY: any;
  _lastScreenY: any;
  contentRef: any;
  _timer: any;

  height: any;

  constructor(public ele: ElementRef) {}

  @ViewChild("deactivate") deactivate: TemplateRef<any>;
  @ViewChild("activate") activate: TemplateRef<any>;
  @ViewChild("release") release: TemplateRef<any>;
  @ViewChild("finish") finish: TemplateRef<any>;

  get tpl() {
    return this[this.currSt];
  }

  get contentClass() {
    let cls = `${prefixCls}-content ${prefixCls}-${this.direction}`;
    const cla = classNames(
      cls,
      !this.dragOnEdge && `am-pull-to-refresh-transition`
    );
    return cla;
  }

  ngOnInit() {
    this.init(this.content.nativeElement);
    this.contentRef = this.content.nativeElement;
    this.height = this.ele.nativeElement.clientHeight;
    this.triggerPullToRefresh();
  }

  init(ele: HTMLElement) {
    fromEvent(ele, "touchstart")
      .pipe(
        map((e: any) => {
          this._ScreenY = this._startScreenY = e.touches[0].screenY;
          this._lastScreenY = this._lastScreenY || 0;
          return {
            screenY: this._ScreenY,
            lastScreenY: this._lastScreenY
          };
        }),
        switchMap((start: any) => {
          return fromEvent(ele, "touchmove").pipe(
            map((e: any) => {
              const _screenY = e.touches[0].screenY;
              const { direction } = this;
              // 拖动方向不符合的不处理
              if (
                (direction === UP && this._startScreenY < _screenY) ||
                (direction === DOWN && this._startScreenY > _screenY)
              ) {
                return;
              }
              if (this.isEdge(ele, direction)) {
                if (!this.dragOnEdge) {
                  this.dragOnEdge = true;
                }
              }
              e.preventDefault();

              const _diff = Math.round(_screenY - this._ScreenY);
              this._ScreenY = _screenY;
              this._lastScreenY += _diff;
              this.setContentStyle(this._lastScreenY);

              if (Math.abs(this._lastScreenY) < this.distanceToRefresh) {
                if (this.currSt !== "deactivate") {
                  this.currSt = "deactivate";
                }
              } else {
                if (this.currSt === "deactivate") {
                  this.currSt = "activate";
                }
              }
              if (isWebView && e.changedTouches[0].clientY < 0) {
                this.onTouchEnd();
              }
            })
          );
        })
      )
      .subscribe();
    fromEvent(ele, "touchend")
      .pipe(
        tap(e => {
          this.onTouchEnd();
        })
      )
      .subscribe();
    fromEvent(ele, "touchcancel")
      .pipe(
        tap(e => {
          this.onTouchEnd();
        })
      )
      .subscribe();
  }

  triggerPullToRefresh() {
    if (!this.dragOnEdge) {
      if (this.refreshing) {
        if (this.direction === UP) {
          this._lastScreenY = -this.distanceToRefresh - 1;
        }
        if (this.direction === DOWN) {
          this._lastScreenY = this.distanceToRefresh + 1;
        }
        this.currSt = "release";
        this.setContentStyle(this._lastScreenY);
      } else {
        this.currSt = "finish";
        this.reset();
      }
    }
  }

  onTouchEnd() {
    if (this.dragOnEdge) {
      this.dragOnEdge = false;
    }
    if (this.currSt === "activate") {
      this.currSt = "release";
      this._timer = setTimeout(() => {
        if (!this.refreshing) {
          this.currSt = "finish";
          this.reset();
        }
        this._timer = undefined;
      }, 1000);
      this.onRefresh.emit("");
    } else {
      this.reset();
    }
  }

  reset() {
    this._lastScreenY = 0;
    this.setContentStyle(0);
  }

  setContentStyle(ty: number) {
    if (this.contentRef) {
      setTransform(this.contentRef.style, `translate3d(0px,${ty}px,0)`);
    }
  }

  getScrollContainer() {
    return document.body;
  }

  isEdge(ele: any, direction: string) {
    const container = this.getScrollContainer();
    if (container && container === document.body) {
      const scrollNode = document.scrollingElement
        ? document.scrollingElement
        : document.body;
      if (direction === UP) {
        return (
          scrollNode.scrollHeight - scrollNode.scrollTop <= window.innerHeight
        );
      }
      if (direction === DOWN) {
        return scrollNode.scrollTop <= 0;
      }
    }
    if (direction === UP) {
      return ele.scrollHeight - ele.scrollTop === ele.clientHeight;
    }
    if (direction === DOWN) {
      return ele.scrollTop <= 0;
    }
  }
}
