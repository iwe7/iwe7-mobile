import {
  Component,
  OnInit,
  ElementRef,
  Injector,
  ReflectiveKey,
  ViewChild
} from "@angular/core";
import { OnTap } from "../../projects/iwe7-decorator/src/public_api";
declare var Reflect: any;
import { HeaderComponent } from "./pages/header/header.component";
import { TestService } from "./test.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  @ViewChild('ele') _ele: ElementRef;
  constructor(public injector: Injector, public ele: ElementRef) {
    console.log(Reflect.ownKeys(AppComponent));
    console.log(Reflect.getMetadataKeys(AppComponent));
    console.log(Reflect.getOwnMetadataKeys(AppComponent));
    console.log(Reflect.get(AppComponent, "__annotations__"));
    console.log(Reflect.get(AppComponent, "length"));
    console.log(Reflect.get(AppComponent, "name"));
    console.log(Reflect.get(AppComponent, "prototype"));
    console.log(Reflect.get(AppComponent, "__prop__metadata__"));
  }
  ngOnInit() {
    document.body.addEventListener("touchstart", function() {});
  }

  tap(e: any) {
    console.log(e);
  }

  onTap(ele: any) {
    console.log(ele);
  }
}
