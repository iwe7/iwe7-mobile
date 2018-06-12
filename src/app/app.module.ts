import { Iwe7KeyboardModule } from './../../projects/iwe7-keyboard/src/lib/iwe7-keyboard.module';
import { Iwe7CarPlateModule } from './../../projects/iwe7-car-plate/src/lib/iwe7-car-plate.module';
import { Iwe7CarBrandModule } from './../../projects/iwe7-car-brand/src/lib/iwe7-car-brand.module';
import { Iwe7VoiceEntryModule } from './../../projects/iwe7-voice-entry/src/lib/iwe7-voice-entry.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { Page404Component } from './404/page-404';
import {
  HttpClientModule, HttpClientJsonpModule
} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, Page404Component],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    Iwe7VoiceEntryModule,
    HttpClientModule,
    HttpClientJsonpModule,
    Iwe7CarBrandModule,
    Iwe7CarPlateModule,
    Iwe7KeyboardModule,
    RouterModule.forRoot(
      [
        {
          path: "",
          pathMatch: "full",
          redirectTo: "/order/index"
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
    },
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
