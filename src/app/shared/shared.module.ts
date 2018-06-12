import { Iwe7SharedModule } from 'iwe7-ui';
import { AppFooterComponent } from './app-footer/app-footer';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Iwe7JdModule } from 'iwe7-jd';
@NgModule({
  imports: [
    CommonModule,
    Iwe7SharedModule,
    Iwe7JdModule
  ],
  declarations: [
    AppFooterComponent
  ],
  exports: [
    CommonModule,
    AppFooterComponent,
    Iwe7SharedModule,
    Iwe7JdModule
  ],
  entryComponents: [
    AppFooterComponent
  ]
})
export class SharedModule { }
