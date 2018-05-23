import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { PagesModule } from "./pages/pages.module";
import { SharedModule } from "./shared/shared.module";
import { APP_BASE_HREF } from "@angular/common";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
