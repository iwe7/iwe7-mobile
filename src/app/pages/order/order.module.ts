import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../../shared/shared.module';
import { DetailComponent } from './detail/detail.component';
import { AddComponent } from './add/add.component';
import { ScanComponent } from './scan/scan.component';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule
  ],
  declarations: [IndexComponent, DetailComponent, AddComponent, ScanComponent]
})
export class OrderModule { }
