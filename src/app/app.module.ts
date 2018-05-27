import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA, APP_INITIALIZER } from "@angular/core";

import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { PagesModule } from "./pages/pages.module";
import { SharedModule } from "./shared/shared.module";
import { APP_BASE_HREF } from "@angular/common";

import { loadSprite } from "../../projects/iwe7-antd-mobile/src/public_api";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        {
          path: "",
          pathMatch: "full",
          redirectTo: "tabs/order/index"
        }
      ],
      {
        useHash: true
      }
    ),
    PagesModule,
    SharedModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: "/"
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => loadSprite(),
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
