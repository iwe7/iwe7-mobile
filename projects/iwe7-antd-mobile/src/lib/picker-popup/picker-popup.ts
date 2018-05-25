import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "am-picker-popup",
  templateUrl: "picker-popup.html"
})
export class AmPickerPopupComponent implements OnInit {
  @Input() title: string;
  constructor() {}

  ngOnInit() {}
}
