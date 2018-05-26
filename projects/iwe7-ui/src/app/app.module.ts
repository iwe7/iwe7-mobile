import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { AppTestModule } from "./app-test/app-test.module";
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppTestModule
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {}
}
