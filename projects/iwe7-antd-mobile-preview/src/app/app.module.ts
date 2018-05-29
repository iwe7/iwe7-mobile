import { BrowserModule } from "@angular/platform-browser";
import { NgModule, APP_INITIALIZER } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { PagesModule } from "./pages/pages.module";
import { loadSprite } from "../../../../projects/iwe7-antd-mobile/src/public_api";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot([], { useHash: true }),
    PagesModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => loadSprite(),
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
