import { NgModule, Injector } from "@angular/core";
import { CommonModule } from "@angular/common";
import { createCustomElement } from "@angular/elements";
import { RouterModule } from "@angular/router";

import { AppTestComponent } from "./app-test.component";

@NgModule({
  imports: [CommonModule],
  declarations: [AppTestComponent],
  entryComponents: [AppTestComponent]
})
export class AppTestModule {
  constructor(private injector: Injector) {
    this.ngDoBootstrap();
  }
  ngDoBootstrap() {
    const ctor = createCustomElement(AppTestComponent, {
      injector: this.injector
    });
    customElements.define("app-test", ctor);
  }
}
