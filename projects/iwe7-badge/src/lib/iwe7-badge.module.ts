import { BadgeCornerDirective } from './badge-directives/badge-corner';
import { BadgeTextDirective } from './badge-directives/badge-text';
import { BadgeDotDirective } from './badge-directives/badge-dot';
import { BadgeContainerDirective } from './badge-container/badge-container';
import { BadgeOutletComponent } from './badge-outlet/badge-outlet';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

export const BadgeComponents = [
  BadgeOutletComponent
];

export const BadgeDirectives = [
  BadgeContainerDirective,
  BadgeDotDirective,
  BadgeTextDirective,
  BadgeCornerDirective
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...BadgeComponents,
    ...BadgeDirectives
  ],
  exports: [
    ...BadgeComponents,
    ...BadgeDirectives
  ]
})
export class Iwe7BadgeModule { }
