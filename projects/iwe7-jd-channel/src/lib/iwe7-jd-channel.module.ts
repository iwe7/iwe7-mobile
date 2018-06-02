import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Iwe7JdChannelComponent } from './iwe7-jd-channel.component';
import { Iwe7BetterScrollModule } from 'iwe7-better-scroll';

@NgModule({
  imports: [
    Iwe7BetterScrollModule,
    CommonModule
  ],
  declarations: [Iwe7JdChannelComponent],
  exports: [Iwe7JdChannelComponent]
})
export class Iwe7JdChannelModule { }
