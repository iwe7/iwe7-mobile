import { Iwe7OnHoverModule } from 'iwe7-on-hover';
import { KeyboardProvinceComponent } from './keyboard-province/keyboard-province';
import { KeyboardStringComponent } from './keyboard-string/keyboard-string';
import { KeyboardNumberComponent } from './keyboard-number/keyboard-number';
import { BetterCoreModule } from 'iwe7-better-scroll';
import { KeyboardEmojiComponent } from './keyboard-emoji/keyboard-emoji';
import { CommonModule } from '@angular/common';
import { Iwe7IndexListModule } from 'iwe7-index-list';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    Iwe7IndexListModule,
    CommonModule,
    BetterCoreModule,
    Iwe7OnHoverModule
  ],
  declarations: [
    KeyboardEmojiComponent,
    KeyboardNumberComponent,
    KeyboardStringComponent,
    KeyboardProvinceComponent
  ],
  exports: [
    KeyboardEmojiComponent,
    KeyboardNumberComponent,
    KeyboardStringComponent,
    KeyboardProvinceComponent
  ]
})
export class Iwe7KeyboardModule { }
