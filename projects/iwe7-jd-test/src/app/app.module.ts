import { APP_BASE_HREF } from '@angular/common';
import { Iwe7JdIndexModule } from './../../../iwe7-jd-index/src/lib/iwe7-jd-index.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Iwe7JdIndexModule,
    RouterModule.forRoot([], { useHash: true })
  ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '/'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
