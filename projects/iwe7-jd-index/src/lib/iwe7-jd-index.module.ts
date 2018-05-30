import { JdSearchComponent } from './jd-search/jd-search';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Iwe7JdIndexComponent } from './iwe7-jd-index.component';
import { JdSearchContainerComponent, JdSearchLayoutComponent, JdSearchViewComponent, JdSearchThemeDirective } from './jd-search/index';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JdFloorComponent } from './jd-floor/jd-floor';
import { JdFloorItemComponent } from './jd-floor-item/jd-floor-item';
import { JdFloorTitleComponent } from './jd-floor-title/jd-floor-title';
import { JdItemComponent } from './jd-item/jd-item';

import { Iwe7SquareModule } from 'iwe7-square';
export const JdComponents = [
  Iwe7JdIndexComponent,
  JdSearchContainerComponent,
  JdSearchLayoutComponent,
  JdSearchViewComponent,
  JdSearchComponent,
  JdSearchThemeDirective,
  JdFloorComponent,
  JdFloorItemComponent,
  JdFloorTitleComponent,
  JdItemComponent
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    Iwe7SquareModule
  ],
  declarations: [...JdComponents],
  exports: [Iwe7JdIndexComponent, JdSearchComponent]
})
export class Iwe7JdIndexModule { }
