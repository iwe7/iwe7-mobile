import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarPlateComponent } from './car-plate/car-plate';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CarPlateComponent
  ],
  exports: [
    CarPlateComponent
  ]
})
export class Iwe7CarPlateModule { }
