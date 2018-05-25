import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule]
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {}
}
