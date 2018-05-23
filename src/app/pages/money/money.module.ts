import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoneyRoutingModule } from './money-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    MoneyRoutingModule
  ],
  declarations: [IndexComponent]
})
export class MoneyModule { }
