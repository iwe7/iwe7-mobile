import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';

@NgModule({
  imports: [
    CommonModule,
    ServiceRoutingModule
  ],
  declarations: [IndexComponent, AddComponent]
})
export class ServiceModule { }
