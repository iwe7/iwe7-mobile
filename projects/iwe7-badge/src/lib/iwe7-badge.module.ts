import { BadgeContainerComponent } from './badge-container/badge-container';
import { BadgeOutletComponent } from './badge-outlet/badge-outlet';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BadgeOutletComponent,
    BadgeContainerComponent
  ],
  exports: [
    BadgeOutletComponent,
    BadgeContainerComponent
  ]
})
export class Iwe7BadgeModule { }
