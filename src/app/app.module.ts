import { Iwe7UiModule } from '../../projects/iwe7-ui/src/public_api';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { Page404Component } from './404/page-404';

@NgModule({
  declarations: [AppComponent, Page404Component],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Iwe7UiModule,
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
export class AppModule { }
