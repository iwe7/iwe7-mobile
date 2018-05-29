import { Component, OnInit, Injector, AfterViewInit } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(public injector: Injector) {}

  ngOnInit() {
    document.body.addEventListener("touchstart", function() {});
  }

  ngAfterViewInit() {}
}
