import { Page404Component } from './404/page-404';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA, APP_INITIALIZER } from "@angular/core";

import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { PagesModule } from "./pages/pages.module";
import { SharedModule } from "./shared/shared.module";
import { APP_BASE_HREF } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
  declarations: [AppComponent, Page404Component],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PagesModule,
    RouterModule.forRoot(
      [
        {
          path: "",
          pathMatch: "full",
          redirectTo: "tabs/order/index"
        },
        {
          path: "**",
          component: Page404Component
        }
      ],
      {
        useHash: true
      }
    ),
    SharedModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: "/"
    }
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
