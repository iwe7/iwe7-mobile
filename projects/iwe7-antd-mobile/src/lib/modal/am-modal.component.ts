import { AmModalRef } from "./model/am-modal-ref";
import {
  Component,
  OnInit,
  TemplateRef,
  Input,
  HostBinding,
  ElementRef,
  ViewEncapsulation
} from "@angular/core";
@Component({
  selector: "am-modal",
  templateUrl: "./am-modal.component.html",
  styleUrls: ["./am-modal.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AmModalComponent {
  @HostBinding('class.am-modal-content') _content: boolean = true;

  @Input() title: string | TemplateRef<{}> = 'title';
  @Input() footer: string | TemplateRef<{}> = 'footer';
  @Input() content: string | TemplateRef<{}> = "content";
  constructor(private elementRef: ElementRef) {}
}
