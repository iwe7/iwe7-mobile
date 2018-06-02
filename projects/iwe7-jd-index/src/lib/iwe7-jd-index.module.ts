import { JdSearchModule } from './jd-search/jd-search.module';
import { JdToTopModule } from './jd-to-top/jd-to-top.module';
import { JdTipModule } from './jd-tip/jd-tip.module';
import { JdSwiperModule } from './jd-swiper/jd-swiper.module';
import { JdNewsModule } from './jd-news/jd-news.module';
import { JdItemModule } from './jd-item/jd-item.module';
import { JdHotsModule } from './jd-hots/jd-hots.module';
import { JdHeaderModule } from './jd-header/jd-header.module';
import { JdGridModule } from './jd-grid/jd-grid.module';
import { JdFooterModule } from './jd-footer/jd-footer.module';
import { JdFloorItemModule } from './jd-floor-item/jd-floor-item.module';
import { JdFloorTitleModule } from './jd-floor-title/jd-floor-title.module';
import { JdFloorModule } from './jd-floor/jd-floor.module';
import { JdBoxModule } from './jd-box/jd-box.module';
import { Iwe7JdIndexComponent } from './iwe7-jd-index.component';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iwe7SquareModule } from 'iwe7-square';

export const Iwe7JdModules = [
  JdBoxModule,
  JdFloorModule,
  JdFloorTitleModule,
  JdFloorItemModule,
  JdFooterModule,
  JdGridModule,
  JdHeaderModule,
  JdHotsModule,
  JdItemModule,
  JdNewsModule,
  JdSwiperModule,
  JdTipModule,
  JdToTopModule,
  JdSearchModule
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    Iwe7SquareModule,
    ...Iwe7JdModules
  ],
  declarations: [Iwe7JdIndexComponent],
  exports: [Iwe7JdIndexComponent, ...Iwe7JdModules]
})
export class Iwe7JdIndexModule { }
