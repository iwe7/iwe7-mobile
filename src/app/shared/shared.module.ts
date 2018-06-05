import { Iwe7BoxModule } from './../../../projects/iwe7-box/src/lib/iwe7-box.module';
import { Iwe7SquareModule } from 'iwe7-square';
import { Iwe7SwiperModule } from './../../../projects/iwe7-swiper/src/lib/iwe7-swiper.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Iwe7BetterScrollModule } from '../../../projects/iwe7-better-scroll/src/public_api';
import { MatDialogModule, MatIconModule, MatButtonModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    Iwe7BetterScrollModule,
    Iwe7SwiperModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    Iwe7SquareModule,
    Iwe7BoxModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    Iwe7BetterScrollModule,
    Iwe7SwiperModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    Iwe7SquareModule,
    Iwe7BoxModule
  ]
})
export class SharedModule { }
