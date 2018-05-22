import { Component } from "@angular/core";
import {
  LocalStorage,
  SessionStorage,
  LocalStorageService,
  SessionStorageService
} from "../../projects/iwe7-web-storage/src/public_api";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @LocalStorage() title = "app";
  @SessionStorage() test2 = "test3-1";

  constructor(
    public session: SessionStorageService,
    public local: LocalStorageService
  ) {
    console.log(this.local.get("title"));
    console.log(this.session.get("test2"));
  }
}
