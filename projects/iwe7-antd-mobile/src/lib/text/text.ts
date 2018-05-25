import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "am-text",
  templateUrl: "text.html"
})
export class AmTextComponent implements OnInit {
  @Input() text: string;
  constructor() {}
  ngOnInit() {}
}
