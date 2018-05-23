import {
  Injector,
  ViewContainerRef,
  TemplateRef,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Iwe7UrlService } from "iwe7-url";
import { map } from "rxjs/operators";
import { coerceBooleanProperty } from "@angular/cdk/coercion";
import { Observable } from "rxjs";
export class HttpBaseDirective implements OnChanges {
  public http: HttpClient;
  public view: ViewContainerRef;
  public template: TemplateRef<any>;
  public url: Iwe7UrlService;

  // 是否app
  _isApp: boolean = false;
  @Input("httpIsApp")
  @Input("getIsApp")
  @Input("postIsApp")
  set httpIsApp(val: any) {
    this._isApp = coerceBooleanProperty(val);
  }
  get httpIsApp() {
    return this._isApp;
  }

  @Input("getAction")
  @Input("postAction")
  @Input("webGetAction")
  @Input("webPostAction")
  @Input("appGetAction")
  @Input("appPostAction")
  @Input("httpAction")
  httpAction: string;

  @Input("getParams")
  @Input("postParams")
  @Input("webGetParams")
  @Input("webPostParams")
  @Input("webGetParams")
  @Input("webPostParams")
  @Input("httpParams")
  httpParams: any;

  @Input("postBody")
  @Input("appPostBody")
  @Input("webPostBody")
  @Input("httpBody")
  httpBody: any;

  @Input("httpMethod") httpMethod: string = "get";

  constructor(public injector: Injector) {
    this.http = this.injector.get(HttpClient);
    this.view = this.injector.get(ViewContainerRef);
    this.template = this.injector.get(TemplateRef);
    this.url = this.injector.get(Iwe7UrlService);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.createView();
  }

  createView() {
    this.request().subscribe((data: any) => {
      const { res } = data;
      this.view.createEmbeddedView(this.template, {
        $implicit: res.data,
        code: res.code,
        msg: res.msg
      });
    });
  }

  request(): Observable<any> {
    let url = "";
    if (this.httpIsApp) {
      url = this.url.getOpenUrl(this.httpAction, this.httpParams);
    } else {
      url = this.url.getWebOpen(this.httpAction, this.httpParams);
    }
    if (this.httpMethod === "get") {
      return this.http.get(url);
    } else {
      return this.http.post(url, this.httpBody);
    }
  }
}
