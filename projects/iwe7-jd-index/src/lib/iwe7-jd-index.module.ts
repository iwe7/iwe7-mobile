import { HttpClientModule } from '@angular/common/http';
import { Iwe7FlexBoxModule } from 'iwe7-flex';
import { FormsModule } from '@angular/forms';
import { JdItemModule } from './jd-item/jd-item.module';
import { JdFooterModule } from './jd-footer/jd-footer.module';
import { Iwe7JdIndexComponent } from './iwe7-jd-index.component';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iwe7SquareModule } from 'iwe7-square';
import { Iwe7JdModule } from '../../../iwe7-jd/src/public_api';

export const Iwe7JdModules = [
  JdFooterModule,
  JdItemModule,
  Iwe7JdModule
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    Iwe7FlexBoxModule,
    ...Iwe7JdModules,
  ],
  declarations: [Iwe7JdIndexComponent],
  exports: [Iwe7JdIndexComponent, ...Iwe7JdModules]
})
export class Iwe7JdIndexModule { }
