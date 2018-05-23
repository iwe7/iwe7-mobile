import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    document.body.addEventListener("touchstart", function() {});
  }

  tap(e: any) {
    console.log(e);
  }
}
